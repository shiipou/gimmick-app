import * as fs from 'fs/promises';
import * as path from 'path';

const SOURCE_DIR = "src";
const LISTENERS_DIR = "listeners";
const LISTENERS_PATH = `${SOURCE_DIR}/${LISTENERS_DIR}`;
const VIEWS_DIR = "views";
const VIEWS_PATH = `${SOURCE_DIR}/${VIEWS_DIR}`;

Promise.all([indexListeners(), indexViews()])
    .then(writeIndexFile);

async function indexListeners() {
    // Get all the files in the src/listeners dir
    const listenerFiles = await fs.readdir(LISTENERS_PATH);
    // Import each one
    const promises = listenerFiles
        .map(file => file.replace(/\.ts$/, ""))
        .map(async file => {
            const mod = await import(`./${LISTENERS_PATH}/${file}`);
            const entries = Object.entries(mod)
                .filter(([key, value]) => value instanceof Function)
                .map(([key, value]) => {
                    const listener = {
                        module: `./${LISTENERS_DIR}/${file}`,
                        key
                    }
                    if (key == "default") return {
                        // add it with the name of the file
                        key: file,
                        value: listener
                    }
                    // add all the exported functions with the name of the function
                    return { key, value: listener };
                });
            return entries;
        });
    return Object.fromEntries(
        (await Promise.all(promises))
            .flat()
            .map(({ key, value }) => [key, value])
    );
}

// Recursively find all `.ts` files in a directory
async function treeDir(directory: string): Promise<string[] | string> {
    const files = await fs.readdir(directory);

    const promises = files.map(async (file) => {
        const fullPath = path.join(directory, file);
        const stat = await fs.lstat(fullPath);
        if (stat.isDirectory()) {
            return treeDir(fullPath);
        } else if (file.endsWith(".ts")) {
            return fullPath;
        } else {
            return [];
        }
    });

    const nestedEntries = await Promise.all(promises);
    const flattenedEntries = nestedEntries.flat();

    return flattenedEntries;
}

async function indexViews() {
    // Get all the files in the src/views dir
    const viewFiles = await treeDir(VIEWS_PATH);
    // Import each one
    const promises = (viewFiles as string[]).filter(x=>!path.basename(x).startsWith('_')).map(async file => {
            const modulePath = `./${file.replace(/\.ts$/, "")}`
            const mod = await import(modulePath)
            const entries = Object.entries(mod)
                .filter(([key, value]) => value instanceof Function)
                .map(([key, value]) => {
                    const view = {
                        module: modulePath.replace('src/', ''),
                        key
                    }
                    const name =  path.basename(file, '.ts')
                    if (key == "default") return {
                        // add it with the name of the file
                        key: name,
                        value: view
                    }
                    // add all the exported functions with the name of the file concatenated with the name of the function
                    return {
                        key: `${name}:${key}`,
                        value: view
                    };
                });
            return entries;
        });
    return Object.fromEntries(
        (await Promise.all(promises))
            .flat()
            .map(({ key, value }) => [key, value])
    );
}

async function writeIndexFile([listeners, views]) {
    return fs.writeFile("src/index.gen.ts",
        `import { View, Listener } from "./classes/_types";

const listenersCache = ${JSON.stringify(listeners)};
export async function getListener(name): Promise<Listener> {
    let listener = listenersCache[name];
    if (!listener) throw new Error(\`No listener defined for the name '\${name}'\`);
    if (!(listener instanceof Function)) {
        const mod = await import(listener.module);
        listener = mod[listener.key];
    }
    return listener;
}
export const listeners = { ${Object.keys(listeners)
            .map(name => `${name}: "${name}"`)
            .join(', ')} };

const viewsCache = ${JSON.stringify(views)};
export async function getView(name): Promise<View> {
    let view = viewsCache[name];
    if (!view) throw new Error(\`No view defined for the name '\${name}'\`);
    if (!(view instanceof Function)) {
        const mod = await import(view.module);
        view = mod[view.key];
    }
    return view;
}
export const views = { ${Object.keys(views)
            .map(name => `${name}: "${name}"`)
            .join(', ')} };
`
    );
}
