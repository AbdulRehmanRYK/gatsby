import React from 'react';
import * as styles from "./styles.module.scss";
import { Row,Col } from "react-bootstrap";
import UserExperienceSvg from 'assets/icons/userExpsvg';
import AdobeSvg from 'assets/icons/Adobecc';
import SketcheSvg from 'assets/icons/sketch';
import FigmaSvg from 'assets/icons/figma';
import XdSvg from 'assets/icons/XD';

const UserExppage =() =>{
    const height=250;
    return(
        <>
            <div className={styles.mainExprow}>
                <Row className={styles.UserExp}>
                    <Col>
                        <h1 className={styles.UserExp_heading}>User Experiance</h1>
                    </Col>
                </Row>
                <Row  xs={1} md={2} className={styles.mainUserExp1}>
                    <Col sm={12} md={4}  className={styles.UserExppic}>
                        <UserExperienceSvg></UserExperienceSvg>
                    </Col>
                    <Col className={styles.UserExpParagraph} sm={12} md={8}  >
                    <p >Custom web development offers options for businesses who seek to provide a flexible, consistent experience for users across platforms. Leveraging new approaches to web development including progressive web apps, we bring front-end, back-end and architecture ability together to deliver</p>
                    </Col>
                </Row>
                <Row className={styles.mainUserExp1}>
                    <Col>
                      <p className={styles.UserExptool} md={4}>Tools and Technique</p>
                    </Col>
                </Row>
                <Row className={styles.mainUserExp}  xs={1} sm={3} md={3} lg={4}>
                    {/* <Col lg={3} md={4} sm={4} xs={9}> */}
                        <div className={styles.UserExpblock}>
                            <AdobeSvg />
                            <p className={styles.UserExpHeading}>Adobe CC</p>
                        </div>      
                    {/* </Col>
                    <Col lg={3} md={4} sm={4} xs={9}> */}
                        <div className={styles.UserExpblock}>
                            <SketcheSvg />
                            <p className={styles.UserExpHeading}>Sketch</p>
                        </div>      
                    {/* </Col>
                    <Col lg={3} md={4} sm={4} xs={9}> */}
                        <div className={styles.UserExpblock}>
                            <FigmaSvg />
                            <p className={styles.UserExpHeading}>Figma</p>
                        </div>      
                    {/* </Col>
                    <Col lg={3} md={4} sm={4} xs={9}> */}
                        <div className={styles.UserExpblock}>
                            <XdSvg />
                            <p className={styles.UserExpHeading}>XD</p>
                        </div>      
                    {/* </Col> */}
                </Row>
            </div>           
        </>
    )
}
export default UserExppage;