export const authToggle = (state = 'loggedOut', action) => {
    switch (action.type) {
        case 'LOGIN':
            return state='loggedIn'
        case 'LOGOUT':
            return state = 'loggedOut'
        default:
            return state
    }
}