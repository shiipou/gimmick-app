'use strict'

import { Flex, Text, Container, Form, TextField, Button } from "@lenra/components"

export default (data, props) => {
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
            TextField()
              .name("username")
              .style({
                label: Text("Please enter your username.")
              }),
            Button("Validate")
              .submit(true)
          ]).direction("vertical")
            .fillParent(true)
            .crossAxisAlignment("center")
        ).onSubmit({
          action: "register"
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
