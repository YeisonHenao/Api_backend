console.log("Desarrollo en proceso");

function Ingresar() {
    var usuario = document.getElementById('id_usuario').value;
    var contra = document.getElementById('id_clave').value;

    class login {
        constructor(usuario, contra) {
            this.usuario = usuario;
            this.clave = contra;
        }
    }

    var crear = new login(usuario, contra);
    console.log(crear.usuario + " " + crear.clave);
    var url = 'http://127.0.0.1:5000/Login'
    var api = new XMLHttpRequest();
    api.open('POST', url)
    api.setRequestHeader('Content-Type', 'application/json');
    api.setRequestHeader('Access-Control-Allow-Origin', '*')
    api.send(JSON.stringify({
        usuario: crear.usuario,
        clave: crear.clave
    }));

    api.onreadystatechange = function () {
        if (api.status === 200) {
            console.log(api.response);
            console.log(api.status);
            window.open('../Home.html');
        }
        else {
            console.log("Hubo un error");
        }
    }
}

const boton_login = document.getElementById('btn_login');

boton_login.addEventListener("click", () => {
    Ingresar();
})

