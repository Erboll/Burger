import React from 'react';
import './IngredientComp.css';

interface Props extends React.PropsWithChildren{
  image: string;
  onButtonClick:React.MouseEventHandler;
  name:string;
  count:number

}

const IngredientComp: React.FC<Props> = (props) => {
  return (
      <div className="ingredient" onClick={props.onButtonClick}>
        <img  src={props.image} alt='#'/>
        <div>{props.name}</div>
        <span> x {props.count}</span>
        <p>{props.children}</p>
      </div>

  );
};

export default IngredientComp;