/**
 * cleanSet - returns a string of all the set values that start with a
 * specific string (@startString)
 *
 * set: Set
 * @startString: string
 */
export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }

  return [...set.keys()].reduce((string, item, idx) => (item.startsWith(startString)
    ? `${idx === 1 ? string.slice(startString.length) : string}-${item.slice(startString.length)}`
    : string));
}
