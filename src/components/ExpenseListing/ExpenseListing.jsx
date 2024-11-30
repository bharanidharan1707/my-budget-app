export default function ExpenseListing({ records }) {
    return (
      <table>
        <thead>
          <tr>
            <th>Exp. Date</th>
            <th>Expense Description</th>
            <th>Expense Amount</th>
          </tr>
        </thead>
        <tbody>
          {records.map(record => (
            <tr key={record.expdesc}>
              <td>{record.date}</td>
              <td>{record.expdesc}</td>
              <td>{record.expamt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  