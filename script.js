function redirectToSite() {
    let inputUrl = document.getElementById('inputUrl').value;
    let url;

    if (inputUrl.startsWith('http://') || inputUrl.startsWith('https://')) {
        url = inputUrl;
    } else {
        url = 'http://' + inputUrl;
    }

    window.location.href = url;
}