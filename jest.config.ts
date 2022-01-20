// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
import path from 'path'

import type { Config } from '@jest/types'
import { keyBy, mapValues } from 'lodash'

import pkg from './package.json'
import { findPackages } from './scripts/findPackages'

export default async (): Promise<Config.InitialOptions> => {
  const packages = await findPackages({
    // 暂时忽略
    exclude: [
      '@zhengxs/vuepress-theme-library',
      '@zhengxs/vuepress-plugin-gitalk',
      '@zhengxs/vuepress-plugin-twikoo'
    ]
  })

  return {
    preset: 'ts-jest',
    globals: {
      __DEV__: false,
      __TEST__: true,
      __VERSION__: pkg['version'],
      'ts-jest': {
        tsconfig: {
          target: 'esnext',
          sourceMap: true
        }
      }
    },

    coverageDirectory: 'coverage',
    coverageReporters: ['html', 'lcov', 'text'],
    collectCoverageFrom: packages.map(pkg =>
      path.resolve(pkg['location'], 'src/**/*.ts')
    ),

    projects: packages.map(pkg => {
      return {
        displayName: pkg['name'],
        testMatch: [
          path.resolve(pkg['location'], '__tests__/**/*.(spec|test).ts')
        ]
      }
    }),

    moduleNameMapper: mapValues(keyBy(packages, 'name'), pkg =>
      path.resolve(pkg['location'], 'src')
    )
  }
}
