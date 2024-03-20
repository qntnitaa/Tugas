let frm = document.getElementById('data');
let pJabatan = ["Manager", "Asisten Manager", "Staff"];
let pJabatanV = `<option value=""> Pilihan Jabatan -------------</option>`; 
for (let j in pJabatan){
    pJabatanV += `<option value="${pJabatan[j]}">${pJabatan[j]}</option>`;
}

let pStatus = ["Menikah", "Belum Menikah"];
let pStatusV = `<option value=""> Pilihan Status ---------------</option>`; 
for (let p in pStatus){
    pStatusV += `<option value="${pStatus[p]}">${pStatus[p]}</option>`;
}
frm.jabatan.innerHTML = pJabatanV;
frm.status.innerHTML = pStatusV;

function hasil(){
    let nama = frm.nama.value;
    let jabatan = frm.jabatan.value;
    let status = frm.status.value;

    if(jabatan=="Manager"){
        gapok = 15000000;
    } else if(jabatan=="Asisten Manager"){
        gapok =10000000;
    } else if(jabatan=="Staff"){
        gapok = 5000000;
    } else{
        gapok = 0;
    }

    let tunjab = 15/100 * gapok;
    let bpjs = 10/100 * gapok;
    let tunkel = (status=="Menikah") ? 20/100 * gapok : 0;
    let total = gapok+tunjab+bpjs+tunkel;

    swal(`
    Nama : ${nama};
    Jabatan : ${jabatan};
    Status : ${status};
    Gaji Pokok : ${gapok};
    Tunjangan Jabatan : ${tunjab};
    bpjs : ${bpjs};
    Tunjangan Keluarga : ${tunkel};
    total : ${total};
    `)
}