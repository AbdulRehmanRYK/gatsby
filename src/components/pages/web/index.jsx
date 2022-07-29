import React from "react";
import * as styles from "./styles.module.scss";
import { Row,Col } from "react-bootstrap";
import WebSvg from "assets/icons/web";
import NodejsSvg from "assets/icons/nodejs";
import ReactjsSvg from "assets/icons/Reactjs";
import FirebaseSvg from "assets/icons/firebase";
import MongodbSvg from "assets/icons/mongodb";
import CssSvg from "assets/icons/css";
import HtmlSvg from "assets/icons/html";
import BootstrapSvg from "assets/icons/Bootstrap";
import DjangoSvg from "assets/icons/django";

const Webpage =() =>{

    return(
        <>  
            <div className={styles.mainWeb}>
                <Row className={styles.mainRow1}>
                    <Col>
                        <h1 className={styles.web_heading}>Web Development</h1>
                    </Col>
                </Row>
                <Row  xs={1} md={2} className={styles.mainRow}>
                    <Col sm={12} md={4}  className={styles.Webpic}>
                        <WebSvg></WebSvg>
                    </Col>
                    <Col className={styles.Webparagraph} sm={12} md={8}>
                        <p >Custom web development offers options for businesses who seek to provide a flexible, consistent experience for users across platforms. Leveraging new approaches to web development including progressive web apps, we bring front-end, back-end and architecture ability together to deliver</p>
                    </Col>
                </Row>
                <Row className={styles.mainRow}>
                    <Col>
                        <p className={styles.webtool} md={4}>Tools and Technique</p>
                    </Col>
                </Row>
                <Row className={styles.cardsmainRow}   xs={1} sm={3} md={3} lg={4}>
                    {/* <Col className={styles.paddng} lg={3} md={4} sm={4} xs={9}> */}
                        <div className={styles.webblock}>
                            <NodejsSvg />
                            <p className={styles.webheading}>NodeJS</p>
                        </div>      
                    {/* </Col>
                    <Col className={styles.paddng} lg={3} md={4} sm={4} xs={9}> */}
                        <div className={styles.webblock}>
                            <ReactjsSvg />
                            <p className={styles.webheading}>React JS</p>
                        </div>      
                    {/* </Col>
                    <Col className={styles.paddng} lg={3} md={4} sm={4} xs={9}> */}
                        <div className={styles.webblock}>
                            <FirebaseSvg />
                            <p className={styles.webheading}>Firebase</p>
                        </div>      
                    {/* </Col>
                    <Col className={styles.paddng} lg={3} md={4} sm={4} xs={9}> */}
                        <div className={styles.webblock}>
                            <MongodbSvg />
                            <p className={styles.webheading}>Mongo DB</p>
                        </div>      
                    {/* </Col> */}
                    {/* <Col className={styles.paddng} lg={3} md={4} sm={4} xs={9}> */}
                        <div className={styles.webblock}>
                            <CssSvg />
                            <p className={styles.webheading}>CSS 3</p>
                        </div>      
                    {/* </Col>
                    <Col className={styles.paddng} lg={3} md={4} sm={4} xs={9}> */}
                        <div className={styles.webblock}>
                            <HtmlSvg />
                            <p className={styles.webheading}>HTML</p>
                        </div>      
                    {/* </Col>
                    <Col className={styles.paddng} lg={3} md={4} sm={4} xs={9}> */}
                        <div className={styles.webblock}>
                            <BootstrapSvg />
                            <p className={styles.webheading}>Bootstrap</p>
                        </div>      
                    {/* </Col>
                    <Col className={styles.paddng} lg={3} md={4} sm={4} xs={9}> */}
                        <div className={styles.webblock}>
                            <DjangoSvg />
                            <p className={styles.webheading}>Dijango</p>
                        </div>      
                    {/* </Col> */}
                </Row>
            </div>       
        </>
    )
}
export default Webpage;