const axios = require('axios')

module.exports.register = (fullname, email) => {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:5000/register/generate', { "fullname": fullname, "email": email })
            .then((res) => {
                const { refreshToken } = res.data
                localStorage.setItem('refreshToken', refreshToken)
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