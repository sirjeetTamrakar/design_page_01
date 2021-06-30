import React from 'react'
import Image from 'next/image';
import styles from '../styles/Feature.module.css'

const Features = () => {
    return (
			<div id='about' className={styles.head}>
				<h2>Benefits of Joining Our Course</h2>
				<div className={styles.main}>
					<div className={styles.image}>
						<Image
							src='/book.jpg'
							className={styles.img}
							layout='fill'
							alt='Picture'
						/>
						<div className={`${styles.i} ${styles.i1}`}>
							<span className={`material-icons ${styles.back}`}>done_all</span>
							<small>
								<b>Best Tutors</b>
								<br />
								2K+ Learners
							</small>
						</div>
						<div className={`${styles.i} ${styles.i2}`}>
							<span className={`material-icons ${styles.back1}`}>loyalty</span>
							<small>
								<b>Monthly Pricing</b>
								<br />
								Unsubscribe
								<br /> Anytime
							</small>
						</div>
					</div>
					<div className={styles.content}>
						<div className={styles.items}>
							<span className={`material-icons ${styles.icon}`}>people</span>
							<div className={styles.item}>
								<b>Expert Mentors</b>
								<small>
									Excellent teachers guidance will be provided to you on a dailt
									basis.
								</small>
							</div>
						</div>
						<div className={styles.items}>
							<span className={`material-icons ${styles.icon1}`}>
								all_inclusive
							</span>
							<div className={styles.item}>
								<b>Unlimited Access</b>
								<small>
									Learn at your own pace at you own time with lifetime access on
									mobile and desktop.
								</small>
							</div>
						</div>
						<div className={styles.items}>
							<span className={`material-icons ${styles.icon2}`}>school</span>
							<div className={styles.item}>
								<b>Award Certificate</b>
								<small>
									Get an e-certificate to show your knowledge and expertise.
								</small>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
}

export default Features
