// get detection ids
var detection = document.getElementById('detection');
var detection2 = document.getElementById('detection2');

// detect web browser
if (navigator.userAgent.includes("Chrome")) {
    detection.innerText = "you are using chrome";
} else if (navigator.userAgent.includes("Vivaldi")) {
    detection.innerText = "you are using vivaldi";
} else if (navigator.userAgent.includes("Safari")) {
    detection.innerText = "you are using safari";
} else if (navigator.userAgent.includes("Edge") || navigator.userAgent.includes("Edg")) {
    detection.innerText = "you are using edge";
} else if (navigator.userAgent.includes("Firefox") || navigator.userAgent.includes("Mozilla")) {
    detection.innerText = "you are using firefox";
} else {
    detection.innerText = "error detecting web browser...";
}

// detect operating system
if (navigator.userAgent.includes("Linux")) {
    detection2.innerText = "linux user detected";
} else if (navigator.userAgent.includes("Android")) {
    detection2.innerText = "android user detected";
} else {
    detection2.innerText = "youre not using android or linux :0";
}