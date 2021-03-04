console.log("Desarrollo en proceso");

function Ingresar(){
    var usuario = document.getElementById('id_usuario').value;
    var contra = document.getElementById('id_clave').value;

    var url = 'http://127.0.0.1:5000/Login'
    var api = new XMLHttpRequest();
    api.open('GET',url)
    api.setRequestHeader('Content-Type','application/json');
    api.send()

    api.onreadystatechange = function(){
        if(api.readyState === XMLHttpRequest.DONE){
            var status = api.status;
            if(status === 0 || (status >= 200 && status < 400)){
                console.log(api.responseText);
            }
            else{
                console.log("Hubo un error");
            }
        }
    }
}