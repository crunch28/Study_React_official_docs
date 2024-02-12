import { Link, Outlet } from "react-router-dom";

export default function Main() {

  return (
    <div>
      <p><Link to={'/20240207/ex1'}><button>예제1</button></Link></p>
        <Outlet></Outlet>
    </div>
  );
}
