import { useNavigate } from "react-router-dom";

export default function MMain() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/min-sung/Challenges")}>첫번째 주 과제로 이동</button>
    </div>
  );
}
