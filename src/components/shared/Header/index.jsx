import VenrupLogo from "assets/logos/VenrupLogo"
import React, { useState } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import * as styles from "./styles.module.scss"

const Header = () => {
	const [showMenu, setShowMenu] = useState(false)
	const handleMenu = () => {
		setShowMenu(!showMenu)
	}

	return (
		<>
			<Navbar bg="primary" variant="light" sticky="top">
				<Container>
					<Navbar.Brand href="/">
						<VenrupLogo style={{ width: 100 }} />
					</Navbar.Brand>

					<Navbar.Toggle />

					<Navbar.Collapse className="justify-content-end">
						<Nav>
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="/">Services</Nav.Link>
							<Nav.Link href="/">About</Nav.Link>
							<Nav.Link href="/">Contact</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	)
}

export default Header
