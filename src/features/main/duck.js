import { createStructuredSelector } from 'reselect'
import { pricesData, refinementData, suggestionsData } from '../../test-data'
import { transformPrices, transformRefiners, transformSuggestions } from '../../utilities/transformData'

const UPDATE_SEARCH_TERM = 'price-it/Main/UPDATE_SEARCH_TERM'
const REQUEST_SEARCH = 'price-it/Main/REQUEST_SEARCH'
const RECEIVE_SEARCH = 'price-it/Main/RECEIVE_SEARCH'
const ERROR_SEARCH = 'price-it/Main/ERROR_SEARCH'
const UPDATE_PRICES = 'price-it/Main/UPDATE_PRICES'
const UPDATE_REFINERS = 'price-it/Main/UPDATE_REFINERS'
const UPDATE_REFINER = 'price-it/Main/UPDATE_REFINER'
const UPDATE_SUGGESTIONS = 'price-it/Main/UPDATE_SUGGESTIONS'

//actions generators
export const updateSearchTerm = (text) => {
	return {
		type: UPDATE_SEARCH_TERM,
		text: text
	}
}

const requestSearch = () => {
	return {
		type: REQUEST_SEARCH,
		status: 'searching'
	}
}

const receiveSearch = () => {
	return {
		type: RECEIVE_SEARCH,
		status: 'recieved results'
	}
}

const errorSearch = () => {
	return {
		type: ERROR_SEARCH,
		status: 'error getting results'
	}
}

const updatePrices = (prices) => {
	return {
		type: UPDATE_PRICES,
		prices: prices,
	}
}

const updateSuggestions = (suggestions) => {
	return {
		type: UPDATE_SUGGESTIONS,
		suggestions: suggestions,
	}
}

const updateRefiners = (refiners) => {
	return {
		type: UPDATE_REFINERS,
		refiners: refiners,
	}
}

export const updateRefiner = (index, selected) => {
	return {
		type: UPDATE_REFINER,
		index: index,
		selected: selected,
	}
}

//action helpers
export const search = (searchTerm) => {
	return dispatch => {
		dispatch(requestSearch())
		//make fetch request
		//then
		dispatch(receiveSearch())
		let refiners = transformRefiners(refinementData)
		dispatch(updateRefiners(refiners))
		let prices = transformPrices(pricesData)
		dispatch(updatePrices(prices))
		//catch 
		//dispatch(errorSearch())
	}
}

export const refine = (refiners) => {
	return dispatch => {
		dispatch(updateRefiners(refiners))
		dispatch(getPrices())
	}
}

export const getSuggestions = (searchTerm) => {
	return dispatch => {
		let suggestions = transformSuggestions(suggestionsData)
		dispatch(updateSuggestions(suggestions))
	}
}

export const getPrices = () => {
	return dispatch => {
		let prices = transformPrices(pricesData)
		dispatch(updatePrices(prices))
	}
}

//reducers
const main = (state={
	status: '',
	prices: {},
	refiners: [],
	searchTerm: "",
	suggestions: [],
}, action={}) => {
	switch(action.type){
		case UPDATE_PRICES:
			return Object.assign({}, state, {
				prices: action.prices
			})
		case UPDATE_SUGGESTIONS:
			return Object.assign({}, state, {
				suggestions: action.suggestions
			})
		case UPDATE_REFINERS:
			return Object.assign({}, state, {
				refiners: action.refiners
			})
		case UPDATE_REFINER:
			return Object.assign({}, state, {
				refiners: state.refiners.map((refiner, index) => {
					if(index === action.index){
						return Object.assign({}, refiner, {selected: action.selected})
					}
					return refiner
				})
			})
		case UPDATE_SEARCH_TERM:
			return Object.assign({}, state, {
				searchTerm: action.text
			})
		case REQUEST_SEARCH:
			return Object.assign({}, state, {
				status: action.status
			})
		case RECEIVE_SEARCH:
			return Object.assign({}, state, {
				status: action.status
			})
		default:
			return state
	}
}

export default main

//selectors
const prices = state => state.prices
const refiners = state => state.refiners
const hasData = () => { return prices !== {} }
const searchTerm = state => state.searchTerm
const suggestions = state => state.suggestions

export const selector = createStructuredSelector({
	prices,
	refiners,
	hasData,
	searchTerm,
	suggestions,
})



