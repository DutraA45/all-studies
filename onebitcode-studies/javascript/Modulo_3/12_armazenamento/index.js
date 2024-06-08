// Session Storage
document.getElementById("sessionBtn").addEventListener("click", function () {
    const input = document.getElementById("session");
    window.sessionStorage.setItem("info", input.value);
    input.value = '';
});

document.getElementById('readSession').addEventListener("click", function () {
    const info = sessionStorage.getItem("info");
    alert("A informação salva é " + info)
});

// Local Storage
document.getElementById('localBtn').addEventListener("click", function () {
    const input = document.getElementById("local");
    window.localStorage.setItem("text", input.value);
    input.value = '';
});

document.getElementById('readLocal').addEventListener("click", function () {
    const text = localStorage.getItem("text");
    alert("O texto salvo no local storage é " + text)
});

// Cookies
document.getElementById('cookieBtn').addEventListener("click", function () {
    const input = document.getElementById('cookie');
    // cookieName=value; expires=UTCStringDate; path=/;
    const cookie = 'info=' + input.value + ';';
    const expiration = 'expires=' + new Date(2024, 8, 7) + ';';
    const path = 'path=/';
    document.cookie = cookie + expiration + path;
    console.log(document.cookie);
});

document.getElementById('cookie2Btn').addEventListener("click", function () {
    const input = document.getElementById('cookie2');
    // cookieName=value; expires=UTCStringDate; path=/;
    const cookie = 'text=' + input.value + ';';
    const expiration = 'expires=' + new Date(2024, 8, 7) + ';';
    const path = 'path=/';
    document.cookie = cookie + expiration + path;
    console.log(document.cookie);
});