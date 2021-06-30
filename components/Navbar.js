import React, {useState} from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    const [menuIcon, setMenuIcon] = useState(false)
    return (
			<>
				<div className={styles.grid}>
					<div className={styles.logo}>Your Logo</div>
						<span
							className={`${styles.menu_icon} material-icons`}
							onClick={() => setMenuIcon(!menuIcon)}
						>
							menu
						</span>
					<div className={!menuIcon ? styles.links : styles.mobile_links}>
						<div className={styles.link}>
							<Link href='home'>Home</Link>
						</div>
						<div className={styles.link}>
							<Link href='home'>Course</Link>
						</div>
						<div className={styles.link}>
							<Link href='home'>Testimonials</Link>
						</div>
						<div className={styles.link}>
							<Link href='home'>About Us</Link>
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
