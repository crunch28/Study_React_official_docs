// Challenge 1 컴포넌트 내보내기
// 내보내기는 export 사용

export default function Profile() {
  return <img src="https://i.imgur.com/lICfvbD.jpg" alt="Aklilu Lemma" />;
}

// Challenge 2 return 문을 고치세요
// 한줄인 경우 return문과 동일한 선상에
// 여러줄인 경우 () 묶어서

function Profile2() {
  return <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />;
}

function Profile3() {
  return (
    <>
      <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />
      <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />
    </>
  );
}

// Challenge 3 컴포넌트명은 대문자로

function Profile4() {
  return <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />;
}

function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

// Challenge 4 컴포넌트를 새로 작성해 보세요
function Congratulations() {
  const hello = "world!";
  return <h1>{hello}</h1>;
}
