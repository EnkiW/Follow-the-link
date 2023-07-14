function redirectToSite() {
    let inputUrl = document.getElementById('inputUrl').value;
    let url;

    if (inputUrl.startsWith('https://') || inputUrl.startsWith('http://')) {
        url = inputUrl;
    } else {
        url = 'https://' + inputUrl;
    }

    window.location.href = url;
}