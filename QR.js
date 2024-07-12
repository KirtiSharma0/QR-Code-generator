let imgbox = document.getElementById("imgbox")
let qrimage = document.getElementById("qrimage")
let qrtext = document.getElementById("qrtext")

function generateQR () {
    qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value

    imgbox.classList.add("show-img")
}