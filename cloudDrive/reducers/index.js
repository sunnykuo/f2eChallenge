import { UPDATE_SEARCH,UPDATE_SELECTED_DRIVE,UPDATE_SELECTED_ITEM,UPDATE_BOOKMARK,ADD_NEW_ITEM,UPDATE_VIEW_TYPE,DELETE_ITEM } from '../constants/constants'

const initialState = {
	drives: {
		myDrives: [
			{
				name: 'hello',
				type: 'folder',
				owner: 'her234',
				size: '5.8 GB',
				modifyTime: '2019.09.01 10:00',
				bookMark: false,
				files: [
					{
						name: 'photo',
						type: 'jpg',
						owner: 'her234',
						size: '1228 KB',
						modifyTime: '2019.09.01 10:00',
						bookMark: false
					},
					{
						name: 'movie',
						type: 'mp4',
						owner: 'her234',
						size: '3.5 GB',
						modifyTime: '2019.09.01 10:00',
						bookMark: false
					},
					{
						name: 'paper',
						type: 'doc',
						owner: 'her234',
						size: '320 KB',
						modifyTime: '2019.09.01 10:00',
						bookMark: false
					}								
				]
			},
			{
				name: 'photo',
				type: 'jpg',
				owner: 'her234',
				size: '1228 KB',
				modifyTime: '2019.09.01 10:00',
				bookMark: false
			},
			{
				name: 'photo',
				type: 'jpg',
				owner: 'her234',
				size: '1228 KB',
				modifyTime: '2019.09.01 10:00',
				bookMark: false
			},				
		],
		sharedDrives: [],
		garbages: []
	},
	selectedDrive: 'myDrives',
	selectedItem: null,
	viewType: 0,
	search: null,	
	typeMapping: {
		'folder': {
			name: '資料夾',
			code: 'folder'
		},
		'jpg': {
			name: 'JPG',
			code: 'photo'
		},
		'doc': {
			name: 'DOC',
			code: 'insert_drive_file'
		},
		'mp4': {
			name: 'MP4',
			code: 'videocam'
		},
		'ppt': {
			name: 'PPT',
			code: 'ppt'
		},
		'xlsx': {
			name: 'XLSX',
			code: 'xlsx'
		}
	}
}

const cloudDriveReducer = (state = initialState, action) => {
	let currentDrive = null;
	let newDrive = null;
	let garbages = null;
	switch (action.type) {		
		case UPDATE_SEARCH:
			return Object.assign({}, state, {search: action.conditions})

		case UPDATE_SELECTED_DRIVE:			
			return Object.assign({}, state, {selectedDrive: action.drive, selectedItem: null})

		case UPDATE_SELECTED_ITEM:			
			return Object.assign({}, state, {selectedItem: action.item})

		case UPDATE_BOOKMARK:
			currentDrive = Object.assign({}, state.drives[action.drive])
			currentDrive.map((item, i) => {
				if (item.name == action.item.name && item.type == action.item.type && item.owner == action.item.owner) {
					item.bookMark = action.bookMark
				}
			})
			newDrive = Object.assign({}, state.drives, {[action.drive]: currentDrive})
			return Object.assign({}, state, {drives: newDrive})

		case ADD_NEW_ITEM:			
			currentDrive = Object.assign({}, state.drives[action.drive])
			currentDrive.push(action.item)
			newDrive = Object.assign({}, state.drives, {[action.drive]: currentDrive})
			return Object.assign({}, state, {drives: newDrive})	

		case UPDATE_VIEW_TYPE: 
			return Object.assign({}, state, {viewType: action.viewType})

		case DELETE_ITEM: 
			currentDrive = Object.assign({}, state.drives[action.drive])
			currentDrive.filter((item, i) => {
				return !(item.name == action.item.name && item.type == action.item.type && item.owner == action.item.owner)
			})
			let garbagesDrive = Object.assign({}, state.drives.garbages)
			garbagesDrive.push(action.item)
			newDrive = Object.assign({}, state.drives, {[action.drive]: currentDrive, garbages: garbagesDrive})		
			return Object.assign({}, state, {drives: newDrive})	
		default:
			return state
	}
}

export default cloudDriveReducer
