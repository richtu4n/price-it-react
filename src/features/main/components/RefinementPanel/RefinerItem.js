import React, { PropTypes } from 'react'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import * as colors from '../../../../assets/colors'

class RefinerItem extends React.Component {

	styles = {
		select: {
			width: '100%',
		},
		label: {
			display: 'block',
			textAlign: 'left',
			color: colors.grey800,
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
			<div
				style={this.styles}>
				<DropDownMenu 
					value={this.props.selected} 
					onChange={this.onChange}
					style={this.styles.select}>
					{options}
				</DropDownMenu>
			</div>
		)
	}
}
//<label style={this.styles.label}>{this.props.name}</label>

RefinerItem.propTypes = {
	name: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	selected: PropTypes.number.isRequired,
	options: PropTypes.array.isRequired,
	handleChange: PropTypes.func.isRequired,
}

export default RefinerItem