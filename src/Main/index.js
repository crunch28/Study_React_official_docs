import { Link, useNavigate } from "react-router-dom";
export default function Main() {
  const navigate = useNavigate();
  return (
    <div>
      <p><Link to={'/20240117'}><button>2024.01.17</button></Link></p>
      <p><Link to={'/20240124'}><button>2024.01.24</button></Link></p>
      <p><Link to={'/20240207'}><button>2024.02.07</button></Link></p>
      <p><Link to={'/20240214'}><button>2024.02.14</button></Link></p>
    </div>
  );
}
