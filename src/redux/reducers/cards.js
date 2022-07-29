export const cards = (cards = [], action) => {
	switch(action.type) {
		case 'ADD_CARD':
			return [action.payload, ...cards];
		case 'DELETE_CARD':
			return cards.filter(card => card.uniqueId !== action.payload);
		default:
			return cards;
	}
}