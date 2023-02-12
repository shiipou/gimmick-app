'use strict'

import { Text } from "@lenra/components"

export default (data, props) => {
    return Text(
        JSON.stringify(props.user)
    )
}
