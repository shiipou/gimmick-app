'use strict'

module.exports = (data, props) => {
    return {
        type: "text",
        value: JSON.stringify(props.user)
    }
}
