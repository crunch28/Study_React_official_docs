import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();
  const movePage = (path) => {
    navigate(path);
  };
  return (
    <div>
      <button onClick={() => movePage("/na-yeon")}>나연님</button>
      <button onClick={() => movePage("/min-sung")}>민성님</button>
      <button onClick={() => movePage("/ju-hee")}>주희님</button>
      <button onClick={() => movePage("/jong-han")}>종한님</button>
      <button onClick={() => movePage("/ji-sang")}>지상님</button>
      <button onClick={() => movePage("/hoe-jin")}>회진님</button>
    </div>
  );
}
