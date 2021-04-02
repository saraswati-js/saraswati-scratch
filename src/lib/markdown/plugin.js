'use strict'

import visit from 'unist-util-visit'
import getVideoId from 'get-video-id'

export default function embedImages() {
  return transformer
}

const isYoutubeEmbedLink = (node) => {
  if (!node.url) {
    return false
  }

  try {
    const { host } = new URL(node.url)
    const isYoutubeActivityLink = (host.includes("youtube.com") || host.includes("youtube-nocookie.com"))
    const isLink = node.type === "link"
    const isEmbedLink = true

    return isLink && isEmbedLink && isYoutubeActivityLink
  } catch (e) {
    return false
  }
}

const getEmbedCode = (url) => {
  const { id: videoid } = getVideoId(url)
  return `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoid}" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>`
}

function transformer(tree) {
  visit(tree, 'paragraph', (paragraphNode) => {
    if (paragraphNode.children.length !== 1) {
      return
    }

    let [node] = paragraphNode.children

    if (!isYoutubeEmbedLink(node)) {
      return
    }

    node.type = 'jsx'
    node.value = getEmbedCode(node.url)
  })
}

