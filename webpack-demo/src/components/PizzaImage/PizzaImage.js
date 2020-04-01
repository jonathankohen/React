import React from 'react';

import classes from './PizzaImage.css';
import PizzaImage from '../../assets/pizza.jpg';

export default function PizzaImg() {
  return (
    <div className={classes.Pizza}>
      <img src={PizzaImage} className={classes.PizzaImg} />
    </div>
  );
}
