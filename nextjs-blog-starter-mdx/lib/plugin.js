'use strict'

var fs = require('fs')
var path = require('path')
var mimes = require('mime/lite')
var visit = require('unist-util-visit')

// console.log(process)

export default function embedImages() {
  console.log('asd')
  return transformer
}

function transformer(tree, file, done) {
  console.log('hey, im linked in here')
  var count = 0

  console.log(JSON.stringify(tree, null, ''))

  visit(tree, 'image', visitor)

  if (!count) {
    done()
  }

  function visitor(node) {
    console.log(node)
    node.url = 'andric mother fucker'
    // var url = node.url

    // if (url && /^\.{1,2}\//.test(url)) {
    //   count++
    //   fs.readFile(path.resolve(file.cwd, file.dirname, url), 'base64', one)
    // }

    // function one(err, data) {
    //   var mime

    //   if (err) {
    //     count = Infinity
    //     return done(err)
    //   }

    //   mime = mimes.getType(path.extname(url))

    //   if (mime) {
    //     node.url = 'data:' + mime + ';base64,' + data
    //   }

    //   node.url = 'andric mother fucker'

    //   if (--count === 0) {
    //     done()
    //   }
    // }
  }
}
