// Cards.tsx
import React from 'react';
import Card from '../card/Card'; // Asegúrate de tener la importación correcta
import { Property } from '../../interfaces/propertyTypes';

interface CardsProps {
  properties: Property[]; 
}

const Cards: React.FC<CardsProps> = ({ properties }) => {
  return (
    <div>
      {properties.map((property) => (
        <Card key={property._id} property={property} />
      ))}
    </div>
  );
};

export default Cards;
