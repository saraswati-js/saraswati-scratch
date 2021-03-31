
const Linked = ({ text, href }) => (
  <a href={href}>{text}</a>
)

/**
 * B: http://localhost:3000/posts/main/account/hard/overriding/quaerat-dolores-vero-incidunt-ratione
 * G: http://localhost:3000/posts/account/hard/overriding/quaerat-dolores-vero-incidunt-ratione
 */

export default function Label({ text, href }) {
  return (
    <>
      {(href) ? <Linked text={text} href={href} /> : <span>{text}</span>}
    </>
  )
}