export async function getUser() {
    return fetch('http://www.swag666.com:8081/hello',
        {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        })
        .catch((error) => {
            console.error(error);
        });
}