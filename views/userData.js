'use strict'

module.exports = (data, props) => {
    console.log("User data: ", props.user)
    return {
        type: "text",
        value: JSON.stringify(props.user)
    }
}
