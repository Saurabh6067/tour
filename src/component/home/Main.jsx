import React from "react";
import Slider from "./Slider";
import { Container } from "react-bootstrap";
import Browse from "./Browse";
import Flash from "./Flash";
import Feature from "./Feature";
import NewArival from "./NewArival";
import About from "./About";
import Sale from "./Sale";
function Main(){
    return(
        <>
        <Container fluid>
            <Slider/>
            <Browse/>
            <Flash/>
            <Feature/>
            <NewArival/>
            <About/>
            <Sale/>
        </Container>
        </>
    );
}
export default Main