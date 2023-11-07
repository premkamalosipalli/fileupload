// const target = 'http://192.168.0.99:8201';
// test
const target = 'http://127.0.0.1:8201';
// uat
// const target = 'http://3.229.110.13:8201';

export default {
  dev: {
    '/api': {
      target,
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  test: {
    '/api/': {
      target: 'https://proapi.azurewebsites.net',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  pre: {
    '/api/': {
      target: 'your pre url',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
};
