import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProperties, selectProperties } from '../../redux/propertySlice';
import Cards from '../../components/cards/Cards'; // Asegúrate de tener la importación correcta
import Header from '../../components/header/Header';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const properties = useSelector(selectProperties);

  useEffect(() => {
    dispatch(getProperties());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Cards properties={properties} />
    </div>
  );
};

export default Home;
