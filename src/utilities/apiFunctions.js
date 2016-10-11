import { pricesData, refinementData, suggestionsData } from '../test-data'
import { transformSuggestions, transformRefiners, transformPrices } from './transformData'

export const getSuggestions = (searchText) => {
	//console.log(`getSuggestions searchText [${searchText}]`)
	return transformSuggestions(suggestionsData)
}

export const getRefiners = (searchText) => {
	//console.log(`getRefiners searchText [${searchText}]`)
	return transformRefiners(refinementData)
}

export const getPrices = (searchText, refiners) => {
	//console.log(`getPrices searchText [${searchText}] refiners [${refiners.map(x => x.selected)}]`)
	return transformPrices(pricesData)
}