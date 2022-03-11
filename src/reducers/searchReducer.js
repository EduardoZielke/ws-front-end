export default function searchReducer(state = 'TODAS', action) {
    switch (action.type) {
        case 'CHANGE_BRAND':
            return action.payload
        default:
            return state
    }
}