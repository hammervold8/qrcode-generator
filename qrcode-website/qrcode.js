function generateQRCode() {
    var textToEncode = document.getElementById("textToEncode").value;
    var qrCodeContainer = document.getElementById("qrCode");
    var downloadBtn = document.getElementById("downloadQR");
    document.getElementById("download-btn").disabled = false;
    //Remove existing QR code
    while (qrCodeContainer.hasChildNodes()) {
      qrCodeContainer.removeChild(qrCodeContainer.lastChild);
    }
    var qrCode = new QRCode(qrCodeContainer, {
      text: textToEncode,
      width: 256,
      height: 256,
      colorDark : "#000000",
      colorLight : "#ffffff",
      correctLevel : QRCode.CorrectLevel.H
    });
    
    // Get the QR code's canvas element
    var canvas = qrCodeContainer.getElementsByTagName("canvas")[0];
    // Set the download button's href to the canvas' data URL
    downloadBtn.href = canvas.toDataURL();
    downloadBtn.style.display = "block";
  }
  