import React from 'react';
import './IngredientComp.css';

interface Props extends React.PropsWithChildren{
  image: string;
  onButtonClick:React.MouseEventHandler;
  name:string;
  count:number;
  onDelete:React.MouseEventHandler;
  price:number;
  totalPrice:number;
}

const IngredientComp: React.FC<Props> = (props) => {
  return (
      <div className="ingredient" >
        <img onClick={props.onButtonClick} src={props.image} alt='#'/>
        <div>{props.name}</div>
        <span> x {props.count}</span>
        <p>{props.children}</p>
        <div style={{paddingLeft:"50px"}}>{props.price} KGZ</div>
        <div>{props.totalPrice}</div>
      </div>

  );
};

export default IngredientComp;