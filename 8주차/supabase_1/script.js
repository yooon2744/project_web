// Supabase 프로젝트 URL + anon key

const SUPABASE_URL = "https://znjmpphioweqhctvqpan.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_EFJ_kuPXS8eIYUTeCso2jg_IfPFX5sV";

const client = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

function renderTodos(todos) {
  const todoItems = todos
    .map(function (todo) {
      return `
        <li>
          <strong>${todo.content}</strong>
          <div>완료 여부: ${todo.is_done ? "완료" : "진행 중"}</div>
          <div>생성일: ${todo.created_at}</div>
        </li>
      `;
    })
    .join("");

  todoList.innerHTML = todoItems;
}

async function loadTodos() {
  // TODO: todo 테이블에서 id, content, is_done, created_at 컬럼 조회

  const { data, error } = await client
    .from("todo")
    .select("id, content, is_done, created_at")
    .order("created_at", { ascending: false }); // 가장 최근에 추가한 게 위로 오도록 정렬

  if (error) {
    console.error("데이터 불러오기 실패:", error.message);
    return;
  }
  
  // 조회한 데이터를 화면에 그리는 함수 호출
  renderTodos(data);
}

async function addTodo(event) {
  event.preventDefault();

  const content = todoInput.value.trim();

  if (!content) {
    alert("할 일을 입력해주세요.");
    return;
  }

  // TODO: todo 테이블에 새 할 일을 추가
  const { error } = await client
    .from("todo")
    .insert([
      { content: content, is_done: false }
    ]);

  if (error) {
    console.error("데이터 추가 실패:", error.message);
    return;
  }

  todoInput.value = "";

  // TODO: 추가가 끝난 뒤 목록을 다시 불러오기
  loadTodos();
}

todoForm.addEventListener("submit", addTodo);

// TODO: 페이지가 열리면 loadTodos()가 실행되도록 작성
document.addEventListener("DOMContentLoaded", () => {
  loadTodos();
});