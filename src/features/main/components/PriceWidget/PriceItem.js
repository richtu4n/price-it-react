import React from 'react'

const PriceItem = ({value, accent=false}) => {
	
	const styles = {
		display: 'inline',
		margin: '10px',
		strong: {
			fontWeight: '600',
			color: '#61dafb',
		},
	}

	const formatCurrency = (value) => value? `£${value}` : ''

	return <div style={styles}>
		{ accent? <span style={styles.strong}>{formatCurrency(value)}</span>  : <span>{formatCurrency(value)}</span>  }
	</div>
}

export default PriceItem