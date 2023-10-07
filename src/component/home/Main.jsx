import React from "react";
import './Main.css'
import Slider from "./Slider";
import { Container } from "react-bootstrap";
import Browse from "./Browse";
import Flash from "./Flash";
import Feature from "./Feature";
import NewArival from "./NewArival";
import About from "./About";
import Sale from "./Sale";
import Review from "./Review";
import Footer from "./Footer";
import Menu from "../Menu"
import { useState, useEffect } from "react";
import GridLoader from "react-spinners/GridLoader";

function Main() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)

    }, [])
    return (


        <>
            <div className="home">
                {
                    loading ?
                        <GridLoader

                            color={'#cf2678'}
                            loading={loading}
                            // cssOverride={override}
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                        :
                        <Container fluid>
                            <Menu />
                            <Slider />
                            <Browse />
                            <Flash />
                            <Feature />
                            <NewArival />
                            <About />
                            <Sale />
                            <Review />
                            <Footer />
                        </Container>
                }
            </div>



        </>
    );
}
export default Main