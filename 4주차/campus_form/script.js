const clubForm = document.querySelector("#club-form");
const studentNameInput = document.querySelector("#student-name");
const studentIdInput = document.querySelector("#student-id");
const studentEmailInput = document.querySelector("#student-email");
const clubNameInput = document.querySelector("#club-name");
const partSelect = document.querySelector("#part");
const reasonInput = document.querySelector("#reason");

function createAlertMessage() {

  // .value 값들을 추가했습니다.
  const studentName = studentNameInput.value;
  const studentId = studentIdInput.value;
  const studentEmail = studentEmailInput.value;
  const clubName = clubNameInput.value;
  const part = partSelect.value;
  const reason = reasonInput.value;

// 팝업 문구 변경
  return `지원서 제출이 완료됐습니다 !.'

이름: ${studentName}
학번: ${studentId}
이메일: ${studentEmail}
관심 동아리: ${clubName}
지원 분야: ${part}
지원 이유: ${reason}`;
}

clubForm.addEventListener("submit", function (event) {
  // prevent로 새로고침 막기
  event.preventDefault();

  const message = createAlertMessage();
  alert(message); 
  // 메세지를 alert로 띄웠습니다. 

});
