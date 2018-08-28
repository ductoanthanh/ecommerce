import React from 'react';
import Card from './card';

const CardBlock = (props) => {

  const renderCards = () =>(
    props.list ?
      props.list.map((card,i)=>(
        <Card
          className="card_home_item"
          key={i}
          {...card}
        />
      ))
    : null
  )


  return (
    <div className="card_block row">
      <div className="container row" style={{width: '90%'}}>
        {
            props.title ?
                <div className="title">
                    {props.title}
                </div>
            :null
        }
        <div className="card_list">
            { renderCards(props.list) }
        </div>
      </div>
    </div>
  );
};

export default CardBlock;
