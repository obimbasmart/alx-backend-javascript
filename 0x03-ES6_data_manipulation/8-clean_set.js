/**
 * cleanSet - returns a string of all the set values that start with a
 * specific string (@startString)
 *
 * set: Set
 * @startString: string
 */
export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const filteredList = [];
  set.forEach((element) => {
    if (element.startsWith(startString)) {
      filteredList.push(element);
    }
  });

  return filteredList.join('-');
}
