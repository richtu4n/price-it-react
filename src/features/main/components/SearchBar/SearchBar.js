import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as duck from '../../duck'
import AutoComplete from 'material-ui/AutoComplete'

class SearchBar extends React.Component {

	static propTypes = {
		onSubmit: PropTypes.func.isRequired,
		onChange: PropTypes.func,
	}

	static defaultProps = {
		onChange: (text) => { return [] },
	}

	state = {
		searchText: "",
		dataSource: [],
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state.searchText)
	}

	handleChange = (text) => {
		let suggestions = this.props.onChange(text) //expect suggestions to come from return value
		this.setState({
			searchText: text,
			dataSource: Array.isArray(suggestions)? suggestions : [],
		})
	}

	render () {

		return <div className="search-bar">
				<AutoComplete
					searchText={this.state.searchText}
					hintText="try search for iphone..."
					dataSource={this.state.dataSource}
					onUpdateInput={this.handleChange}
					onNewRequest={this.handleChange}
				/>
				<a 
					href='/'
					onClick={this.handleSubmit}
					style={{cursor: 'pointer'}}
				>
					<svg fill="#61dafb" height="26" viewBox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg">
					    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
					    <path d="M0 0h24v24H0z" fill="none"/>
					</svg>
				</a>
		</div>
	}
}


export default connect(
	null,
	dispatch => ({
		onSubmit: bindActionCreators(duck.search, dispatch),
	})
)(SearchBar)