const initialState = {
    x: 0,
    y: 0
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'INCREMENT_X':
            return {
                ...state,
                x: state.x + 1
            }
        case 'INCREMENT_Y':
            return {
                ...state,
                y: state.y + 1
            }
        default:
            return state;
    }
}