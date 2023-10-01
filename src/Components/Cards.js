
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentCars } from '../Store/cardsSlice';
import { setCurrentPage } from '../Store/paginationSlice';
import '../Components/Styles/Cards.css';
import { AiOutlineHeart } from 'react-icons/ai';
import carsData from '../CarsData.json';

const Cards = () => {
  // Redux state and dispatch
  const currentCars = useSelector((state) => state.cards.currentCars);
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const carsPerPage = useSelector((state) => state.pagination.carsPerPage);
  const searchValue = useSelector((state) => state.header.searchValue); 
  const dispatch = useDispatch();


  useEffect(() => {
    
    const startIdx = (currentPage - 1) * carsPerPage;
    const endIdx = startIdx + carsPerPage;
  
    
    const filteredCars = carsData.filter((car) =>
      car.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  
    
    const carsForPage = filteredCars.slice(startIdx, endIdx);
  

    dispatch(setCurrentCars(carsForPage));
  }, [dispatch, currentPage, carsPerPage, searchValue]);
  

  
 

  return (
    <div className="row">
      {currentCars.map((car) => (
        <div key={car.id} className="col-md-4 col-sm-12">
          <div className="Cards">

            <div className="Card-header">
              <img src={car.image} className="Cars-image" alt={car.name} />
              <div className="Card-body">
                <span className="Car-name">{car.name}</span>
                <div className="Car-model">{car.model}</div>
              </div>
              <div className="Card-body">
                <span className="Card-content">{car.people}</span>
                <span className="Card-content">{car.fuelType}</span>
              </div>
              <div className="Card-body">
                <span className="Card-content">{car.fuelEfficiency}</span>
                <span className="Card-content">{car.transmission}</span>
              </div>
              <hr className="line" />
              <div className="Card-body">
                <span className="Price">{car.price}</span>
                <div className="heart-rent-container">
                  <div className="heart-icons">
                    <AiOutlineHeart />
                  </div>
                  <button className="Rent-now">Rent now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;