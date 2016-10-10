import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as duck from '../../duck'
import AutoComplete from 'material-ui/AutoComplete'
import searchIcon from './icon_search.svg'

const SearchBar = ({searchTerm, suggestions, actions}) => {

	const onUpdateInput = (text) => {
		actions.updateSearchTerm(text)
		actions.getSuggestions(text)
	}

	const onNewRequest = (text) => {
		actions.updateSearchTerm(text)
	}

	return (
		<div className="search-bar">
			<AutoComplete
				searchText={searchTerm}
				hintText="search..."
				dataSource={suggestions}
				onUpdateInput={onUpdateInput}
				onNewRequest={onNewRequest}
			/>
			<img 
				src={searchIcon}
				alt="search" 
				onClick={actions.search}
				style={{
					cursor: 'pointer'
				}}
			/>
		</div>
	)
}


export default connect(
	state => duck.selector(state.main),
	dispatch => ({
		actions: bindActionCreators(duck, dispatch)
	})
)(SearchBar)