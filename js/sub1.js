// sub1.js
window.addEventListener('load', () => {



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


// step1

const step1 = document.querySelectorAll(".step1>ul>li>a");

step1.forEach((li,i)=>{
  li.addEventListener("click",e=>{
    e.preventDefault();
    for(let i=0; i<step1.length; i++){
      step1[i].style.backgroundColor=`transparent`;
      step1[i].style.backgroundImage=`url(images/ico_inquiry_0${i+1}.png)`
      step1[i].style.color = `#333`;
    }
    li.style.backgroundImage = `url(images/ico_inquiry_on_0${i+1}.png)`;
    li.style.backgroundColor = `#043285`;
    li.style.color = `#fff`;
  });
});






// top버튼
// 클릭하면 스크롤이 맨 위로 올라감
// 스크롤 내리면 top메뉴 .on해서 보이고
// 일정 길이 이상 내려가면 position absolute로 변경

const btnTop = document.querySelector(".btn_top");

btnTop.addEventListener('click',e=>{
  e.preventDefault();
  window.scroll({
    top:0,
    left:0,
    behavior:'smooth'
  });
});

window.addEventListener('scroll',e=>{
  let scroll = document.querySelector('html').scrollTop;
  console.log(scroll);
  if(scroll>=200 && scroll<2800){
    btnTop.classList.remove("on","ab");
    btnTop.classList.add("on");
  }else if(scroll>=2800){
    btnTop.classList.add("ab");
  }else{
    btnTop.classList.remove("on","ab");
  }
})

})