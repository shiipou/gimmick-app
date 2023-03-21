import { Component, IComponent, Text } from "@lenra/components"
import { data, props } from "../classes/types"

export default function (_data: data, props: props): Component<IComponent> | IComponent {
    return Text(
        JSON.stringify(props.user)
    )
}
