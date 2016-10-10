import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as duck from '../../duck'
import RefinerItem from './RefinerItem'

const RefinementPanel = ({refiners, update}) => {
	
	const handleChange = (id, value) => {
		let updatedRefiners = [...refiners]
		updatedRefiners[id] = Object.assign({}, updatedRefiners[id], { selected: value })
		update(updatedRefiners)
	}

	return (
		<div>
			{ refiners.map((refiner, index) => {
				return <RefinerItem 
					key={index}
					name={refiner.name}
					id={index}
					options={refiner.options}
					selected={refiner.selected}
					handleChange={handleChange} />
			}) }
		</div>
	)
}

RefinementPanel.propTypes = {
	refiners: PropTypes.array.isRequired,
	update: PropTypes.func.isRequired,
}

export default connect(
	state => duck.selector(state.main),
	dispatch => ({
		update: bindActionCreators(duck.refine, dispatch)
	})
)(RefinementPanel)