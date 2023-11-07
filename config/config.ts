import { defineConfig } from '@umijs/max';
import { join } from 'path';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
import routes from './routes';

export default defineConfig({
  hash: false,
  targets: {
    // ie: 11,
  },
  routes,
  theme: {
    'root-entry-name': 'variable',
  },
  ignoreMomentLocale: true,
  fastRefresh: true,
  model: {},
  initialState: {},
  layout: {
    locale: false,
    ...defaultSettings,
  },
  locale: {
    default: 'en-US',
    // antd: true,
    // baseNavigator: true,
    antd: false,
    baseNavigator: false,
  },
  antd: {},
  request: {},
  access: {},
  //================ Plug in configuration =================
  presets: ['umi-presets-pro'],
  /**
   * @name openAPI
   * @description Generate serve and mock based on openapi specifications, which can reduce a lot of boilerplate code
   */
  openAPI: [
    {
      requestLibPath: "import { request } from '@umijs/max'",
      schemaPath:
        'https://gw.alipayobjects.com/os/antfincdn/CA1dOm%2631B/openapi.json',
      projectName: 'swagger',
    },
  ],
  mfsu: {
    exclude: ['@playwright/test'],
  },
});
