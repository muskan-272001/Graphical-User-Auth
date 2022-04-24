const axios = require('axios')

module.exports.login = (email, password) => {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:5000/register/generate', { email, password })
            .then((res) => {
                const { refreshToken } = res.data
                localStorage.setItem('refreshToken', refreshToken)
                window.location.href = '/dashboard.html'
                resolve(res.data);
            })
            .catch((err) => {
                handleError(err, reject)
            })
    })
}


const handleError = (err, reject) => {
    if (err.response.status === 401) {
        window.location.href = "/login.html"
    }
    reject()
}