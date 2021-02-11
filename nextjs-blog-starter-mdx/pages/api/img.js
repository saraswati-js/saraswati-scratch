import fs from 'fs'
import path from 'path'

export default (req, res) => {
  // res.status(200).json({ name: 'John Doe' })

  const tea = path.join(
    process.env.ROOT,
    'pages/api',
    './tea.jpeg'
  )

  const img = fs.readFileSync(tea)
  res.writeHead(200, { 'Content-Type': 'image/jpg' })
  res.end(img, 'Base64')
}
