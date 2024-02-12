import { useRef } from 'react';

export default function Counter(){
    let ref = useRef(0);

    /*
     * 시작 버튼 클릭 시, 인터벌 설정 기능
     */
    function handleClick(){
        ref.current = ref.current + 1;
        alert('클릭' + ref.current);
    }

    return(
        <>
        <button onClick={handleClick}>
            클릭
        </button>
        </>
    );
}