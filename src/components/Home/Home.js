import React, { useEffect, useRef } from "react";
import { useState } from "react";
import slide_1 from '../../images/slide_1.jpg';
import slide_2 from '../../images/slide_2.jpg';
import slide_3 from '../../images/slide_3.jpg';
import { HomeCaption, HomeImageWrapper, HomeImage, HomeCaptionH1, HomeCaptionP, HomePrevButton, HomeNextButton } from "./Home.style";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


let s;
const Home = () => {
    const [index, setIndex] = useState(0);
    const image = [slide_1, slide_2, slide_3];


    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex(page => {
                console.log(page);
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
        console.log(index);
        if (index === image.length - 1) {
            setIndex(0)
        } else {
            setIndex(page => (page + 1))
        }
    };

    const handleDecrement = () => {
        console.log(index)
        if (index === 0) {
            setIndex(image.length - 1)
        } else {
            setIndex(page => (page - 1))
        }

    };


    return (
        <>
            <Carousel activeIndex={index} controls={false} fade={true} indicators={false}>
                <Carousel.Item>
                    <HomeImageWrapper>
                        <HomeImage image={slide_1} />
                    </HomeImageWrapper>
                    <HomeCaption>
                        <HomePrevButton
                            onClick={() => handleDecrement()}
                            className="carousel-control-prev-icon"
                        >
                        </HomePrevButton>
                        <HomeNextButton
                            onClick={() => handleIncrement()}
                            className="carousel-control-next-icon"
                        >
                        </HomeNextButton>
                        <HomeCaptionH1>Caption 1 </HomeCaptionH1>
                        <HomeCaptionP>Info Caption 1</HomeCaptionP>
                    </HomeCaption>
                </Carousel.Item>
                <Carousel.Item>
                    <HomeImageWrapper>
                        <HomeImage image={slide_2} />
                    </HomeImageWrapper>
                    <HomeCaption>
                        <HomePrevButton
                            onClick={() => handleDecrement()}
                            className="carousel-control-prev-icon"
                        >
                        </HomePrevButton>
                        <HomeNextButton
                            onClick={() => handleIncrement()}
                            className="carousel-control-next-icon"
                        >
                        </HomeNextButton>
                        <HomeCaptionH1>Caption 2</HomeCaptionH1>
                        <HomeCaptionP>Info Caption 2</HomeCaptionP>
                    </HomeCaption>
                </Carousel.Item>
                <Carousel.Item>
                    <HomeImageWrapper>
                        <HomeImage image={slide_3} />
                    </HomeImageWrapper>
                    <HomeCaption>
                        <HomePrevButton
                            onClick={() => handleDecrement()}
                            className="carousel-control-prev-icon"
                        >
                        </HomePrevButton>
                        <HomeNextButton
                            onClick={() => handleIncrement()}
                            className="carousel-control-next-icon"
                        >
                        </HomeNextButton>
                        <HomeCaptionH1>Caption 3 </HomeCaptionH1>
                        <HomeCaptionP>Info Caption 3</HomeCaptionP>
                    </HomeCaption>
                </Carousel.Item>
            </Carousel>
        </>

    )

}

export default Home;