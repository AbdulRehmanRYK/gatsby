import React from "react"
import LayoutWrapper from "components/layout/LayoutWrapper"
import Projectslide from "components/pages/Project"
import Formpage from "components/pages/Form"
const Projectpage = () => {
	return (
		<>
		<LayoutWrapper>
			<Projectslide />
			<Formpage />
		</LayoutWrapper>
			
		</>
	)
}

export default Projectpage;