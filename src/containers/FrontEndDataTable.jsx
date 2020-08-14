import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../components/Table';
import PageNumbers from '../components/PageNumbers';

const FrontEndDataTable = () => {
  const [totalRecords, setTotalRecords] = useState([]);
  const [recordsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchApiData = async () => {
      let { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      // console.log(data);
      setTotalRecords(data);
    };
    fetchApiData();
  }, []);

  let totalPages = Math.floor(totalRecords.length / recordsPerPage);
  let lastRecordOfCurrentPage = currentPage * recordsPerPage;
  let firstRecordOfCurrentPage = lastRecordOfCurrentPage - recordsPerPage;
  let recordsOfCurrentPage = totalRecords.slice(
    firstRecordOfCurrentPage,
    lastRecordOfCurrentPage
  );
  console.log('-----------');
  console.log(totalPages);
  console.log(firstRecordOfCurrentPage);
  console.log(lastRecordOfCurrentPage);
  console.log(totalRecords.length);
  console.log(recordsOfCurrentPage.length);

  const changeCurrentPage = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Table data={recordsOfCurrentPage} />

      <div className="paginationContainer">
        {currentPage === 1 ? (
          ''
        ) : (
          <span
            className="paginationPrev"
            onClick={() => changeCurrentPage(currentPage - 1)}
          >
            {'<< '}
          </span>
        )}
        <PageNumbers
          totalPages={totalPages}
          changeCurrentPage={changeCurrentPage}
        />
        {currentPage === totalPages ? (
          ''
        ) : (
          <span
            className="paginationNext"
            onClick={() => changeCurrentPage(currentPage + 1)}
          >
            {' >>'}
          </span>
        )}
      </div>
    </div>
  );
};

export default FrontEndDataTable;
