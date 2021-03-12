'use strict'

var fs = require('fs')
var path = require('path')
var mimes = require('mime/lite')
var visit = require('unist-util-visit')

export default function embedImages() {
  return transformer
}

function transformer(tree, file, done) {
  var count = 0

  visit(tree, 'image', visitor)

  if (!count) {
    done()
  }

  function visitor(node) {
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
