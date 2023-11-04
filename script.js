// <-------------------------- birinci -------------------------->
function Termometr(Faranheyt) {
    let Selsi = (Faranheyt - 32) * 5 / 9
    return Selsi
}
console.log(Termometr(12))


// <-------------------------- ikinci -------------------------->

// function mesafe(suret, zaman){
//     let mesafe = suret *zaman
//     return mesafe
// }
// console.log(mesafe(12,4))

// 2.nd version>>>

// const mesafe = (suret,zaman) => suret*zaman
// console.log(mesafe(12, 4))

// <-------------------------- Ucuncu(chetin tipli) -------------------------->

// function melumatlar(emek_haqqi, istediyiniz_mebleg, istediyiniz_muddet) {
//     if (istediyiniz_muddet > 36) {
//         console.log("size bu sertlerde kredit dusmur!")
//     }
//     else {
//         if (istediyiniz_mebleg > emek_haqqi * 10) {
//             console.log("size bu sertlerde kredit dusmur!")
//         }
//         else {
//             if ((istediyiniz_mebleg + istediyiniz_mebleg * 0.13 )/ istediyiniz_muddet > emek_haqqi * 0.45) {
//                 console.log("size bu sertlerde kredit dusmur!")
//             }
//             else {
//                 if (istediyiniz_muddet > 0 && istediyiniz_muddet <= 12) {
//                     return (istediyiniz_mebleg + istediyiniz_mebleg * 0.13) / istediyiniz_muddet
//                 }
//                 else if (istediyiniz_muddet > 12 && istediyiniz_muddet <= 24) {
//                     return (istediyiniz_mebleg + istediyiniz_mebleg * 0.15*2) / istediyiniz_muddet
//                 }
//                 else {
//                     return (istediyiniz_mebleg + istediyiniz_mebleg * 0.17*3) / istediyiniz_muddet
//                 }
//             }
//         }
//     }
// }
// console.log(melumatlar(1000, 9000, 24))


// <-------------------------- RADAR -------------------------->

function verilenler(suret_heddi, faktiki_suret) {
    let asma = faktiki_suret - suret_heddi
    if (asma > 0 && asma<= 10) {
        return "cerime yoxdur"
    }
    else if (asma> 10 && asma <= 30) {
        return 20
    }
    else if(asma > 30 && asma<= 50){
        return 50
    }
    else{
        return 250
    }
}
 console.log("sizin " + verilenler(30, 60)+ "cerimeniz var 10 gun erzinde odesez"+ verilenler(30,60) - verilenler(30,60)*0.1 +"qeder olacaq" )

