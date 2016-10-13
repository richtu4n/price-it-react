import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { selector } from '../../duck'
import PriceItem from './PriceItem'

const PriceWidget = ({ prices }) => {
	
	const style = {
		marginTop: 40,
	}

	return <div style={ style } >
		<PriceItem value={prices.lower} />
		<PriceItem value={prices.median} />
		<PriceItem value={prices.upper} />
	</div>
}

PriceWidget.propTypes = {
	prices: PropTypes.object.isRequired
}

export default connect(
	state => ({
		prices: selector(state.main).prices,
	})
)(PriceWidget)