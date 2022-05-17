export default function handler(req, res) {
  const { num1, num2 } = req.query

  const result = parseInt(num1) * parseInt(num2)

  res.status(200).json({ result: `${result}` })
}
