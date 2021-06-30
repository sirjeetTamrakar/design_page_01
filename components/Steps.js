import React from 'react'
import styles from '../styles/Steps.module.css'
import { steps } from './Data';

const Steps = () => {
    return (
			<div className={styles.head}>
				<small>IN 4 EASY STEPS</small>
				<h3>How to Learn at Stockholm</h3>
				<div className={styles.flex}>
					{steps.map(step => (
						<div key={step.id} className={styles.steps}>
							<h3>{step.id}</h3>
							<h4>{step.title}</h4>
							<small>{step.description}</small>
						</div>
					))}
				</div>
			</div>
		);
}

export default Steps
