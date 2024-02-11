function generateBoxCode() {
    var code = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("boxCode").innerText = code;
}

function copyCode() {
    var codeElement = document.getElementById("boxCode");
    var code = codeElement.innerText;
    
    var textarea = document.createElement("textarea");
    textarea.value = code;
    document.body.appendChild(textarea);
    
    textarea.select();
    textarea.setSelectionR
    
    document.execCommand("copy");
    
    
    document.body.removeChild(textarea);
    
    alert("Code copied to clipboard: " + code);
}
