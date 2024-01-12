// Card.tsx
import React from 'react';
import { Property } from '../../interfaces/propertyTypes';

interface CardProps {
  property: Property; 
}

const Card: React.FC<CardProps> = ({ property }) => {
  return (
    <div>
      <h2>{property.title}</h2>
      <p>{property.description}</p>
    </div>
  );
};

export default Card;
