function generateBoxCode() {
    var code = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("boxCode").innerText = code;
}
