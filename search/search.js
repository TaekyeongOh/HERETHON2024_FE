// card array
const friends_news = [
    { category: '프론트', name: '변하늘', img: "", progress: ""},
    { category: '프론트', name: '유지민', img: "", progress: ""},
    { category: '풀스택', name: '김민지', img: "", progress: ""},
    { category: '프론트', name: '김민지', img: "", progress: ""},
    { category: '백', name: '윤지수', img: "", progress: ""}
]

const friendNews = document.getElementById('achiveDegree');

function createCard(category, pername) {
    const friend_news_card = document.createElement('div');
    friend_news_card.classList.add('friend_news_card');

    const cardName = document.createElement('p');
    cardName.classList.add('pername');
    cardName.textContent = pername;

    const cardCate = document.createElement('p');
    cardCate.classList.add('category', 'c_front');
    cardCate.textContent = category;

    friend_news_card.appendChild(cardName);
    friend_news_card.appendChild(cardCate);

    return friend_news_card;
}

// friends_news 배열이 비어있는지 확인
if (friends_news.length === 0) {
    // 이미지 요소를 생성
    const noFriendsImage = document.createElement('img');
    noFriendsImage.src = './addfriend.png';
    noFriendsImage.classList.add('addfriend');

    // 이미지 요소를 friendNews 요소에 추가
    friendNews.appendChild(noFriendsImage);
} else {
    // 배열이 비어있지 않으면 카드 생성
    for (const item of friends_news) {
        const friend_news_card = createCard(item.category, item.name);
        friendNews.appendChild(friend_news_card);
    }
}

// card array
const problems = [
    { problem: '제 능력을 못믿는 분들이 있는 경우에는 어떻게 해야할까요?' },
    { problem: '다른 분들에게 조언을 얻고싶어요.' },
    { problem: '제 능력을 못믿는 분들이 있는 경우에는 어떻게 해야할까요?' }
]

const problemCards = document.getElementById('problems');

function create_P_Card(problem) {
    const pcard = document.createElement('div');
    pcard.classList.add('problemCard');

    const cardText = document.createElement('p');
    cardText.classList.add('problemText');
    cardText.textContent = problem;

    pcard.appendChild(cardText);

    return pcard;
}

for (const item of problems) {
    const problem = create_P_Card(item.problem);
    problemCards.appendChild(problem);
}
