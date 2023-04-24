// 스크롤 상단이동
const toTop = document.querySelector("#footer .btns");
console.log(toTop.children[1])
toTop.children[1].addEventListener("click", e=>{
  e.preventDefault();
  window.scroll({
    top: 0,
    behavior: "smooth"
  });
});

// 0 이상일 경우 보이고, 0이 되면 on과 ab지우기
// 높이측정시 4409부터 고정
window.addEventListener("scroll", e=>{
  var scroll = window.pageYOffset;
  console.log(scroll);
  if(scroll <= 0) toTop.classList.remove("on","ab");
  else if(scroll >= 4409) {
    toTop.classList.add("ab","on");
  }
  else {
    toTop.classList.add("on");
    toTop.classList.remove("ab");  
  }
});

// 함수
function activation(aa, idx, name){
  for(let el of aa) el.classList.remove(name);
  aa[idx].classList.add(name);
}
function getHeight(aa,i){
  let height = aa.offsetHeight;
  header.style.height = height+i+"px";
}
