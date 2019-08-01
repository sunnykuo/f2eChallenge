import { UPDATE_FAVORITE, UPDATE_CURRENT_PLAY, UPDATE_CURRENT_PAGE, UPDATE_CURRENT_ALBUM } from '../constants/constants'

const initialState = {
	albums: [
		{id: 'Palette', name: 'Palette',publishDate: '2017-04-21', artist: 'IU', 
			songs: [
				{name:'Dlwlrma',time:'02:56'},
				{name:'Palette (Feat. G-DRAGON)',time:'03:37'},
				{name:'Ending scene',time:'04:09'},
				{name:"Can't Love You Anymore (With OHHYUK)",time:'03:15'},
				{name:'Jam Jam',time:'03:38'},
				{name:'Black Out',time:'03:47'},
				{name:'Full Stop',time:'03:56'},
				{name:'Through the Night',time:'04:13'},
				{name:'Love Alone',time:'04:41'},
				{name:'Dear Name',time:'04:49'}
			]
		},		
		{id: 'BBIBBI', name: 'BBIBBI', publishDate: '2018-10-01', artist: 'IU',
			songs:[
				{name:'BBIBBI',time:'03:14'},
			]
		},
		{id: 'SoulMate', name: 'SoulMate',publishDate: '2018-08-01', artist: 'IU',
			songs:[{name:'SoulMate',time:'03:39'}]
		},
		{id: 'Flower_Bookmark', name: 'Flower Bookmark2',publishDate: '2017-10-01', artist: 'IU',
			songs:[
				{name:'秋日早晨（가을 아침）',time:'03:38'},
				{name:'秘密花園（비밀의 화원）',time:'03:44'},
				{name:'無法入睡的雨夜（잠 못 드는 밤 비는 내리고）',time:'04:26'},
				{name:"昨晚的故事（어젯밤 이야기）",time:'03:53'},
				{name:'Red Queen (Feat. Zion.T)',time:'03:33'},
				{name:'By the Stream（개여울',time:'05:37'},
				{name:'每天與你（매일 그대와）',time:'03:44'}
			]
		},
		{id: 'CHAT_SHIRE', name: 'CHAT-SHIRE',publishDate: '2015-10-23', artist: 'IU',
			songs:[
				{name:'Shoes',time:'03:35'},
				{name:'Zezé',time:'03:11'},
				{name:'Twenty-Three',time:'03:14'},
				{name:"The Shower",time:'04:07'},
				{name:'Red Queen (Feat. Zion.T)',time:'03:33'},
				{name:'Knees',time:'04:43'},
				{name:'Glasses',time:'03:17'}		
			]
		},
		{id: 'orangeMoon', name: '橙月', publishDate: '2008-12-19', artist: '方大同',
			songs:[
				{name:'Singalongsong',time:'03:18'},
				{name:'小小蟲',time:'04:00'},
				{name:'1234567',time:'03:46'},
				{name:'黑白',time:'03:51'},
				{name:'如果愛',time:'04:08'},
				{name:'黑洞裡',time:'03:33'},
				{name:'三人遊',time:'03:57'},
				{name:'每個人都會',time:'02:58'},
				{name:'100種表情',time:'03:42'},
				{name:'愛我吧',time:'04:47'},
				{name:'為妳寫的歌',time:'03:17'},
				{name:'Orange Moon',time:'05:53'}
			]
		}			
	],
	favorite: [],	
	currentPlay: null,
	currentPage: 'music',
	currentAlbum: null
}

const mp3PlayerReducer = (state = initialState, action) => {
	switch (action.type) {		
		case UPDATE_CURRENT_PLAY:
			return Object.assign({}, state, {currentPlay: action.playInfo})
		case UPDATE_CURRENT_PAGE:			
			return Object.assign({}, state, {currentPage: action.page})
		case UPDATE_FAVORITE:			
			return Object.assign({}, state, {favorite: action.favorite})			
		case UPDATE_CURRENT_ALBUM:
			return Object.assign({}, state, {currentAlbum: action.album})			
		default:
			return state
	}
}

export default mp3PlayerReducer
