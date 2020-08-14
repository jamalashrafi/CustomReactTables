import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../components/Table';
import PageNumbers from '../components/PageNumbers';

const FrontEndDataTable = () => {
  const [totalRecords, setTotalRecords] = useState([]);
  const [recordsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchApiData = async () => {
      setLoading(true);
      let { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );

      setTotalRecords(data);
      setLoading(false);
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

  const changeCurrentPage = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return 'Loading...';
  }

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
