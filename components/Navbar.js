import React, {useState} from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    const [menuIcon, setMenuIcon] = useState(false)
    return (
			<>
				<div className={styles.grid}>
					<div className={styles.logo}>Logo</div>
					<span
						className={`${styles.menu_icon} material-icons`}
						onClick={() => setMenuIcon(!menuIcon)}
					>
						{!menuIcon ? "menu" : "close"}
					</span>
					<div
						className={!menuIcon ? styles.links : styles.mobile_links}
						onClick={() => setMenuIcon(!menuIcon)}
					>
						<div
							data-aos-delay='2500'
							data-aos='zoom-in-up'
							data-aos-once='true'
							className={styles.link}
						>
							<Link href='#home'>Home</Link>
						</div>
						<div
							data-aos-delay='2650'
							data-aos='zoom-in-up'
							data-aos-once='true'
							className={styles.link}
						>
							<Link href='#course'>Course</Link>
						</div>
						<div
							data-aos-delay='2750'
							data-aos='zoom-in-up'
							data-aos-once='true'
							className={styles.link}
						>
							<Link href='#test'>Testimonials</Link>
						</div>
						<div
							data-aos-delay='2850'
							data-aos='zoom-in-up'
							data-aos-once='true'
							className={styles.link}
						>
							<Link href='#about'>About Us</Link>
						</div>
					</div>
					<div className={!menuIcon ? styles.buttons : styles.mobile_buttons}>
						<button data-aos='zoom-in-down' data-aos-once='true'>
							Sign In
						</button>
						<button data-aos='zoom-in-down' data-aos-once='true'>
							Sign Up
						</button>
					</div>
				</div>
			</>
		);
}

export default Navbar
