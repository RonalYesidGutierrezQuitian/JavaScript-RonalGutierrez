document.addEventListener('DOMContentLoaded', () => {
    const userName = document.getElementById('name');
    const userMail = document.getElementById('mail');
    const userRegistered = document.getElementById('registered');
    const userLocation = document.getElementById('location');
    const userCell  = document.getElementById('cell');
    const userPassword = document.getElementById('password');
    const userImg = document.getElementById('imgUser');
    const greeting = document.getElementById('user_value')

    fetch(`https://randomuser.me/api/`)
        .then(response => {
            // Verificar si la respuesta del servidor fue exitosa
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Convertir la respuesta a formato JSON y devolverla
            return response.json();
        })
        .then(data => {
            
            // Actualizar la interfaz de usuario con los datos del usuario
            let name = data['results'][0]['name']['first'] + ' ' + data['results'][0]['name']['last'];
            let mail = data['results'][0]['email'];
            let registered = data['results'][0]['dob']['date'];
            let location = data['results'][0]['location']['street']['number'] + ' ' + data['results'][0]['location']['street']['name'];
            let cell = data['results'][0]['cell'];
            let password = data['results'][0]['login']['password'];
            let imgUser = data['results'][0]['picture']['medium'];
            console.log(data);
            userName.innerHTML = name;
            userMail.innerHTML = mail;
            userRegistered.innerHTML = registered;
            userLocation.innerHTML = location;
            userPassword.innerHTML = password;
            userCell.innerHTML = cell;
            userImg.setAttribute("src", imgUser);
            greeting.textContent = name
            
        })
        .catch(error => {
            // Manejar cualquier error que ocurra durante la solicitud
            console.error('There was a problem with the fetch operation:', error);
        });
})