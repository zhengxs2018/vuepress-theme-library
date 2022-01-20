import { defineClientAppEnhance } from '@vuepress/client'

import Twikoo from './components/Twikoo.vue'

export default defineClientAppEnhance(({ app }) => {
  app.component('Twikoo', Twikoo)
})
