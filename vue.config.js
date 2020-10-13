
module.exports = {
  devServer: {
      proxy: {
          '/api': {
              target: 'https://sport.xunyunsoft.com',
              // 允许跨域
              changeOrigin: true,
              ws: true,
              pathRewrite: {
                  '^/api': ''
              }
          }
      }
  } 
} 
