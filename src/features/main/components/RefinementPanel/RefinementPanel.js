import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as duck from '../../duck'
import RefinerItem from './RefinerItem'

class RefinementPanel extends React.Component {

	static propTypes = {
		searchTerm: PropTypes.string.isRequired,
		refiners: PropTypes.array,
		onChange: PropTypes.func,
	}

	static defaultProps = {
		refiners: [],
		onChange: (searchTerm, refiners) => {},
	}

	styles={
		margin: '0 20px',
		paddingRight: 30,
	}

	handleChange = (id, selected) => {
		let updatedRefiners = this.props.refiners.map((refiner, index) => {
			return index === id? Object.assign({}, refiner, { selected: selected }) : refiner
		})
		this.props.onChange(this.props.searchTerm, updatedRefiners)
	}

	render () {
		return <div
			style={this.styles}>
			{ this.props.refiners.map((refiner, index) => {
				return <RefinerItem 
					key={index}
					name={refiner.name}
					id={index}
					options={refiner.options}
					selected={refiner.selected}
					handleChange={this.handleChange} />
			}) }
		</div>
	}
}

export default connect(
	state => ({
		searchTerm: duck.selector(state.main).searchTerm,
		refiners: duck.selector(state.main).refiners,
	}),
	dispatch => ({
		onChange: bindActionCreators(duck.refine, dispatch),
	})
)(RefinementPanel)