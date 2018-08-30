import React from 'react';
import Slider from 'react-slick';
import MyButton from '../utils/button';

const HomeSlider = (props) => {

    const slides = [
        {
            img:'https://cdn.shopify.com/s/files/1/1678/5005/files/slide-1-h1_1600x.jpg',
            lineOne:'Limited Edition',
            lineTwo:'Start Playing Guitar Today',
            linkTitle:'Shop now',
            linkTo:'/shop'
        },
        {
            img:'https://images.unsplash.com/photo-1505318671783-f03bb223d3f7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a4bb66024ec762de5adb7fc63a1a34fe&auto=format&fit=crop&w=1950&q=80',
            lineOne:'B-Stock',
            lineTwo:'Awesome discounts',
            linkTitle:'View offers',
            linkTo:'/shop'
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    }

    const generateSlides = () => (
        slides ?
            slides.map((item,index)=>(
                <div key={index}>
                    <div className="featured_image"
                        style={{
                            background:`url(${item.img})`
                        }}
                    >
                        <div className="featured_action">
                            <h2 className="tag-title">{item.lineOne}</h2>
                            <h3 className="tag-low-title">{item.lineTwo}</h3>
                            <div>
                                <MyButton
                                    type="default"
                                    title={item.linkTitle}
                                    linkTo={item.linkTo}
                                    addStyles={{
                                        margin:'10px 0 0 0'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))
        : null
    )



    return (
        <div className="featured_container">
            <Slider {...settings}>
                { generateSlides()}
            </Slider>
        </div>
    );
};

export default HomeSlider;
