import { Component, IComponent } from "@lenra/components";
import { Api } from "./Api";

export type View = (data: any[] | undefined, props: props) => Component<IComponent> | IComponent;

export type Listener = (props: props, event: event, api: Api) => any;

export type data = any[];
export type props = { [key: string]: any } | undefined
export type event = { value: any } | undefined