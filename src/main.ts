import { createApp } from 'vue'
import App from '@/App.vue'

import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/pl'
import quasarIconSet from 'quasar/icon-set/material-icons'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

createApp(App)
    .use(Quasar, {
        plugins: {},
        lang: quasarLang,
        iconSet: quasarIconSet,
        config: {
            dark: true,
        }
    })
    .mount('#app')
