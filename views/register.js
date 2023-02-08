'use strict'

module.exports = (data, props) => {
    return {
        type: "flex",
        direction: "horizontal",
        mainAxisAlignment: "center",
        crossAxisAlignment: "center",
        fillParent: true,
        children: [
            {
                type: "flex",
                direction: "vertical",
                mainAxisAlignment: "center",
                crossAxisAlignment: "center",
                fillParent: true,
                children: [
                    {
                        type: "text",
                        value: "Welcome to Gimmick.",
                        style: {
                            fontSize: 24,
                            fontWeight: "bold"
                        }
                    }, {
                        type: "text",
                        value: "Before you can start using Gimmick, you need to setup your account.",
                    }, {
                        type: "text",
                        value: "This will only take a few seconds."
                    }, {
                        type: "container",
                        constraints: {
                            maxWidth: 250
                        },
                        child: {
                            type: "form",
                            onSubmit: {
                                action: "register"
                            },
                            child: {
                                type: "flex",
                                direction: "vertical",
                                fillParent: true,
                                crossAxisAlignment: "center",
                                children: [
                                    {
                                        type: "textfield",
                                        value: "",
                                        name: "username",
                                        style: {
                                            decoration: {
                                                label: {
                                                    type: "text",
                                                    value: "Please enter your username."
                                                }
                                            }
                                        }
                                    }, {
                                        type: "button",
                                        text: "Validate",
                                        submit: true
                                    }
                                ]
                            }
                        }
                    }
                ]
            }
        ]
    }
}