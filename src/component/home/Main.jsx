import React from "react";
import Slider from "./Slider";
import { Container } from "react-bootstrap";
import Browse from "./Browse";
import Flash from "./Flash";
import Feature from "./Feature";
function Main(){
    return(
        <>
        <Container fluid>
            <Slider/>
            <Browse/>
            <Flash/>
            <Feature/>
        </Container>
        </>
    );
}
export default Main