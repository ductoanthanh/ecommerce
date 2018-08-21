import React from 'react';
import CardBlockShop from '../utils/cardBlock_shop';

const LoadMoreCards = (props) => {
  return (
    <div>
      <div>
        <CardBlockShop
          grid={props.grid}
          list={props.products}
        />
      </div>

      <div className="load_more_container">
        <span onClick={() => props.loadMore()}>Load More</span>
      </div>

    </div>
  );
};

export default LoadMoreCards;
