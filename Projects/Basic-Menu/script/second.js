// const items = document.querySelectorAll('.item');

// items.forEach((item) =>{
//     item.addEventListener('click',()=>{
//         const targetId = item.getAttribute('data-target');
//         console.log(targetId)
//         const ItemList = document.querySelectorAll('.item-list');
//         ItemList.forEach((itemL) =>{
//             const CheckL = itemL.classList.contains(targetId)

//             if(targetId === CheckL){
//                 itemL.style.height = '100px' 
//             }
//         })
//     })
// })





// const items = document.querySelectorAll('.item');
// const itemLists = document.querySelectorAll('.item-container');
// const CloseList = document.querySelectorAll('.close');
// items.forEach((item) => {
//     item.addEventListener('click', () => {
//         const targetId = item.getAttribute('data-target');
//         itemLists.forEach((itemList) => {
//             if (itemList.classList.contains(targetId)) {
//                 itemList.style.display = 'flex';
//             }
//             CloseList.forEach((closeSpan)=>{
//                 closeSpan.addEventListener('click',()=> {
//                     itemList.style.display = 'none';
//                 })
//             });
            
//         });
//     });
// });




const items = document.querySelectorAll('.item');
const itemLists = document.querySelectorAll('.item-container');
const CloseList = document.querySelectorAll('.close');

// Kapatma işlevini tanımla
function kapatItem(itemList) {
    itemList.style.display = 'none';
}

// Her bir kapatma düğmesi için tıklandığında çalışacak işlevi tanımla
CloseList.forEach((closeSpan) => {
    closeSpan.addEventListener('click', () => {
        const parentItemContainer = closeSpan.closest('.item-container');
        kapatItem(parentItemContainer);
    });
});

// Geri tuşuna basıldığında veya tarayıcı geçmişi geri alındığında çalışacak işlevi tanımla
window.addEventListener('popstate', function() {
    // Tüm pop-up'ları kapat
    itemLists.forEach((itemList) => {
        kapatItem(itemList);
    });
});

items.forEach((item) => {
    item.addEventListener('click', () => {
        const targetId = item.getAttribute('data-target');
        itemLists.forEach((itemList) => {
            if (itemList.classList.contains(targetId)) {
                itemList.style.display = 'flex';
            }
        });
    });
});






