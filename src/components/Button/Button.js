import React from 'react'
import { PropTypes } from 'prop-types'
import styles from './button.module.css'


export const Button = ({ title, onClick }) => <button onClick={onClick} className={styles.button}>{title}</button>

Button.propTypes = {
	title: PropTypes.string.isRequired
}