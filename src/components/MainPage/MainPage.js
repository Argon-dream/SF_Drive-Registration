import React from "react";

import Header from "../CommonParts/Header.js";
import Footer from "../CommonParts/Footer.js";
import CarsInRussia from "./CarsInRussia.js";
import AboutCarSharing from "./AboutCarSharing.js";
import HowRentCar from "./HowRentCar.js";
import DoYouHaveCar from "./DoYouHaveCar.js";
import CustomerReviews from "./CustomerReviews.js";
import TryRenting from "./TryRenting.js";

function MainPage() {

    return (
        <>
            <Header />
            <main>
                <CarsInRussia />
                <AboutCarSharing />
                <HowRentCar />
                <DoYouHaveCar />
                <CustomerReviews />
                <TryRenting />
            </main>
           <Footer />
           </>
    );

}

export default MainPage;