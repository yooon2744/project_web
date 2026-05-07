import React, { useState } from "react";

function ProfileCard({ name, major, hobby }) {
  return (
    <article style={styles.card}>
      <h2>{name}</h2>
      <p>전공: {major}</p>
      <p>취미: {hobby}</p>
    </article>
  );
}

// props 추가, counter 예시 추가
function App() {
  const [count, setCount] = useState(0);

  return (
    <main style={styles.page}>
      <ProfileCard name="김하늘" major="컴퓨터공학" hobby="영화 감상" />
      <ProfileCard name="김세윤" major="지능형반도체" hobby="클라이밍" />

      <section style={styles.card}>
        <h1>React Counter</h1>
        <p>현재 숫자: {count}</p>
        <div style={styles.buttonRow}>
          <button style={styles.button} onClick={() => setCount(count - 1)}>
            -1
          </button>
          <button style={styles.button} onClick={() => setCount(count + 1)}>
            +1
          </button>
        </div>
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    gap: "20px", // 카드 사이 간격 추가 
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#eff6ff",
  },
  card: {
    padding: "32px",
    borderRadius: "20px",
    backgroundColor: "#ffffff",
    textAlign: "center",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.08)",
  },
  buttonRow: {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
  },
  button: {
    border: "none",
    borderRadius: "12px",
    padding: "12px 18px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    cursor: "pointer",
  },
};

export default App;