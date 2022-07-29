import React,{useState} from "react"
import LayoutWrapper from "components/layout/LayoutWrapper"
 import JobFormpage from "components/pages/JobForm"
import CareerstartPage from "components/pages/careerstart"



const Jobapply = () => {
	return (
		<>
		<LayoutWrapper>
            <div>
				<CareerstartPage />
				<JobFormpage />
            </div>
		</LayoutWrapper>
			
		</>
	)
}

export default Jobapply;
