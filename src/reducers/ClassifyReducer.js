export default function (state=[], action){
	switch(action.type){
		case "GET_CLASSIFY_LIST":
			return action.payload;
		default:
			return state;
	}
}