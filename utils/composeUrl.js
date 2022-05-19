export default function composeUrl(fnMethod, num1, num2) {
  const skeletonUrl =
    "/api/" +
    `${fnMethod}` +
    `?num1=${num1}` +
    "&" +
    `num2=${num2}`

  return skeletonUrl
}
