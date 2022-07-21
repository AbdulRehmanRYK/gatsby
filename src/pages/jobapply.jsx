import React,{useState} from "react"
import LayoutWrapper from "components/layout/LayoutWrapper"
 import JobFormpage from "components/pages/JobForm"
import CareerstartPage from "components/pages/careerstart"



const Jobapply = () => {
    const [title,setTitle]=useState('Projects')
    const [btnTitle,setBtnTitle]=useState('Project')
	return (
		<>
		<LayoutWrapper>
            <div>
				<CareerstartPage></CareerstartPage>
				<JobFormpage></JobFormpage>
            </div>
		</LayoutWrapper>
			
		</>
	)
}

export default Jobapply;
