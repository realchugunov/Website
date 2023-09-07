/*async function getUser() {
    try {
        const response = await fetch('https://api.truckersmp.com/v2/player/{id}', {
            method: 'GET',
            headers: {
                accept: 'application/json',
                mode: 'no-cors',
            },
        });

        if (!response.ok) {
            throw new Error(`[ERROR]: Status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (err) {
        console.log(err);
    }
}

getUser();*/

function getUserId() {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'Basic ' + 'https://api.truckersmp.com/v2/player/1165156');
    headers.append('Origin','http://localhost:3000');

    fetch('https://api.truckersmp.com/v2/player/{id}', {
            method: 'GET',
            headers: {
                accept: 'application/json',
                mode: 'no-cors',
            },
        })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log('Authorization failed: ' + error.message));
}
