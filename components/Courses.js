import React from 'react'
import { courses } from './Data'
import Image from 'next/image'
import styles from '../styles/Courses.module.css'

const menu = ['All', 'Design', 'IT & Tech', 'Business', 'Marketing', 'Development', 'Photography']

const Courses = () => {
    return (
			<div id='course' className={styles.head}>
				<small>DISCOVER</small>
				<h3>Our Popular Courses</h3>
				<div className={styles.flex}>
					{menu.map(item => (
						<div key={item}>{item}</div>
					))}
				</div>
				<div className={styles.cards}>
					{courses.map(
						({id, imageURL, tag, course_name, teacher, lessons, stars, delay}) => (
							<div
								data-aos-delay={delay}
								data-aos='zoom-in-up'
								className={styles.card}
								key={id}
							>
								<div className={styles.img}>
									<Image
										src={imageURL}
										className={styles.image}
										layout='fill'
									/>
								</div>
								<p>{tag}</p>
								<h3>{course_name}</h3>
								<div>
									<small>{teacher}</small>
									<small>{lessons}</small>
								</div>
								<div className={styles.stars}>
									<p className={styles.back1}>{stars}/5</p>
									<span className={`material-icons ${styles.back}`}>
										arrow_forward
									</span>
								</div>
							</div>
						)
					)}
				</div>
			</div>
		);
}

export default Courses
