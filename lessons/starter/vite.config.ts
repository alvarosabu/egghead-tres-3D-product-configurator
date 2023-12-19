import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { templateCompilerOptions } from '@tresjs/core'
import UnoCSS from 'unocss/vite'
import { presetIcons, presetUno } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
    ...templateCompilerOptions
    }),
    UnoCSS({
      presets: [
        presetUno(),
        presetIcons({
          extraProperties: {
            'display': 'inline-block',
            'vertical-align': 'middle',
            // ...
          },
        }),
      ]
    })
  ],
})
