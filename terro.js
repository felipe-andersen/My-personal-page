



function showCoverjs() {
let password = document.getElementById ("password");

if (password.type == "password") {
    password.type = "text";
}
else {
    password.type = "password";
}
}

const fetchSvg = (image) => {
    fetch(image.src) 
        .then((response) => response.txt())
        .then((response) => {
            const span = document.createElement('span');
            span.innerHTML = response;
            const inlineSvg = span.getElementsByTagName('svg')[0];
            image.parentNode.replacechild (inlineSvg, image);
            return true;
        })
}