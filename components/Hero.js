import React from 'react'
import Image from 'next/image'
import styles from '../styles/Hero.module.css'

const Hero = () => {
    return (
			<>
				<div id='home' className={styles.main}>
					<div className={styles.content}>
						<small data-aos='zoom-in-left'>The Right Choice</small>
						<h1 data-aos='zoom-in-down'>
							Learn to be
							<div
								data-aos='zoom-in-up'
								style={{fontSize: "3rem", color: "#595b96"}}
							>
								Digital Creative
							</div>
							Here
						</h1>
						<p data-aos='zoom-in-right' data-aos-delay='1000'>
							You will learn the best ways to create testimonials from the best
							tutors out there.
						</p>
						<div className={styles.buttons}>
							<button
								data-aos='fade-up-right'
								data-aos-delay='1000'
							>
								Get Started
							</button>
							<div>
								<span
									className='material-icons'
									data-aos-delay='1000'
									data-aos='zoom-in-down'
								>
									play_circle
								</span>
								<div data-aos-delay='1000' data-aos='zoom-in-up'>
									Watch Video
								</div>
							</div>
						</div>
					</div>
					<div
						data-aos='zoom-in-up'
						data-aos-delay='500'
						className={styles.image}
					>
						<Image
							src='/laptop.jpg'
							className={styles.img}
							layout='fill'
						alt='Picture'
						priority
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
				<div
					data-aos='zoom-in-up'
					data-aos-delay='2000'
					className={styles.icons}
				>
					<i className='devicon-google-plain-wordmark'></i>
					<i className='devicon-nginx-original'></i>{" "}
					<i className='devicon-nextjs-original-wordmark'></i>
					<i className='devicon-oracle-original'></i>
				</div>
			</>
		);
}

export default Hero
