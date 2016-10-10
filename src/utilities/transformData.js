export const transformPrices = (data) => {
	return data.result.prices
}

export const transformRefiners = (data) => {
	let refiners = []
	for(let key in data.result.features){
		refiners.push({
			name: key,
			selected: -1,
			options: data.result.features[key].options,
		})
	}
	return refiners
}

export const transformSuggestions = (data) => {
	return data.result.suggestions
}