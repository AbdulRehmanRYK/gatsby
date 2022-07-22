import React from 'react';
import * as styles from './styles.module.scss'
import { StaticImage } from "gatsby-plugin-image";
import { Card, Button,Container,Row, Col} from "react-bootstrap";

const Servicepage=()=>{
    const width=50;
    return(
        <>
        <div className={styles.serve}>
            <Container>
                <Row>
                    <Col>
                        <h2 className={styles.services}>SERVICES</h2>
                        <h1 className={styles.technology}>Technologies We Serve</h1>
                        <p className={styles.map}> Map a strategy, build a solution or elevate your product experience with focused engagements available as standalone offerings or as a part of your project’s service stack</p>
                    </Col>
                </Row>
            </Container>
        </div>
        <Row className={styles.mainSblock} xs={2} sm={3} md={4} lg={5}>
            <Col lg={2} md={3} sm={4} xs={6} className={styles.cardpadding}>
                <Card className={styles.card}>
                    <StaticImage  className={styles.cardPic} src="../../../assets/images/Web-Development.png" alt="" />
                    <Card.Body>
                        <Card.Text style={{fontSize:"1.8rem", fontWeight:"500"}}>
                         Web Development
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={2} md={3} sm={4} xs={6}  className={styles.cardpadding}>
                <Card className={styles.card} >
                <StaticImage className={styles.cardPic} src="../../../assets/images/mob.png" alt="" />
                    <Card.Body>
                        <Card.Text style={{fontSize:"1.8rem", fontWeight:"500"}}>
                            Mobile App Development 
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={2} md={3} sm={4} xs={6} className={styles.cardpadding}>
                <Card className={styles.card} >
                <StaticImage className={styles.cardPic} src="../../../assets/images/e-commerce.png" alt="" />
                    <Card.Body>
                        <Card.Text style={{fontSize:"1.8rem", fontWeight:"500"}}>
                            ECommerce Development
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={2} md={3} sm={4} xs={6} className={styles.cardpadding}>
                <Card className={styles.card} >
                <StaticImage className={styles.cardPic} src="../../../assets/images/Game-Development.png" alt="" />
                <Card.Body>
                    <Card.Text style={{fontSize:"1.8rem", fontWeight:"500"}}>
                        Game Development
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col lg={2} md={3} sm={4} xs={6} className={styles.cardpadding}>
            <Card className={styles.card} >
            <StaticImage className={styles.cardPic} src="../../../assets/images/webic_ui-ux.png" alt="" />
            <Card.Body>
                <Card.Text style={{fontSize:"2rem", fontWeight:"400"}}>
                    User Experiance
                </Card.Text>
            </Card.Body>
            </Card>
            </Col>
         </Row>
         {/* <div>
         <Button className={styles.request}>Request a Quote</Button>
         </div> */}
         <div className={styles.btnSDiv} >
            <button className={styles.ViewSbutton1} variant="primary" type="submit">
                 CONTACT US
            </button>
         </div>
        </>
    )
}
export default Servicepage;