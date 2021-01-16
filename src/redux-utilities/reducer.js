const initialState = {
    toursInfo: []
}

export default function reducer(state=initialState, action){
    switch(action.type){
        case "saveToursInfo" :
            console.log("saving---")
            return {
                ...state,
                toursInfo: action.payload
            }
        default: return state

    }
}
