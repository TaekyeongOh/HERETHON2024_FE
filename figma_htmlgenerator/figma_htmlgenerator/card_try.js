const todolists = [
    { img:"", category: '프론트', name: '김민지', completeWork1: '완료된 일1 입력', completeWork2: '완료된 일2 입력', completeWork3: '완료된 일3 입력', completeWork4: '완료된 일4 입력'},
    { img:"", category: '프론트', name: '여예원', completeWork1: '완료된 일1 입력', completeWork2: '완료된 일2 입력', completeWork3: '완료된 일3 입력', completeWork4: '완료된 일4 입력'},
    { img:"", category: '프론트', name: '여예원', completeWork1: '완료된 일1 입력', completeWork2: '완료된 일2 입력', completeWork3: '완료된 일3 입력', completeWork4: '완료된 일4 입력'}
];

const todoBlock = document.getElementById('friend');

function createCompleteCard(img, category, name, completeWork1,completeWork2,completeWork3,completeWork4) {
    const complete_card = document.createElement('div');
    complete_card.classList.add('friend');

    const c_cardpro = document.createElement('div');
    c_cardpro.classList.add('friendImg');
    c_cardpro.textContent=img

    const c_cardName = document.createElement('p');
    c_cardName.classList.add('friendName');
    c_cardName.textContent = name;

    const c_cardCate = document.createElement('p');
    c_cardCate.classList.add('category', 'c_front');
    c_cardCate.textContent = category;

    const c_cardWork1 = document.createElement('p');
    c_cardWork1.classList.add('complete_work');
    c_cardWork1.textContent = completeWork1;

    const c_cardWork2 = document.createElement('p');
    c_cardWork2.classList.add('complete_work');
    c_cardWork2.textContent = completeWork2;

    const c_cardWork3 = document.createElement('p');
    c_cardWork3.classList.add('complete_work');
    c_cardWork3.textContent = completeWork3;

    const c_cardWork4 = document.createElement('p');
    c_cardWork4.classList.add('complete_work');
    c_cardWork4.textContent = completeWork4;

    complete_card.appendChild(c_cardName);
    complete_card.appendChild(c_cardpro);
    complete_card.appendChild(c_cardCate);
    complete_card.appendChild(c_cardWork1);
    complete_card.appendChild(c_cardWork2);
    complete_card.appendChild(c_cardWork3);
    complete_card.appendChild(c_cardWork4);    

    return complete_card;
}

for (const item of todolists) {
    const complete_card = createCompleteCard( item.img,item.category, item.name, item.completeWork1, item.completeWork2, item.completeWork3, item.completeWork4);
    todoBlock.appendChild(complete_card);
}
