import { UPDATE_SELECTED_ITEM,UPDATE_VIEW_TYPE,ADD_CATEGORY,UPDATE_SELECTED_CATEGORY,UPDATE_SELECTED_NOTE,ADD_NOTE,UPDATE_NOTE } from '../constants/constants'
import moment from 'moment'

const initialState = {
	notes: [
		{
			id: 0,
			title: 'Meeting Record',
			content: 'A very recent study in October, 2018 from the Intergovernmental Panel on Climate Change (IPCC) shows that we should limit the warming to 1.5°C instead of 2°C—the upper limit in the Paris Agreement. If the temperature overshoots the 1.5°C threshold, human will face extreme problems of severe weather events, damage of ecosystems, loss of biodiversity, unstable food security, shortage of drinking water supplies, etc. These are the most important years in history and human should take action before global warming soon reach the point of no return. Thus, it’s time to do something for our Earth. As the Arctic is warming faster than any other region on Earth and the polar animals serve as a poster child of global warming, we combine the image of melting sea ice and polar animals and use their image to develop a new product to call people’s attention to the issue. The illustration inspired from the picture of human evolution which ironically shows polar animals could be sliding towards extinction, instead of evolution in the 21st century on current trends. Using the feature of chocolate “melting” to present the idea of “extinction”, we aim at increasing a sense of urgency of global warming. In the usage of color, we took the representational color of the animals and slightly adjusted the color to be more colorful. The cut inner layers display the mountain ridge in polar regions, serving as the background of the animal chocolate, making chocolate packaging to be more playful.',
			category: 'Work',
			cover: 'img1',
			create_date: '08.28.2019'
		},
		{
			id: 1,
			title: 'Osaka planning',
			content: 'rtdyhgrfghudjiskoe rieshgus ahuthreu, strstjth.',
			category: 'Travel',
			cover: 'img1',
			create_date: '08.14.2019'
		},
		{
			id:4,
			title: 'Meeting Record',
			content: 'We’ll have a meeting about searching the references of dissertation. AT That time, we should,We’ll have a meeting about searching the references of dissertation.',
			category: 'Work',
			cover: 'img1',
			create_date: '07.20.2019'
		},
		{
			id: 3,
			title: 'Osaka planning',
			content: 'rtdyhgrfghudjiskoe rieshgus ahuthreu, strstjth.',
			category: 'Travel',
			cover: 'img1',
			create_date: '07.17.2019'
		}					
	],
	selectedCategory: 'All',
	selectedItem: null,
	selectedNote: null,	
	viewType: 0,
	category: ['Work','Travel']
}

const noteBookReducer = (state = initialState, action) => {
	let currentNotes = null;
	switch (action.type) {		
		case UPDATE_SELECTED_ITEM:			
			return Object.assign({}, state, {selectedItem: action.item})

		case UPDATE_VIEW_TYPE: 
			return Object.assign({}, state, {viewType: action.viewType})

		case ADD_CATEGORY:			
			let currentCategory = Object.assign([], state.category)
			currentCategory.push(action.item)
			return Object.assign({}, state, {category: currentCategory})				

		case ADD_NOTE:
			currentNotes = Object.assign([], state.notes)
			let maxID = currentNotes.reduce((accumulator, currentValue) => {
			  return Math.max(accumulator, currentValue.id)
			},0)
			let newID = maxID + 1

			currentNotes.push({
				id: newID,
				title: action.name,
				content: '',
				category: action.category,
				cover: null,
				create_date: moment().format('MM.DD.YYYY')
			})
			return Object.assign({}, state, {notes: currentNotes, selectedNote: newID})

		case UPDATE_NOTE: 
			currentNotes = Object.assign([], state.notes)
			currentNotes.map((item, i) => {
				if (item.id === action.id) {
					item.title = action.title
					item.content = action.content
					item.category = action.category
				}
			})
			return Object.assign({}, state, {notes: currentNotes})

		case UPDATE_SELECTED_CATEGORY:
			return Object.assign({}, state, {selectedCategory: action.category})

		case UPDATE_SELECTED_NOTE:
			return Object.assign({}, state, {selectedNote: action.noteId})

		default:
			return state
	}
}

export default noteBookReducer
