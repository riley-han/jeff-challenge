export default function handler(req, res) {
  const { num1, num2 } = req.query

  const result = parseFloat(num1) + parseFloat(num2)

  res.status(200).json({ result: `${result}` })
}
