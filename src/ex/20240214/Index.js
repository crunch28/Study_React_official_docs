import { Link, Outlet } from "react-router-dom";

export default function Main() {

  return (
    <div>
      <p><Link to={'/20240214/ex1'}><button>갤러리 완성하기</button></Link></p>
      <p><Link to={'/20240214/ex2'}><button>폼 입력 불가 문제 고치기</button></Link></p>
      <p><Link to={'/20240214/ex3'}><button>충돌 고치기</button></Link></p>
      <p><Link to={'/20240214/ex4'}><button>불필요한 state 제거하기</button></Link></p>
      <p>--------------------------------------------------------------------</p>
      <Outlet></Outlet>
    </div>
  );
}
