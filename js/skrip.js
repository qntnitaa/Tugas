function bio(){
    let nama = document.getElementById('frm').nama.value;
    let pekerjaan = document.getElementById('frm').pekerjaan.value;
    let hobby = document.getElementById('frm').hobby.value;
    let input = ' Biodata kamu : ' + '<br> nama ' + nama + '<br> pekerjaan : ' + pekerjaan + '<br> hobby : ' + hobby;
    let no_input = 'Maaf Nama atau kelas anda belum terisi';
    let hasil = (nama&&pekerjaan&&hobby !='') ? input : no_input;
    document.getElementById('hasil').innerHTML = hasil;
}