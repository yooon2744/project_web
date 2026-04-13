const loadButton = document.querySelector("#load-button");
const postList = document.querySelector("#post-list");

async function loadPosts() {
  // 사용자에게 현재 상태를 먼저 보여줍니다.
  postList.innerHTML = "<p>데이터를 불러오는 중입니다...</p>";

  // response 코드 : const response = await ~~ , 공개 Api에 요청을 보내는 코드 
  // request 코드 : fetch("~~~"), 요청을 쏘아 보내는 코드
  // API 필요성 : 키오스크 음식 주문 처럼, 음식 주문사항(데이터베이스)를 서로 다른 백엔드 시스템(요리사)이나 유저(손님) 교류방법으로 쓰임
  // Json 필요성 : c++, python, java 등등 다른 언어가 아닌 국제 공용어와 같은 역할을 해줌.

  const response = await fetch("https://koreandummyjson.vercel.app/api/posts");
  const data = await response.json();

  // 화면에 보일 카드 문자열을 제작, 배열에서 출력 개수 3개 고르기 
  // <p>${post.content}</p> 삭제로, 제목만 출력하게 변경 

  const postCards = data.posts
    .slice(0, 3) // 0, 5에서 숫자변경시 출력 개수 변경 가능
    .map(function (post) {
      return `
        <article class="post-card">
          <h2>${post.title}</h2>
        </article>
      `;
    })
    .join("");

  postList.innerHTML = postCards;
}

loadButton.addEventListener("click", loadPosts);
