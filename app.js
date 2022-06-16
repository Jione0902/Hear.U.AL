const mainName = document.querySelector(".name-input");
const resultBtn = document.querySelector(".result-btn");
const comment = document.querySelector(".comment");

const comments = [
  "님, 내일은 더 나은 하루가 될거에요!",
  "님, 버디가 함께할게요! 파이팅! ⎝⍢⎠",
  "님, 알바, 힘들죠? 그래도 최선을 다한 당신이 멋져요˚₊·—̳͟͞͞♡",
  "님, 버디는 사실... 진짜 금은 아니에요",
  "님, 어려운 일은 다 말해주세요. 버디가 듣고있어요!",
  "님, 오늘치 사랑을 듬뿍 담아 보내요 ꒰⍢꒱ ༘*",
  "님, 오늘 하루를 살아낸 당신은 멋쟁이에요 ⟡",
];

function getRandom() {
  const result = Math.floor(Math.random() * comments.length);
  return result;
}

function printResult() {
  comment.classList.remove("hidden");
  comment.textContent = `${mainName.value}${comments[getRandom()]}`;
}
resultBtn.addEventListener("click", printResult);
mainName.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    printResult();
  }
});
