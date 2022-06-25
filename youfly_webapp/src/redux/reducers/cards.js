const injectedUserCards = [
	{
	  location: "Glasgow",
	  description: "a cold rainy city"
	},
	{
	  location: "Austin",
	  description: "a cool city in Texas"
	},
	{
	  location: "San Francisco",
	  description: "a major tech hub"
	},
	{
		location: "Glasgow",
		description: "a cold rainy city"
	},
	{
		location: "Austin",
		description: "a cool city in Texas"
	},
	{
		location: "San Francisco",
		description: "a major tech hub"
	},
	{
		location: "Glasgow",
		description: "a cold rainy city"
	},
	{
		location: "Austin",
		description: "a cool city in Texas"
	},
	{
		location: "San Francisco",
		description: "a major tech hub"
	},
];

export const cards = (cards = injectedUserCards, action) => {
	switch(action.type) {
		case 'ADD_CARD':
			return [action.payload, ...cards];
		case 'DELETE_CARD':
			return cards.filter(card => card.uniqueId !== action.payload);
		default:
			return cards;
	}
}