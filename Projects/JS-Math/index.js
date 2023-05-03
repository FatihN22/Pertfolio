const deger = document.getElementById('result');
let value = document.getElementById('text');
let yuzde = document.getElementById('text2')

function Hesap(){
    
    
    let text2 = value.value.trim();
    const symbolCount = (value.value.match(/[+\-*&?€@~><.!/%(&)]/g) || []).length;
    deger.style.visibility = 'visible';
    deger.style.opacity = '1';
    // sembol sayısı 1'den fazlaysa veya sembol yoksa hata mesajı göster
    if (symbolCount !== 1) {
        deger.innerHTML = "Lütfen Geçerli Bir Karakter Girin";
        return;
    }
    let operator

    if(text2.includes("+") === true) {
        operator = "+"
    }else if(text2.includes("-") === true) {
        operator = "-"
    }  else if(text2.includes("*") === true) {
        operator = "*"
    }   else if(text2.includes("/") === true) {
        operator = "/"
    }  else if(text2.includes("%") === true) {
        operator = "%"
    } else if(text2.includes(".") === true){
        operator = "."
    }else if(text2.includes("?,$,!,&") === true){
        operator = "? ! &"
    }

    const myArray = text2.split(operator);

    let ilk   = parseInt(myArray[0])
    let uc  = parseInt(myArray[1])
    let sonuc

    if(operator === "+"){
        sonuc = "Sonuç:"+(ilk + uc)
    }else if(operator === "-"){
        sonuc = "Sonuç:"+(ilk - uc)
    }else if(operator === "*"){
        sonuc ="Sonuç:"+ (ilk * uc)
    }  else if(operator === "/") {
        sonuc = "Sonuç:"+(ilk / uc)
    }  else if(operator === "%") {
        sonuc = ilk+' mod '+uc+' = '+ ilk % uc
    } else if(operator === "."){
        sonuc = Math.round(ilk + "." + uc)
    }

    deger.innerHTML = sonuc;
    
}

function Clear(){
    deger.style.visibility = 'hidden';
    deger.style.opacity = '0';
    value.value = '';
    yuzde.value = '';
}

// YÜZDE HESAPLAMA

function Yuzde(){
    let YuzdeHesap = value.value * yuzde.value / 100
    deger.innerText = value.value + "'in" + ' % ' + yuzde.value + "'i = " + (YuzdeHesap);
    deger.style.visibility = 'visible'
    deger.style.opacity = '1'
}
value.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      Hesap();
      Yuzde();
    }
});
yuzde.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      Yuzde();
    }
});