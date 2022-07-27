import React from "react";
import { Container,Row,Col,Form } from "react-bootstrap";
import FormGroup from "react-bootstrap";
import * as styles from './styles.module.scss';
import HeaderTwo from "components/shared/HeaderTwo";
import Footer from "components/shared/Footer";

const ContactUspage=()=>{

    return(
        <>  <HeaderTwo></HeaderTwo>
            <Container>
                <Row >
                    <Col>
                        <h2 className={styles.hi}>Say Hi</h2>
                        <h2 className={styles.contctus}>Contact Us</h2>
                    </Col> 
                </Row>
                <Row>
                    <Form>
                        <Row className="m-5" xs={1} md={2} >
                            <Form.Group sm={12} md={6}  controlId="formFName">
                                <Form.Label className={styles.cformlabels}>First Name</Form.Label>
                                <Form.Control className={styles.contactform_control} type="firstname" placeholder="" />
                            </Form.Group>
                            <Form.Group sm={12} md={6}  controlId="formLName">
                                <Form.Label className={styles.cformlabels}>Last Name</Form.Label>
                                <Form.Control className={styles.contactform_control} type="lastname" placeholder="" />
                            </Form.Group>
                           
                        </Row>
                        <Row className="m-5"  xs={1} md={2}>
                             <Form.Group  sm={12} md={6}  className="mb-3" controlId="formEmail">
                                <Form.Label className={styles.cformlabels}>Email</Form.Label>
                                <Form.Control className={styles.contactform_control}  type="email"  placeholder="" />
                            </Form.Group>
                            <Form.Group sm={12} md={6}  className="mb-3" controlId="formPhno">
                                <Form.Label className={styles.cformlabels}>Phone No</Form.Label>
                                <Form.Control className={styles.contactform_control} type="phno" placeholder="" />
                            </Form.Group>
                        </Row>
                        <Row className="m-5"  xs={1} md={2}>
                             <Form.Group  sm={12} md={6}  className="mb-3" controlId="formEmail">
                                <Form.Label className={styles.cformlabels}>Company</Form.Label>
                                <Form.Control className={styles.contactform_control}  type="email"  placeholder="" />
                            </Form.Group>
                            <Form.Group sm={12} md={6}  className="mb-3" controlId="formPhno">
                                <Form.Label className={styles.cformlabels}>Company Type</Form.Label>
                                <Form.Control className={styles.contactform_control} type="phno" placeholder="" />
                            </Form.Group>
                        </Row>
                        <Row className="m-5" sm={12}>
                             <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label className={styles.cformlabels}>Message</Form.Label>
                                <Form.Control className={styles.contactform_control1} type="msg" placeholder="" />
                            </Form.Group>
                        </Row>
                        <div className={styles.cdivvv} >
                            <button className={styles.cfbutton} variant="primary" type="submit">
                              SEND MESSAGES
                            </button>
                        </div>
                        </Form>
                </Row>
            </Container>
            <Footer></Footer>
        </>
    )
}
export default ContactUspage;