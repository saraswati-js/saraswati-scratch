'use strict'

import visit from 'unist-util-visit'
import getVideoId from 'get-video-id'
import Mermaid from 'react-mermaid2'

export default function mermaid() {
  return transformer
}

// const isYoutubeEmbedLink = (node) => {
//   return true
// }

function transformer(tree) {
  visit(tree, 'code', (currnode) => {
    if (currnode.lang !== 'mermaid') {
      return
    }
    
    console.log(currnode)

    // let [node] = paragraphNode.children

    // if (!isYoutubeEmbedLink(node)) {
    //   return
    // }

    currnode.type = 'jsx'
    currnode.value = (
        <Mermaid chart={`
        graph TD;
        A-->B;
        A-->C;
        B-->D;
        C-->D;
        `} />
      )
  })
}

