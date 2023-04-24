// main.js

window.addEventListener('load' , () => {


const menu = document.querySelectorAll(".gnb>ul>li");
const header = document.querySelector(".header_wrap");

//주메뉴
menu.forEach((el,i) =>{
  el.addEventListener("mouseenter", e=>{
    e.preventDefault();
    activation(menu,i,"on");
    getHeight(el.children[1],100);
  });
  el.children[0].addEventListener("focus", e=>{
    e.preventDefault();
    activation(menu,i,"on");
    getHeight(el.children[1],100);
  });
  header.addEventListener("mouseleave", e=>{
    for(let el of menu) el.classList.remove("on");
    header.style.height = 70+"px";
  });
  el.children[0].addEventListener("blur", e=>{
    for(let el of menu) el.classList.remove("on");
    header.style.height = 70+"px";
  });
});


// 검색박스
const btnSrch = document.querySelector(".btn_srch");
const srchWrap = document.querySelector(".srch_wrap");
const btnSrchClose = document.querySelector(".btn_srch_close");
const body = document.querySelector("body");
console.log(body);

btnSrch.addEventListener("click", e=>{
  e.preventDefault();
  srchWrap.classList.add("on");
  body.style.overflow = "hidden";
  
});
btnSrchClose.addEventListener("click", e=>{
  e.preventDefault();
  srchWrap.classList.remove("on");
  body.style.overflow = "auto";
  body.style.overflowX = "hidden"
});




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

})