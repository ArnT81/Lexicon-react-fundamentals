import React from 'react'
import styles from './grid.module.css'


export default function Grid({ children, columns, width }) {
	return (
		<div
			className={styles.grid}
			style={{
				gridTemplateColumns: `repeat(${columns}, 1fr)`,
				width: width
			}}
		>
			{children}
		</div>
	)
}

Grid.defaultProps = {
	width: '100%'
}