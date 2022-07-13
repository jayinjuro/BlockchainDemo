const withImages = require('next-images')

const wiImages=withImages()
const image={disableStaticImages: true}

// module.exports={images: {
//   disableStaticImages: true
// }}

module.exports={withImages,image}



// withImages({
//   webpack(config, options) {
//     config.module.rules.push({
//       test: /\.pdf$/i,
//       type: 'asset/source'
//     })
//     return config
//   }
// })