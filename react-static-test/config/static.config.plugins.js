import path from 'path'

export default () => ([
  [
    require.resolve('react-static-plugin-source-filesystem'),
    {
      location: path.resolve('./src/route-layouts'),
    },
  ],

  require.resolve('react-static-plugin-reach-router'),
  require.resolve('react-static-plugin-sitemap'),
  // [
  //   `react-static-plugin-css-modules`,
  //   {
  //     modules: true, // set true by default
  //     localIdentName: '[path][name]__[local]--[hash:base64:5]', // just an example
  //     // any other options you wish from css-loader
  //     // want to use sass? you can track it down in your webpack build and add the loader
  //     // otherwise open an issue tagging @ScriptedAlchemy. He will enhance the options if required 
  //   }
  // ],
])