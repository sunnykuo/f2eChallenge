import { GET_INIT_CARDLINES, UPDATE_MISSION_TIME, UPDATE_CURRENT_MISSION, UPDATE_BREAK_STATUS, UPDATE_RINGTONES } from '../constants/constants'

export const getInitCardLines = () => {
	return (dispatch, getState) => {
		return dispatch(fetchCards(getState()))
	}		
}

export const updateMissionTime = (idx, time) => ({
	type: UPDATE_MISSION_TIME,
	index: idx,
	time
})


const receiveCardLines = cardLines => ({
	type: GET_INIT_CARDLINES,
	cardLines
})

const fetchCards = state => {
	return dispatch => {
		return getInitialCardLine(state.freeCellReducer.cards, state.freeCellReducer.cardLines)
			.then(json => dispatch(receiveCardLines(json)))
	}
}

const getRandom = (min,max) => {
    return Math.floor(Math.random()*max)+min;
}

const getNotFullLine = (lines, max) => {
 	let notFullLines = [];
 	for (let key in lines) {
 		if (lines[key].length < max) {
 			notFullLines.push(key);
 		}
 	}
 	let randomLine = notFullLines[getRandom(0,notFullLines.length-1)]
 	return randomLine;
}

const getRandomLine = (lines, card) => {
	return new Promise((resolve, reject) => {
		let currentLines = Object.assign({},lines);
		let curretCard = Object.assign({},card);
		let randomLine = "line"+getRandom(1,8);
		let fulledLines = [];
		for (let key in currentLines) {
	        if (currentLines[key].length === 7) {
	            fulledLines.push(currentLines[key]);
	        }
	    }

		if (fulledLines.length === 4) {
			if (currentLines[randomLine].length >= 6) {
				randomLine = getNotFullLine(currentLines, 6);
			}
		} else if (currentLines[randomLine].length >= 7) {
			randomLine = getNotFullLine(currentLines, 7);
		}

		curretCard.currentPosition = randomLine;
		currentLines[randomLine].push(curretCard)
		resolve(currentLines)	
	})
}

const getInitialCardLine = (cards, cardlines) => {
    return new Promise((resolve, reject) => {
        let cardsPromise = Promise.resolve([]);
        for (var i = 0; i < cards.length; i++) {
            (function(card) {
                cardsPromise = cardsPromise.then(result => {
                	let lines = cardlines;
                	if (result.length > 0) {
                		lines = result;
                	}
                    return getRandomLine(lines, card)
                        .then(resultLines => {
                        	return resultLines
                        }) 
                });
            })(cards[i]);
        };

        return cardsPromise.then(cardlinesResult => {
            resolve(cardlinesResult);
        }) .catch(function(err) {
            reject(err);
        });
    });	
}


