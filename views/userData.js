'use strict'

module.exports = ([user], props) => {
    console.log("User data: ", props.user)
    return {
        type: "text",
        value: JSON.stringify(props.user)
    }
}
