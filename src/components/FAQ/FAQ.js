import React from "react";

import Header from "../CommonParts/Header.js";
import PreQuestions from './PreQuestions.js';
import Questions from './Questions.js';
import Footer from "../CommonParts/Footer.js";


function FAQ() {

    return (
        <>
            <Header />
            <main>
                <PreQuestions />
                <Questions />
            </main>
            <Footer />
        </>
    );
}

export default FAQ;