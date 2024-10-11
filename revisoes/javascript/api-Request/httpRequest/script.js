function requestApiData() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://reqres.in/api/products/', true);
    
    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(JSON.parse(xhr.responseText));
        } else {
            console.error(`Erro: ${xhr.status}`);
        }
    };
    
    xhr.send();
}