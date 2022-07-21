import React from "react";
import { Row,Col} from "react-bootstrap";
import WorkWithUs from "../WorkWithus";
import * as styles from './styles.module.scss';
const Customepage = () =>{

    return(
        <>
            <div className={styles.custome_div}>
                <Row className={styles.projectrow}>
                    <Col>
                        <h2 className={styles.project}>PROJECT</h2>
                        <h1 className={styles.soft}>Custom Software Development</h1>
                        <p className={styles.quality}> We use quality-driven processes to build and implement industry-specific solutions to get maximum ROI</p>
                    </Col>
                </Row>   
            </div>
            <WorkWithUs /> 
        </>
    )
} 
export default Customepage;