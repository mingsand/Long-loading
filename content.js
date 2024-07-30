// 로딩을 5초 지연시키는 함수
function delayPageLoad() {
  // 5초 후에 페이지를 보이도록 설정
  setTimeout(() => {
    document.body.style.visibility = 'visible';
  }, 5000);
}

// 페이지 로딩이 완료되었을 때 지연 함수 실행
window.addEventListener('load', delayPageLoad);
