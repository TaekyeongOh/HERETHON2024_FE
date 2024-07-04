const todolists = [
    { img: "./profile.png", category: '프론트', name: '김민지', completeWork1: '완료된 일1 입력', completeWork2: '완료된 일2 입력', completeWork3: '완료된 일3 입력', completeWork4: '완료된 일4 입력' },
    { img: "./profile.png", category: '프론트', name: '여예원', completeWork1: '완료된 일1 입력', completeWork2: '완료된 일2 입력', completeWork3: '완료된 일3 입력', completeWork4: '완료된 일4 입력' },
    { img: "./profile.png", category: '프론트', name: '여예원', completeWork1: '완료된 일1 입력', completeWork2: '완료된 일2 입력', completeWork3: '완료된 일3 입력', completeWork4: '완료된 일4 입력' }
];

const todoBlock = document.getElementById('friend');

function createCompleteCard(img, category, name, completeWork1, completeWork2, completeWork3, completeWork4) {
    const complete_card = document.createElement('div');
    complete_card.classList.add('friend');

    const profile_card = document.createElement('div');
    profile_card.classList.add('friend_profile');

    const c_cardpro = document.createElement('img');
    c_cardpro.classList.add('friendImg');
    c_cardpro.src = img;

    const c_cardName = document.createElement('p');
    c_cardName.classList.add('friendName');
    c_cardName.textContent = name;

    profile_card.appendChild(c_cardpro);
    profile_card.appendChild(c_cardName);

    const c_cardCate = document.createElement('p');
    c_cardCate.classList.add('friend_category');
    if (category === '프론트') {
        c_cardCate.classList.add('fc_front');
    } else if (category === '풀스택') {
        c_cardCate.classList.add('fc_full');
    } else if (category === '백') {
        c_cardCate.classList.add('fc_back');
    } else if (category === '미정') {
        c_cardCate.classList.add('fc_unselect');
    }
    c_cardCate.textContent = category;

    const right_icon_img = document.createElement('img');
    right_icon_img.classList.add('friend_iconRight');
    right_icon_img.src = './right_icon.png';

    const complete_todo_card = document.createElement('div');
    complete_todo_card.classList.add('completeToDo_list');

    const checkboxImg1 = document.createElement('img');
    checkboxImg1.classList.add('checkedImg');
    checkboxImg1.src = './checkbox.png';

    const c_cardWork1 = document.createElement('p');
    c_cardWork1.classList.add('complete_work');
    c_cardWork1.textContent = completeWork1;

    const checkboxImg2 = document.createElement('img');
    checkboxImg2.classList.add('checkedImg');
    checkboxImg2.src = './checkbox.png';

    const c_cardWork2 = document.createElement('p');
    c_cardWork2.classList.add('complete_work');
    c_cardWork2.textContent = completeWork2;

    const checkboxImg3 = document.createElement('img');
    checkboxImg3.classList.add('checkedImg');
    checkboxImg3.src = './checkbox.png';

    const c_cardWork3 = document.createElement('p');
    c_cardWork3.classList.add('complete_work');
    c_cardWork3.textContent = completeWork3;

    const checkboxImg4 = document.createElement('img');
    checkboxImg4.classList.add('checkedImg');
    checkboxImg4.src = './checkbox.png';

    const c_cardWork4 = document.createElement('p');
    c_cardWork4.classList.add('complete_work');
    c_cardWork4.textContent = completeWork4;

    complete_card.appendChild(profile_card);
    complete_card.appendChild(c_cardCate);
    complete_card.appendChild(right_icon_img);
    complete_card.appendChild(checkboxImg1);
    complete_card.appendChild(c_cardWork1);
    complete_card.appendChild(checkboxImg2);
    complete_card.appendChild(c_cardWork2);
    complete_card.appendChild(checkboxImg3);
    complete_card.appendChild(c_cardWork3);
    complete_card.appendChild(checkboxImg4);
    complete_card.appendChild(c_cardWork4);

    return complete_card;
}

for (const item of todolists) {
    const complete_card = createCompleteCard(item.img, item.category, item.name, item.completeWork1, item.completeWork2, item.completeWork3, item.completeWork4);
    todoBlock.appendChild(complete_card);
}
