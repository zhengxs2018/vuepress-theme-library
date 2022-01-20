import { defineClientAppEnhance } from '@vuepress/client'

import Gitalk from './components/Gitalk.vue'

export default defineClientAppEnhance(({ app }) => {
  app.component('Gitalk', Gitalk)
})
