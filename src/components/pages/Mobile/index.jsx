import React from 'react';
import * as styles from "./styles.module.scss";
import { Row,Col } from "react-bootstrap";
import MobileSvg from 'assets/icons/mobile';
import FlutterSvg from 'assets/icons/flutter';
import ReactjsSvg from 'assets/icons/Reactjs';
import IosSvg from 'assets/icons/ios';
import AndroidSvg from 'assets/icons/android';

const Mobilepage =() =>{
    const height=250;
    return(
        <>
            <div className={styles.mainmobilerow}>
                <Row className={styles.mainmobile1}>
                    <Col>
                        <h1 className={styles.mob_heading}>Mobile App Development</h1>
                    </Col>
                </Row>
                <Row  xs={1} md={2}  className={styles.mainmobile}>
                    <Col sm={12} md={4}  className={styles.mobpic}>
                        <MobileSvg className={styles.mobsvg1} ></MobileSvg>
                    </Col>
                    <Col className={styles.mobparagraph} sm={12} md={8}  >
                    <p >Custom web development offers options for businesses who seek to provide a flexible, consistent experience for users across platforms. Leveraging new approaches to web development including progressive web apps, we bring front-end, back-end and architecture ability together to deliver</p>
                    </Col>
                </Row>
                <Row className={styles.mainmobile1}>
                    <Col>
                        <p className={styles.mobtool} md={4}>Tools and Technique</p>
                    </Col>
                </Row>
                <Row className={styles.mainmobile}   xs={1} sm={3} md={3} lg={4}>
                    {/* <Col lg={3} md={4} sm={4} xs={9}> */}
                        <div className={styles.mobblock}>
                            <FlutterSvg />
                            <p className={styles.mobheading}>Flutter</p>
                        </div>      
                    {/* </Col>
                    <Col lg={3} md={4} sm={4} xs={9}> */}
                        <div className={styles.mobblock}>
                            <ReactjsSvg />
                            <p className={styles.mobheading}>React JS</p>
                        </div>      
                    {/* </Col>
                    <Col lg={3} md={4} sm={4} xs={9}> */}
                        <div className={styles.mobblock}>
                            <IosSvg />
                            <p className={styles.mobheading}>IOS</p>
                        </div>      
                    {/* </Col> */}
                    {/* <Col lg={3} md={4} sm={6} xs={9}>*/}
                        <div className={styles.mobblock}>
                            <AndroidSvg />
                            <p className={styles.mobheading}>Android</p>
                        </div>      
                    {/* </Col>  */}
                    
                </Row>
            </div>           
        </>
    )
}
export default Mobilepage;