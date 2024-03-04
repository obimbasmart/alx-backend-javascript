export default function createIteratorObject(report) {
  let allEmployees = [];
  for (const dept of Object.keys(report.allEmployees)) {
    allEmployees = [...allEmployees, ...report.allEmployees[dept]];
  }

  return allEmployees;
}
