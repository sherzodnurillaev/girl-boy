// function max_name(name1, name2, name3) {
//     let arr = [name1, name2, name3] 
//     let long = "" 
//     for (const item  of arr) {
//         if (item.length < long.length) {
//             long = item
//         }
//     }
//     return long
// }

// console.log(
//     max_name('Alexxx', 'Georgio', 'Michael')
// );

let names = ['Ahmad', 'Ilya', 'Sherik'] 

// let girls = ['Maryam', 'Mariy', 'Shirin', 'Sabrina', 'Sabina', 'Hilola']

function saySalam(name) {
    let girls = ['Maryam', 'Mariy', 'Shirin', 'Sabrina', 'Sabina', 'Hilola']
    for (const item of name) {
        console.log(`Salam aleykum ${item}`);
    }
    for (const girl of girls) {
            console.log(`Salam aleykum ${girl}`);
        }
}

saySalam(names)


