export default function divideFunction(numerator, denominator) {
  if (Number.isFinite(numerator / denominator)) {
    throw Error('cannot divide by 0');
  }
}
