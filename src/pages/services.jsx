import React from "react"
import LayoutWrapper from "components/layout/LayoutWrapper"
// import { Form } from "react-bootstrap"
import Webpage from "components/pages/web";
import Mobilepage from "components/pages/Mobile";
import Ecommercepage from "components/pages/Ecommerce";
import Gamepage from "components/pages/Game";
import UserExppage from "components/pages/UserExperience";
import Formpage from "components/pages/Form";

const Servicespage = () => {
	return (
		<>
		<LayoutWrapper>
			<Webpage></Webpage>
			<Mobilepage></Mobilepage>
			<Ecommercepage></Ecommercepage>
			<Gamepage></Gamepage>
			<UserExppage></UserExppage>
			<Formpage></Formpage> 	 
		</LayoutWrapper>	
		</>
	)
}

export default Servicespage
