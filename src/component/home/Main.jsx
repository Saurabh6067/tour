import React from "react";
import Slider from "./Slider";
import { Container } from "react-bootstrap";
import Browse from "./Browse";
import Flash from "./Flash";
import Feature from "./Feature";
import NewArival from "./NewArival";
function Main(){
    return(
        <>
        <Container fluid>
            <Slider/>
            <Browse/>
            <Flash/>
            <Feature/>
            <NewArival/>
        </Container>
        </>
    );
}
export default Main