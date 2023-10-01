

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, setTotalPages } from '../Store/paginationSlice';
import '../Components/Styles/pages.css';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import CarsData from '../CarsData.json';

const Pages = () => {
  // Redux state and dispatch
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const totalPages = useSelector((state) => state.pagination.totalPages);
  const carsPerPage = useSelector((state) => state.pagination.carsPerPage);
  const dispatch = useDispatch();

  
  const calculateTotalPages = () => {
    const totalCars = CarsData.length;
    const newTotalPages = Math.ceil(totalCars / carsPerPage);
    dispatch(setTotalPages(newTotalPages));
  };

  useEffect(() => {
    calculateTotalPages();
  }, [carsPerPage]);

  // Function to handle page change
  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  
  const pageNumbers = Array.from({ length: totalPages }).map((_, index) => index + 1);

  return (
    <div className='Page-container'>
      <div className='page-wrapper'>
        <span
          className={`page ${currentPage === 1 ? 'disabled' : ''}`}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <AiOutlineArrowLeft />
        </span>
        {pageNumbers.map((page) => (
          <span
            key={page}
            className={`page ${currentPage === page ? 'active' : ''}`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </span>
        ))}
        <span
          className={`page ${currentPage === totalPages ? 'disabled' : ''}`}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <AiOutlineArrowRight />
        </span>
      </div>
    </div>
  );
};

export default Pages;
