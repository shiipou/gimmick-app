'use strict'

import { Flex, Text, Container, Form, TextField, Button } from "@lenra/components"

export default (_data, {user}) => {
    return Flex([
        Flex([
            Text("Guild creation")
              .fontSize(24)
              .fontWeight("bold"),
            Text("You're about to create a new guild. A guild is a group of people around a community that'll collaborate together."),
            Text("This will only take a few seconds."),
            Container(
                Form(
                    Flex([
                        TextField()
                            .name("name")
                            .label("Please enter a name for your guild.")
                            .label("Please enter a name for your guild."),
                        Flex([
                            Button("Cancel")
                                .mainStyle("secondary")
                                .onPress({
                                    action: "navigation",
                                    props: {
                                        "page": "home"
                                    }
                                }),
                            Button("Create")
                                .submit(true)
                            ]).direction("horizontal")
                    ]).direction("vertical")
                    .crossAxisAlignment("center")
                    .fillParent(true),
                ).onSubmit({
                    action: "createGuild",
                    props: {
                        user: user
                    }
                })
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