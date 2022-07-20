import React from "react"
import * as styles from "./styles.module.scss"
import Footer from "components/shared/Footer"
import Header from "components/shared/HeaderTwo"

import "scss/main.scss"
import HeaderTwo from "components/shared/HeaderTwo"

const LayoutWrapper = ({ children }) => {
	return (
		<>
			<HeaderTwo />
			<div className={styles.content_wrapper}>{children}</div>
			<Footer />
		</>
	)
}

export default LayoutWrapper
