import React, {useState} from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    const [menuIcon, setMenuIcon] = useState(false)
    return (
			<>
				<div id='home' className={styles.grid}>
					<div className={styles.logo}>Your Logo</div>
					<span
						className={`${styles.menu_icon} material-icons`}
						onClick={() => setMenuIcon(!menuIcon)}
					>
						{!menuIcon ? "menu" : "close"}
					</span>
					<div className={!menuIcon ? styles.links : styles.mobile_links}>
						<div className={styles.link}>
							<Link href='#home'>Home</Link>
						</div>
						<div className={styles.link}>
							<Link href='#course'>Course</Link>
						</div>
						<div className={styles.link}>
							<Link href='#test'>Testimonials</Link>
						</div>
						<div className={styles.link}>
							<Link href='#about'>About Us</Link>
						</div>
					</div>
					<div className={!menuIcon ? styles.buttons : styles.mobile_buttons}>
						<button>Sign In</button>
						<button>Sign Up</button>
					</div>
				</div>
			</>
		);
}

export default Navbar
