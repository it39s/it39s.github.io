function encode(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
}
  
function decode(str) {
    return decodeURIComponent(escape(window.atob(str)));
}

function colors(colors) {
    let title = document.getElementById("title");
    let i = 0;
    setInterval(async () => {
        title.style.color = colors[i];
        i = (i + 1) % colors.length;
    }, 250);
}

function result() {
    let option = document.getElementById("options").value;
    let string = document.getElementById("string").value;
    let result = document.getElementById("resultado");
    
    try {
        if (option == "Encode") {
            result.innerHTML = "tu resultado: " + encode(string);
        }
        if (option == "Decode") {
            result.innerHTML = "tu resultado:  " + decode(string);
        }
    } catch (error) {
        result.innerHTML = error;
    }
}