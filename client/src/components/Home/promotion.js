import React from "react";
import MyButton from "../utils/button";

const HomePromotion = (props) => {
  const promotion = {
    img:
      "http://cdn.shopify.com/s/files/1/1678/5005/files/bg-box-great_d66bad5f-dc20-4890-aa0d-7cf5af1ec242_2000x2000.jpg?v=1482860242",
    lineOne: "Up to 40% off",
    lineTwo:
      "Whether You Want To Rock Out In Front Of Millions Or Learn Your Favorite Song. The Guitar Is The Ultimate Portable Music Making Tool",
    linkTitle: "Shop now",
    linkTo: "/shop"
  };

  const renderPromotion = () =>
    promotion ? (
      <div
        className="home_promotion_img"
        style={{
          background: `url(${promotion.img})`
        }}
      >
        <div style={{ marginBottom: "80px" }}>
          <h2 className="tag-title">{promotion.lineOne}</h2>
          <h3 className="tag-low-title">{promotion.lineTwo}</h3>
        </div>
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <img
            className="responsive-img"
            src="https://cdn.shopify.com/s/files/1/1678/5005/files/img-box-great_1000x1000.png?v=1482858631"
          />
        </div>
        <MyButton
          type="default"
          title={promotion.linkTitle}
          linkTo={promotion.linkTo}
          addStyles={{
            margin: "10px 0 0 0"
          }}
        />
      </div>
    ) : null;

  return <div className="home_promotion">{renderPromotion()}</div>;
};

export default HomePromotion;
