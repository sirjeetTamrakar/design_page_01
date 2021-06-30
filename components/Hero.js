import React from 'react'
import Image from 'next/image'
import styles from '../styles/Hero.module.css'

const Hero = () => {
    return (
			<>
				<div className={styles.main}>
					<div className={styles.content}>
						<p>The Right Choice</p>
						<h1>
							Learn to be
							<div style={{fontSize: "3rem", color: "#595b96"}}>
								Digital Creative{" "}
							</div>{" "}
							Here
						</h1>
						<p>
							You will learn the best ways to create testimonials from the best
							tutors out there.
						</p>
						<div className={styles.buttons}>
							<button>Get Started</button>
							<div>
								<span className='material-icons'>play_circle</span>
								<div>Watch Video</div>
							</div>
						</div>
					</div>
					<div className={styles.image}>
						<Image
							src='/laptop.jpg'
							className={styles.img}
							layout='fill'
							alt='Picture'
						/>
						<div className={`${styles.icon} ${styles.icon1}`}>
							<span className={`material-icons ${styles.back}`}>menu_book</span>
							<small>
								More Than
								<br />
								<b>10K Courses</b>
							</small>
						</div>
						<div className={`${styles.icon} ${styles.icon2}`}>
							<span className={`material-icons ${styles.back1}`}>done</span>
							<small>
								<b>Learn Faster</b>
								<br />
								Upgrade your skills
							</small>
						</div>
					</div>
				</div>
				<div className={styles.icons}>
					<i className='devicon-google-plain-wordmark'></i>
					<i className='devicon-nginx-original'></i>{" "}
					<i className='devicon-nextjs-original-wordmark'></i>
					<i className='devicon-oracle-original'></i>
				</div>
			</>
		);
}

export default Hero
