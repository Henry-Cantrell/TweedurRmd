export function currentUserUid (state = null, action) {
    switch (action.type) {
        case 'CURRENT_USER_UID_SEND':
            return state = action.currentUserUid
        case 'CLEAR_CURRENT_USER_UID':
            return state = null
        default:
            return state
    }
}