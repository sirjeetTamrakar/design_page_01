import React from 'react'
import Image from 'next/image';
import styles from '../styles/Testimonial.module.css'

const Testimonial = () => {
    return (
			<div id='test' className={styles.head}>
				<small>TESTIMONIAL</small>
				<h3>They Say About Our Courses</h3>
				<div className={styles.main}>
					<div className={styles.content}>
						<p>The Right Choice</p>
						<h5>Learn to be Digital Creative Here</h5>
						<small>CEO</small>
						<div className={styles.buttons}>
							<button>Get Started</button>
							<button>Watch Video</button>
						</div>
					</div>
					<div className={styles.image}>
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
