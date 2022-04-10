import React from "react";
import Banner from "../Banner/Banner";
import Highlight from "../Highlight/Highlight";
import Region from "../Region/Region";

const Home = () => {
    return (
        <>
            {/* <div className="tm-page-wrap mx-auto"> */}
            <Banner />
            <Highlight />
            <Region />
            {/* </div> */}
        </>
    )
}

export default Home;