export default function iterateThroughObject(reportWithIterator) {
  let everyEmployee = '';
  // eslint-disable-next-line no-plusplus
  for (let idx = 0; idx < reportWithIterator.length; idx++) {
    if (idx === (reportWithIterator.length - 1)) {
      everyEmployee += `${reportWithIterator[idx]}`;
    } else {
      everyEmployee += `${reportWithIterator[idx]} | `;
    }
  }

  return everyEmployee;
}
