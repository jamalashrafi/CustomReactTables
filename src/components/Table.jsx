import React from 'react';

const Table = ({ data }) => {
  return (
    <div className="tableWraper">
      <table id="table">
        <thead>
          <tr>
            <th>User Id</th>
            <th>id</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>
          {data.map((x, i) => {
            return (
              <tr key={i}>
                <td>{x.userId}</td>
                <td>{x.id}</td>
                <td>{x.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
