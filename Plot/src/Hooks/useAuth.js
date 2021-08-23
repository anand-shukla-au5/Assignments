function useAuth() {
    let auth = window.localStorage.getItem('Authenticated')
    const loginCredentials = {
        user: 'demo',
        pass: 'demo',
    }
    const login = (data) => {
        if (JSON.stringify(data) === JSON.stringify(loginCredentials)) {
            window.location = '/home'
            auth = true
            window.localStorage.setItem('Authenticated', true)
        } else {
            window.location = '/login'
            auth = false
            window.localStorage.setItem('Authenticated', false)
        }
    }
    const logout = () => {
        auth = false
        window.localStorage.removeItem('Authenticated')
        window.location = '/login'
    }
    return {
        loginCredentials,
        login,
        logout,
        auth,
    }
}

export default useAuth
