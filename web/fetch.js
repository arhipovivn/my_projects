const requestUrl = "https://jsonplaceholder.typicode.com/users";

// function sendReq(method, url, body = null) {
//     return fetch(url).then(response => {
//         return response.json()
//     })

// }
// const body = {
//         name: 'ivan',
//         age: 24
//     }
//     // sendReq('GET', requestUrl).then(data => console.log(data)).catch(err => console.log(err ))
// sendReq('GET', requestUrl)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

function sendReq(method, url, body = null) {
    const headers = { 'Content-type': 'application / json' }
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        return response.json()
    })

}
const body = {
        name: 'ivan',
        age: 24
    }
    // sendReq('GET', requestUrl).then(data => console.log(data)).catch(err => console.log(err ))
sendReq('POST', requestUrl, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))