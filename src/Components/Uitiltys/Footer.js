import React from 'react'
import { Container, Col ,Row} from "react-bootstrap";

const Footer = () => {
    return (
        <div className="footer-background footer d-flex align-items-center" style={{ maxHeight: "100px" }}>
            <Container className="">
                <Row className="d-flex justify-content-between align-items-center">
                    <Col sm="6" className=" d-flex align-items-center ">
                        <div className="footer-shroot">الشروط والاحكام</div>
                        <div className="footer-shroot mx-4">سيايه الخصوصيه</div>
                        <div className="footer-shroot mx-2">اتصل بنا</div>
                    </Col>
                    <Col
                        sm="6"
                        className=" d-flex justify-content-end align-items-center ">
                        <div className="d-flex pt-3 mx-2">
                        <i class="fa-solid fa-phone fa-lg pt-3 ms-2" style={{ color: "#ffc107" }}></i>
                            <p className="footer-phone">0122455346356</p>
                        </div>
                        <div style={{ cursor: "pointer"}}>
                        <i class="fa-brands fa-facebook-f fa-lg  ms-3" style={{ color: "#ffc107" }}></i>
                        </div>
                        <div style={{ cursor: "pointer" }} className="">
                        <i class="fa-brands fa-instagram fa-lg" style={{ color: "#ffc107" }}></i>
                        </div>
                        <div style={{ cursor: "pointer" }} className="">
                        <i class="fa-brands fa-twitter fa-lg me-3" style={{ color: "#ffc107" }}></i>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer

