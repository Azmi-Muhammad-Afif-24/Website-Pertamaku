const nama = "Azmi Muhammad Afif";
let usia = 15;

function generateBiodata() {
    let generasi; 

    if (usia > 10 && usia < 18) {
        generasi ="generasi remaja"
    }  
    else  if (usia > 18 && usia < 30) {
        console.log('anda dewasa');
    } 
    else if (usia > 30) {
        console.log('ah lu mah tua bro wkwkkw sama kaya gue hahha');
    }
    else if (usia > 2 && usia < 10) {
        console.log('anda anak anak');
    }
    else {
        console.log('lu masih bayi ya haha');
}
 
return console.log('generasi saya adalah', generasi);

}

console.log(nama);
console.log(usia);

generateBiodata();