'use strict'

module.exports = (data, {user}) => {
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
                        value: "Guild creation",
                        style: {
                            fontSize: 24,
                            fontWeight: "bold"
                        }
                    }, {
                        type: "text",
                        value: "You're about to create a new guild. A guild is a group of people around a community that'll collaborate together.",
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
                                action: "createGuild",
                                props: {
                                    user: user
                                }
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
                                        name: "name",
                                        style: {
                                            decoration: {
                                                label: {
                                                    type: "text",
                                                    value: "Please enter a name for your guild."
                                                }
                                            }
                                        }
                                    }, {
                                        type: "flex",
                                        direction: "horizontal",
                                        children: [{
                                            type: "button",
                                            text: "Cancel",
                                            mainStyle: "secondary",
                                            onPressed: {
                                                action: "navigation",
                                                props: {
                                                    "page": "home"
                                                }
                                            }
                                        }, {
                                            type: "button",
                                            text: "Create",
                                            submit: true
                                        }]
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