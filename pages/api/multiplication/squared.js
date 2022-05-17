export default function handler(req, res) {
  const { num } = req.query

  const result = parseFloat(num) * parseFloat(num)

  res.status(200).json({ result: `${result}` })
}
