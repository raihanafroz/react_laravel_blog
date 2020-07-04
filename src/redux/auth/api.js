
export const register = (payload) => {
    return fetch('http://192.168.0.102/react_laravel_blog_api/public/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(response => {
        console.log(response);
    })
    .catch(e => {
        console.log(e)
    });

}