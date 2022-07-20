import React from "react"
import LayoutWrapper from "components/layout/LayoutWrapper"
import { Button, Container, Col, Row } from "react-bootstrap"
import Formpage from "components/base/Form"

const Home = () => {
	return (
		<>
			<LayoutWrapper>
				<Container>
					<h1>Adipisicing elit dlias feleniti</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatum, laudantium, reiciendis neque
						molestias quibusdam unde maxime rem libero error ad, hic consequuntur quaerat nulla a minima ratione non
						incidunt officiis at natus tempora consectetur eius? Illo perferendis, sed porro dolorem quis fuga eius ad
						sunt ex similique error laboriosam!
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eveniet accusantium doloribus, totam
						reiciendis similique assumenda aliquam doloremque ab, explicabo minima, ducimus dolor fugiat! Architecto
						eveniet in aut incidunt illo nihil numquam illum a cumque rem, expedita officiis magnam veniam culpa harum
						nesciunt praesentium debitis excepturi facere. Sint, non esse.
					</p>

					<Row sm="auto" className="g-2">
						<Col>
							<Button variant="primary">Primary</Button>
						</Col>
						<Col>
							<Button variant="secondary">Secondary</Button>
						</Col>
					</Row>
					<Formpage></Formpage>
				</Container>
			</LayoutWrapper>
		</>
	)
}

export default Home
