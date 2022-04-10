import React, { useEffect } from "react";
import { useState } from "react";
import slide_1 from '../../images/slide_1.jpg';
import slide_2 from '../../images/slide_2.jpg';
import slide_3 from '../../images/slide_3.jpg';
import { HomeCaption, HomeImageWrapper, HomeImage, HomeCaptionH1, HomeCaptionP, HomePrevButton, HomeNextButton } from "./BannerSlider.style";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


let s;
const BannerSlider = () => {
    const [index, setIndex] = useState(0);
    const image = [slide_1, slide_2, slide_3];

    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex(page => {
                if (page === image.length - 1) {
                    return 0;
                } else {
                    return page + 1;
                }
            })
        }, 5000)

        return () => clearTimeout(timer)
    }, [index])

    const handleIncrement = () => {
        if (index === image.length - 1) {
            setIndex(0)
        } else {
            setIndex(page => (page + 1))
        }
    };

    const handleDecrement = () => {
        if (index === 0) {
            setIndex(image.length - 1)
        } else {
            setIndex(page => (page - 1))
        }

    };


    return (
        <>
            <Carousel interval={3000} controls={false} fade={true} indicators={true}>
                <Carousel.Item>
                    <HomeImageWrapper>
                        <HomeImage image={slide_1} />
                    </HomeImageWrapper>
                    <HomeCaption>
                        <div className="tm-banner-header">
                            <h1 className="text-uppercase tm-banner-title">Let's begin</h1>
                            <p className="tm-banner-subtitle">We assist you to choose the best.</p>
                        </div>
                    </HomeCaption>
                </Carousel.Item>
                <Carousel.Item>
                    <HomeImageWrapper>
                        <HomeImage image={slide_2} />
                    </HomeImageWrapper>
                    <HomeCaption>
                        <div className="tm-banner-header">
                            <h1 className="text-uppercase tm-banner-title">Let's begin</h1>
                            <p className="tm-banner-subtitle">We assist you to choose the best.</p>
                        </div>
                    </HomeCaption>
                </Carousel.Item>
                <Carousel.Item>
                    <HomeImageWrapper>
                        <HomeImage image={slide_3} />
                    </HomeImageWrapper>
                    <HomeCaption>
                        <div className="tm-banner-header">
                            <h1 className="text-uppercase tm-banner-title">Let's begin</h1>
                            <p className="tm-banner-subtitle">We assist you to choose the best.</p>
                        </div>
                    </HomeCaption>
                </Carousel.Item>
                <Carousel.Item>
                    <HomeImageWrapper>
                        <HomeImage image={slide_3} />
                    </HomeImageWrapper>
                    <HomeCaption>
                        <div className="tm-banner-header">
                            <h1 className="text-uppercase tm-banner-title">Let's begin</h1>
                            <p className="tm-banner-subtitle">We assist you to choose the best.</p>
                        </div>
                    </HomeCaption>
                </Carousel.Item>
                <Carousel.Item>
                    <HomeImageWrapper>
                        <HomeImage image={slide_3} />
                    </HomeImageWrapper>
                    <HomeCaption>
                        <div className="tm-banner-header">
                            <h1 className="text-uppercase tm-banner-title">Let's begin</h1>
                            <p className="tm-banner-subtitle">We assist you to choose the best.</p>
                        </div>
                    </HomeCaption>
                </Carousel.Item>
            </Carousel>
        </>

    )

}

export default BannerSlider;