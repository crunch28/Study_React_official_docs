import Ex1 from "./ex1";
import { exFunc as ExComponent, a as b, excomp } from "./ex2";
import { ExFunc, a } from "./ex3";

export default function Main() {
  console.log(a);
  console.log(b);
  const ExComp = excomp;

  return (
    <div>
      <Ex1 />
      <ExFunc />
      <ExComponent />
      <ExComp />
    </div>
  );
}
