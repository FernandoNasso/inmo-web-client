import React from 'react';
import Card from '../card/Card';
import { Property } from '../../interfaces/propertyTypes';
import styles from './Cards.module.css'; // Importa el archivo de estilos

interface CardsProps {
  properties: Property[];
}

const Cards: React.FC<CardsProps> = ({ properties }) => {
  return (
    <div className={styles.cards}> {/* Aplica la clase de estilo */}
      {properties.map((property) => (
        <Card key={property._id} property={property} />
      ))}
    </div>
  );
};

export default Cards;
