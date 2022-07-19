import React from "react"
import * as styles from "./styles.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import Facebook from "assets/icons/Facebook"
import Instagram from "assets/icons/Instagram"
import Pinterest from "assets/icons/Pinterest"
import YouTube from "assets/icons/YouTube"

const Footer = () => {
	return (
		<Container fluid className="bg-primary text-white py-3 fixed-bottom">
			<Container>
				<Row>
					<Col>
						<a href="#" target="_blank" className={styles.social_icon}>
							<Facebook />
						</a>
						<a href="#" target="_blank" className={styles.social_icon}>
							<YouTube />
						</a>
						<a href="#" target="_blank" className={styles.social_icon}>
							<Instagram />
						</a>
						<a href="#" target="_blank" className={styles.social_icon}>
							<Pinterest />
						</a>
					</Col>
					<Col className="text-end">
						<p className="small m-0">2022 &copy; Venrup</p>
					</Col>
				</Row>
			</Container>
		</Container>
	)
}

export default Footer
