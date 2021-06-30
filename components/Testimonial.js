import React from 'react'
import Image from 'next/image';
import styles from '../styles/Testimonial.module.css'

const Testimonial = () => {
    return (
			<div id='test' className={styles.head}>
				<small>TESTIMONIAL</small>
				<h3>They Say About Our Courses</h3>
				<div className={styles.main}>
					<div
						data-aos-delay='500'
						data-aos='zoom-in-right'
						className={styles.content}
					>
						<b>"</b>
						<p>
							I just wanted to share a quick note and let you know that you guys
							do a really good job. I’m glad I decided to work with you. It’s
							really great how easy your websites are to update and manage. I
							never have any problem at all.
						</p>
						<b>Kylie Harper</b>
						<small>Author</small>
						<div className={styles.stars}>
							<p className={styles.back1}>4.9/5</p>
							<div>
								<span className={`material-icons ${styles.back}`}>
									arrow_back
								</span>
								<span className={`material-icons ${styles.back}`}>
									arrow_forward
								</span>
							</div>
						</div>
					</div>
					<div
						data-aos-delay='1000'
						data-aos='zoom-in-left'
						className={styles.image}
					>
						<Image
							src='/person.jpg'
							className={styles.img}
							layout='fill'
							alt='Picture'
						/>
					</div>
				</div>
			</div>
		);
}

export default Testimonial
