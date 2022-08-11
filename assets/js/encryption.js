function encryption () {


    let Block = document.getElementById("encryptionblock").value
    let Type = document.getElementById("encryptiontype").value
    let Size = document.getElementById("encryptionsize").value
    let Plaintext = document.getElementById("encryptionplaintext").value
    let iv = document.getElementById("encryptioniv").value
    let key = document.getElementById("encryptionkey").value
    
    

    if (Size == "128") {
        var encrypted128 = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(Plaintext),  CryptoJS.enc.Utf8.parse(document.getElementById("encryptionkey").value),
    {
        keySize: 128 / 8,
        iv:  CryptoJS.enc.Utf8.parse(iv),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    document.getElementById("encryptionoutput").value = encrypted128.toString()

    }
     

    else if (Size == "256") {
    var encrypted256 = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(Plaintext), document.getElementById("encryptionkey").value, 
    { 
        
        iv: iv,
        mode: CryptoJS.mode.CBC
    }
    
    )
    document.getElementById("encryptionoutput").value = encrypted256.toString()
    }


}




function decryption() {

    let Block = document.getElementById("decryptionblock").value
    let Type = document.getElementById("decryptiontype").value
    let Size = document.getElementById("decryptionsize").value
    let ciphertext = document.getElementById("decryptionciphertext").value
    let iv = document.getElementById("decryptioniv").value
    let key = document.getElementById("decryptionkey").value




    if (Size === "128") {
        var decrypted128 = CryptoJS.AES.decrypt(ciphertext, CryptoJS.enc.Utf8.parse(document.getElementById("decryptionkey").value),
    {
        keySize: 128 / 8,
        iv: CryptoJS.enc.Utf8.parse(iv),
        mode: CryptoJS.mode.CBC
        //padding: CryptoJS.pad.Pkcs7
    });
    console.log(decrypted128.toString())
    document.getElementById("decryptionoutput").value = decrypted128.toString(CryptoJS.enc.Utf8)


    } 
    else if (Size === "256") {
    var decrypted256 = CryptoJS.AES.decrypt(ciphertext, document.getElementById("decryptionkey").value, 
    { 
        
        iv: iv,
        mode: CryptoJS.mode.CBC
    }
    
    )
    console.log(decrypted256.toString(CryptoJS.enc.Utf8))
    document.getElementById("decryptionoutput").value = decrypted256.toString(CryptoJS.enc.Utf8)
    }



}
