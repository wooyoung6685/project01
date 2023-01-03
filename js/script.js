document.querySelector("#layer button").addEventListener("click",function(){
    document.querySelector("#layer").style.display="none";
  });
  $(function () {
    const visual = $("#brandVisual>ul>li");
    const button = $("#buttonList>li");
    let current = 0; //현재
    let btnIdx = 0; //클릭한 페이저 버튼의 인덱스
    let id; //setIntervalId
    const speed = 3000;
    //버튼클릭함수
    button.click(function () {
      btnIdx = $(this).index();
      button.removeClass("on");
      $(this).addClass("on");
      move();
    });
  
    //시간마다실행
    timer();
    function timer() {
      id = setInterval(function () {
        let next = current + 1; //0+1
        if (next == visual.length) {
          next = 0;
        }
        button.eq(next).trigger("click");
      }, speed);
    }
  
    //이동시키는 함수
    function move() {
      if (current == btnIdx) return;
      let cu = visual.eq(current);
      let ne = visual.eq(btnIdx);
      cu.css("left", "0").stop().animate({ left: "-100%" });
      ne.css("left", "100%").stop().animate({ left: "0%" });
      current = btnIdx;
    }
    //clearInterval
    clearAuto();
    function clearAuto() {
      $("#brandVisual,#buttonList,.controls").mouseenter(function () {
        clearInterval(id);
      });
      $("#brandVisual,#buttonList,.controls").mouseleave(function () {
        timer();
      });
    }
  
    //좌우컨트롤버튼
    

    }
  ); //jQuery

