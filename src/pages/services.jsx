import React from "react"
import LayoutWrapper from "components/layout/LayoutWrapper"
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
			<Webpage />
			<Mobilepage />
			<Ecommercepage />
			<Gamepage />
			<UserExppage />
			<Formpage /> 	 
		</LayoutWrapper>	
		</>
	)
}

export default Servicespage
