import React from 'react';
import * as styles from "./styles.module.scss";
import { Row,Col } from "react-bootstrap";
import GameSvg from 'assets/icons/gamesvg';
import UnitySvg from 'assets/icons/unity';
import UnrealSvg from 'assets/icons/unreal';
import BlenderSvg from 'assets/icons/Blender';

const Gamepage =() =>{
    const height=250;
    return(
        <>
            <div className={styles.mainGamerow}>
                <Row className={styles.Gmae}>
                    <Col>
                        <h1 className={styles.Game_heading}>Game Development</h1>
                    </Col>
                </Row>
                <Row  xs={1} md={2} className={styles.mainGame1}>
                    <Col sm={12} md={4}  className={styles.Gamepic}>
                        <GameSvg />
                    </Col>
                    <Col className={styles.GameParagraph} sm={12} md={8}  >
                    <p >Custom web development offers options for businesses who seek to provide a flexible, consistent experience for users across platforms. Leveraging new approaches to web development including progressive web apps, we bring front-end, back-end and architecture ability together to deliver</p>
                    </Col>
                </Row>
                <Row className={styles.mainGame1}>
                    <Col>
                      <p className={styles.Gametool} md={4}>Tools and Technique</p>
                    </Col>
                </Row>
                <Row className={styles.mainGmae}  xs={1} sm={3} md={3} lg={4}>
                    {/* <Col lg={3} md={4} sm={4} xs={9}> */}
                        <div className={styles.Gameblock}>
                            <UnitySvg />
                            <p className={styles.GameHeading}>unity</p>
                          
                        </div>      
                    {/* </Col>
                    <Col lg={3} md={4} sm={4} xs={9}> */}
                        <div className={styles.Gameblock}>
                            <UnrealSvg />
                            <p className={styles.GameHeading}>Unreal</p>
                        </div>      
                    {/* </Col>
                    <Col lg={3} md={4} sm={4} xs={9}> */}
                        <div className={styles.Gameblock}>
                            <BlenderSvg />
                            <p className={styles.GameHeading}>Blender</p>
                        </div>      
                    {/* </Col> */}
                </Row>
            </div>           
        </>
    )
}
export default Gamepage;