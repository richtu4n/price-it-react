import React, { PropTypes } from 'react'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import * as colors from '../../../../assets/colors'

class RefinerItem extends React.Component {

	styles = {
		display: 'flex',
		select: {
			color: colors.pink800,
			flex: 2,
		},
		labelContainer: {	
			flex: 1,
			display: 'flex',
			alignItems: 'flex-end',
		},
		label: {
			color: colors.grey800,
			marginRight: 'auto',
			whiteSpace: 'nowrap',
		},
		custom: {
			whiteSpace: 'nowrap',
  			overflow: 'hidden',
  			textOverflow: 'ellipsis',
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
				<div style={this.styles.labelContainer}>
					<label style={this.styles.label}>{this.props.name}</label>
				</div>
				<DropDownMenu 
					value={this.props.selected} 
					onChange={this.onChange}
					style={this.styles.select}
					labelStyle={this.styles.custom}>
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