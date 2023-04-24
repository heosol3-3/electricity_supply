const gnbMenu = document.querySelectorAll("nav.gnb>ul>li")
const divs = document.querySelectorAll("nav.gnb>ul>li>div");
const headerWrap = document.querySelector(".header_wrap");

/* 주메뉴
각 li에 마우스를 올리면 각 높이값 가져와서 풀다운 메뉴 내려오고 보여야 함,
키보드 탭으로 움직여야 함 */

for(let i=0; i<gnbMenu.length; i++){
  gnbMenu[i].addEventListener('mouseover',e=>{
    e.currentTarget.classList.add('on');
    var ht = e.currentTarget.children[1].offsetHeight;
    headerWrap.style.height = 70 + ht + "px";
  })

  gnbMenu[i].addEventListener('mouseout',e=>{
    e.currentTarget.classList.remove('on');
    headerWrap.style.height =70 + "px";
  })
}


/* 검색박스 */ 
// 검색 버튼 누르면 검색박스 보이고 닫기 누르면 검색박스 닫힘

const btnSrch = document.querySelector('div.btn_srch');
const srchWrap = document.querySelector("div.srch_wrap");
const btnSrchClose = document.querySelector("a.btn_srch_close");

btnSrch.addEventListener('click',e=>{
  e.preventDefault();
  srchWrap.classList.add('on');
});
btnSrchClose.addEventListener('click',e=>{
  e.preventDefault();
  srchWrap.classList.remove('on');
})