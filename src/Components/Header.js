import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue, setSelectedRelevance, setSelectedModel, updateFilteredCars } from '../Store/headerSlice'; // Import updateFilteredCars
import { RiArrowDropDownLine } from 'react-icons/ri';
import '../Components/Styles/Header.css';

const Header = () => {
  // Redux state and dispatch
  const searchValue = useSelector((state) => state.header.searchValue);
  const selectedRelevance = useSelector((state) => state.header.selectedRelevance);
  const selectedModel = useSelector((state) => state.header.selectedModel);
  const cars = useSelector((state) => state.cards.currentCars); 
  const dispatch = useDispatch();

  useEffect(() => {
    // Filter cars based on search input
    const filteredCars = cars.filter((car) =>
      car.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    
    dispatch(updateFilteredCars(filteredCars)); 
  }, [searchValue, cars, dispatch]);

  // Function to handle search input change
  const handleSearchChange = (e) => {
    dispatch(setSearchValue(e.target.value));
  };

 
  const handleRelevanceChange = (value) => {
    dispatch(setSelectedRelevance(value));
  };

 
  const handleModelChange = (value) => {
    dispatch(setSelectedModel(value));
  };

  return (
    <div className='Header-Container'>
      <div className='Header-wrapper'>
        <div className='Search-bar'>
          <input
            type='text'
            placeholder='Search'
            className='Search-input'
            value={searchValue}
            onChange={handleSearchChange}
          />
        </div>
        <div className='Relevance-dropdown'>
          Relevance <RiArrowDropDownLine onClick={() => handleRelevanceChange('Relevance')} />
        </div>
        <div className='Relevance-dropdown'>
          Models <RiArrowDropDownLine onClick={() => handleModelChange('Models')} />
        </div>
      </div>
    </div>
  );
};

export default Header;