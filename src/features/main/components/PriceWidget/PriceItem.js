import React from 'react'

const PriceItem = ({value}) => {
	
	const style = {
		display: 'inline',
		margin: '0 5px',
	}

	const formatCurrency = (value) => value? `£${value}` : ''

	return !value? null : <div style={style}>
		<span>{formatCurrency(value)}</span>
	</div>
}

export default PriceItem