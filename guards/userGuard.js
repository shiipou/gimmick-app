'use strict'

import { View } from '@lenra/components'

import { default as GuardsModule } from './_guards.js'

export default ([user], {page, guards}) => {
  if(user?.username == null) {
    return View("register")
  }

  return GuardsModule([], {page, guards})
}
