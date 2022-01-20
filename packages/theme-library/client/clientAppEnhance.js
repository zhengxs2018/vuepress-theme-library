import { defineClientAppEnhance } from '@vuepress/client'

import DocSideToc from './components/DocSideToc.vue'
import DocComment from './components/DocComment.vue'

export default defineClientAppEnhance(({ app }) => {
  app.component('DocSideToc', DocSideToc)
  app.component('DocComment', DocComment)
})
