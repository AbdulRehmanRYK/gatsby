import React from 'react';
import * as styles from "./styles.module.scss";
import { Row,Col } from "react-bootstrap";

const CareerstartPage =() =>{
    const height=130
    return(
        <>
            <div className={styles.csmainIptvrow}>
                <Row className={styles.cs}>
                    <Col>
                        <h1 className={styles.cs_heading}>Your Career starts Here</h1>
                    </Col>
                </Row>
                <Row className={styles.csmainIptv1}> 
                    <Col className={styles.csParagraph}  >
                        <p>You can send your resume to hr@mercurysols.org , and we'll contact you when a new position opens.</p>
                    </Col>
                </Row>
            </div>           
        </>
    )
}
export default CareerstartPage;