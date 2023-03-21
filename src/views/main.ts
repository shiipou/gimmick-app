import { Component, Flex, IComponent, View } from "@lenra/components"
import { data, props } from "../classes/types"
import { views } from "../index.gen"
import GuardsModule from "../guards/_guards"


export default function (data: data, _props: props): Component<IComponent> | IComponent {
  return GuardsModule(data, {
    page: View("layout")
      .coll("users")
      .query({
        "id": "@me"
      }),
    guards: [
      View("appGuard")
        .coll("app")
        .query({}),
      View("userGuard")
        .coll("users")
        .query({
          "id": "@me"
        })
    ]
  })
}
