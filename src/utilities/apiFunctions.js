import { pricesData, refinementData, suggestionsData } from '../test-data'
import { transformSuggestions } from './transformData'

export const getSuggestions = (searchText) => {
	return transformSuggestions(suggestionsData)
}