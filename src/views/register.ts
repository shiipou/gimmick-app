import { Flex, Text, Container, Form, TextField, Button, Component, IComponent } from "@lenra/components"

import { Api } from "../classes/_Api"
import { data, props } from "../classes/_types"
import { views } from "../index.gen"

export default function (_data: data, _props: props): Component<IComponent> | IComponent {
    return Flex([
        Flex([
            Text("Welcome to Gimmick.").style({
                fontSize: 24,
                fontWeight: "bold"
            }),
            Text("Before you can start using Gimmick, you need to setup your account."),
            Text("This will only take a few seconds."),
            Container(
                Form(
                    Flex([
                        TextField("")
                            .name("username")
                            .style({
                                decoration: {
                                    label: { 
                                        type: "text",
                                        value: "Please enter your username."
                                    }
                                }
                            }),
                        Button("Validate")
                            .submit(true)
                    ]).direction("vertical")
                        .fillParent(true)
                        .crossAxisAlignment("center")
                ).onSubmit("register")
            ).maxWidth(250)
        ]).direction("vertical")
            .mainAxisAlignment("center")
            .crossAxisAlignment("center")
            .fillParent(true)
    ]).direction("horizontal")
        .mainAxisAlignment("center")
        .crossAxisAlignment("center")
        .fillParent(true)
}

