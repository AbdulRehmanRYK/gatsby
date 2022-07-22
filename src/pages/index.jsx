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
					<div className=" row" style={{ width: "100%" }}>
						<div className=" mx-auto">
							<StaticImage src="../assets/images/blue_banner.png" alt="" style={{marginTop:'150px',marginBottom:'150px',width:'auto'}} />
						</div>
					</div>
				</Container>
				<Welcome></Welcome>
				<Servicepage></Servicepage>
				<ChooseUspage></ChooseUspage>
				<Customepage></Customepage>
			</LayoutWrapper>
		</>
	)
}

export default Home
