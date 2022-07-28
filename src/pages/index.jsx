import React from "react"
import LayoutWrapper from "components/layout/LayoutWrapper"
import {Container } from "react-bootstrap"
import Welcome from "components/pages/welcome"
import Servicepage from "components/pages/serve"
import ChooseUspage from "components/pages/ChooseUs"
import Customepage from "components/pages/Custome"
import { StaticImage } from "gatsby-plugin-image"

const Home = () => {
	return (
		<>
			<LayoutWrapper>
				<Container>
					<div className="row" style={{ width: "75%",margin:"auto" }}>
						<div className=" mx-auto">
							<StaticImage placeholder="none" src="../assets/images/about-hero.webp" alt="" style={{marginTop:'70px',marginBottom:'20px',width:'auto'}} />
						</div>
					</div>
				</Container>
				<Welcome />
				<Servicepage />
				<ChooseUspage />
				<Customepage />
			</LayoutWrapper>
		</>
	)
}

export default Home
