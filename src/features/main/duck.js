import { createStructuredSelector } from 'reselect'
import { getPrices, getRefiners } from '../../utilities/apiFunctions'

const UPDATE_SEARCH_TERM = 'price-it/Main/UPDATE_SEARCH_TERM'
const UPDATE_PRICES = 'price-it/Main/UPDATE_PRICES'
const UPDATE_REFINERS = 'price-it/Main/UPDATE_REFINERS'

//actions generators
const updateSearchTerm = (text) => {
	return {
		type: UPDATE_SEARCH_TERM,
		text: text
	}
}

const updatePrices = (prices) => {
	return {
		type: UPDATE_PRICES,
		prices: prices,
	}
}

const updateRefiners = (refiners) => {
	return {
		type: UPDATE_REFINERS,
		refiners: refiners,
	}
}

//action helpers
export const search = (searchTerm) => {
	return dispatch => {
		dispatch(updateSearchTerm(searchTerm))
		dispatch(updateRefiners(getRefiners(searchTerm)))
		dispatch(updatePrices(getPrices(searchTerm, [])))
	}
}

export const refine = (searchTerm, refiners) => {
	return dispatch => {
		dispatch(updateRefiners(refiners))
		dispatch(updatePrices(getPrices(searchTerm, refiners)))
	}
}

//reducers
const main = (state = {
	prices: {},
	refiners: [],
	searchTerm: "",
}, action={}) => {
	switch(action.type){
		case UPDATE_PRICES:
			return Object.assign({}, state, {
				prices: action.prices
			})
		case UPDATE_REFINERS:
			return Object.assign({}, state, {
				refiners: action.refiners
			})
		case UPDATE_SEARCH_TERM:
			return Object.assign({}, state, {
				searchTerm: action.text
			})
		default:
			return state
	}
}

export default main

//selectors
const prices = state => state.prices
const refiners = state => state.refiners
const searchTerm = state => state.searchTerm

export const selector = createStructuredSelector({
	prices,
	refiners,
	searchTerm,
})



