import React, { PropTypes } from 'react'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

class RefinerItem extends React.Component {

	styles = {
		customWidth: {
			width: 200,
		}
	}

	onChange = (event, index, value) => {
		this.props.handleChange(this.props.id, value)
	}

	render () {
		
		let options = this.props.options.map((option, index) => {
			return <MenuItem key={index} value={index} primaryText={option} />
		})

		return (
			<div>
				<label>{this.props.name}</label>
				<DropDownMenu 
					value={this.props.selected} 
					onChange={this.onChange}
					style={this.styles.customWidth}>
					{options}
				</DropDownMenu>
			</div>
		)
	}
}

RefinerItem.propTypes = {
	name: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	selected: PropTypes.number.isRequired,
	options: PropTypes.array.isRequired,
	handleChange: PropTypes.func.isRequired,
}

export default RefinerItem