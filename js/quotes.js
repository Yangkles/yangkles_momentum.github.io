const quotes = [
    {
        quote : "“성공은 우연이 아니다. 노력, 인내, 배움, 공부, 희생, 그리고 무엇보다 자신이 하고 있는 일에 대한 사랑, 하는 법을 배우는 것이다.”" ,
        author: "- 펠레",
    },
    {
        quote : "“지식에 대한 투자는 최고의 보상을 가져다 줄 것이다.”",
        author : "- 벤자민 프랭클링",
    },
    {
        quote : "“많은 실패자들은 포기하기 때문에 성공이 얼마나 가까웠는지 깨닫지 못합니다.”",
        author : "- 토마스 에디슨",
    },
    {
        quote : "“미루는 것은 쉬운 일을 어렵게 만들고 어려운 일을 더 어렵게 만든다.”",
        author : "- 메이슨 쿨리",
    },
    {
        quote : "“노력을 대신할 수 있는 것은 없습니다.”",
        author : "- 토마스 에디슨",
    },
    {
        quote : "“더 이상 상황을 바꿀 수 없을 때 우리는 스스로를 변화시켜야 합니다.”",
        author : "- 빅터 프랭클",
    },
    {
        quote : "“훌륭한 사람은 레이저 같은 집중력을 가진 평범한 사람입니다.”",
        author : "- 브루스 리",
    },
    {
        quote : "“진짜 어려움은 극복할 수 있습니다. 정복할 수 없는 것은 상상 속의 것들뿐이다.”",
        author : "- 시어도어 N. 베일",
    },
    {
        quote : "“탁월함은 기술이 아니다. 태도입니다.” ",
        author : "- 랄프 마스턴",
    },
    {
        quote : "“성적이나 결과는 행동이 아니라 습관입니다.” ",
        author : "- 아리스토텔레스",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;