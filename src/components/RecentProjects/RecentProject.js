import React, { useState } from "react";
import { Container, Modal } from "react-bootstrap";
import {
  BackgroundImage,
  BigImageContainer,
  MediumImageContainer,
  MediumTwoImageContainer,
  WideImageContainer,
  Wrapper,
  BoxWrapper,
} from "./RecentProject.style";

const RecentProject = () => {
  const [show, setShow] = useState(false);
  const [imagePointer, setImagePointer] = useState(0);

  const handleShow = (pointer) => {
    setShow(true);
    setImagePointer(pointer);
  };
  const handleClose = () => setShow(false);

  const RecentImages = [
    {
      title: "Great great mountain",
      image: require("../../images/portfolio_1.jpg"),
    },
    {
      title: "Great Tower",
      image: require("../../images/portfolio_2.jpg"),
    },
    {
      title: "Cozy Beach",
      image: require("../../images/portfolio_3.jpg"),
    },
    {
      title: "King of the hill",
      image: require("../../images/portfolio_4.jpg"),
    },
    {
      title: "Coconuts",
      image: require("../../images/portfolio_5.jpg"),
    },
  ];

  return (
    <>
      <Wrapper>
        <Container>
          <BoxWrapper style={{ margin: 5 }}>
            <div>
              <div style={{ fontSize: "26px" }}>Recent </div>
              <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>Projects</h1>
            </div>
            <div style={{ marginLeft: 50 }} />
            <p
              style={{
                display: "flex",
                alignItems: "center",
                maxWidth: 350,
              }}
            >
              Praesent pellentesque efficiaaatur magna, sed pellentesque neque
              malesuada vitae.
            </p>
          </BoxWrapper>
          <BoxWrapper>
            <BigImageContainer>
              <BackgroundImage
                url={RecentImages[0].image}
                onClick={() => handleShow(0)}
              />
            </BigImageContainer>

            <MediumTwoImageContainer>
              <div style={{ height: "50%", width: "100%" }}>
                <BackgroundImage
                  url={RecentImages[1].image}
                  onClick={() => handleShow(1)}
                />
              </div>
              <div style={{ marginTop: 5 }} />
              <div style={{ height: "50%", width: "100%" }}>
                <BackgroundImage
                  url={RecentImages[2].image}
                  onClick={() => handleShow(2)}
                />
              </div>
            </MediumTwoImageContainer>

            <MediumImageContainer>
              <BackgroundImage
                url={RecentImages[3].image}
                onClick={() => handleShow(3)}
              />
            </MediumImageContainer>

            <WideImageContainer>
              <BackgroundImage
                url={RecentImages[4].image}
                onClick={() => handleShow(4)}
              />
            </WideImageContainer>
          </BoxWrapper>
        </Container>
      </Wrapper>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        aria-labelledby="contained-modal-title-vcenter"
        keyboard={false}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{RecentImages[imagePointer].title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BackgroundImage
            style={{ height: 500 }}
            url={RecentImages[imagePointer].image}
            onClick={handleShow}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RecentProject;
