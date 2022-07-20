import React from "react"
import LayoutWrapper from "components/layout/LayoutWrapper"
import {  Container } from "react-bootstrap"
import Aboutpage from "components/pages/About"
import Formpage from "components/pages/Form"


const Companypage = () => {
	return (
		<>
		<LayoutWrapper>
			<Aboutpage></Aboutpage>
			<Container>
				<Formpage></Formpage>
			
			</Container>
		</LayoutWrapper>
			
		</>
	)
}

export default Companypage;