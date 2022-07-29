export const addCard = (cardObject) => {
	return {
		type: 'ADD_CARD',
		payload: cardObject
	}
}

export const deleteCard = (id) => {
	return {
		type: 'DELETE_CARD',
		payload: id
	}
}