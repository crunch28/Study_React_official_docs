import { useState } from "react";

export default function Form() {
    let firstName = '';
    let lastName = '';

    const [firstNm, setFirstNm] = useState('');
    const [lastNm, setLastNm] = useState('');

    function handleFirstNameChange(e) {
        firstName = e.target.value;
    }

    function handleLastNameChange(e) {
        lastName = e.target.value;
    }

    function handleFirstNameChangeState(e) {
        setFirstNm(e.target.value);
    }

    function handleLastNameChangeState(e) {
        setLastNm(e.target.value);
    }

    function handleReset() {
        firstName = '';
        lastName = '';
        setFirstNm('');
        setLastNm('');
    }

    return (
        <>
            <p>입력 필드에 입력하면 아무것도 나타나지 않습니다.
                <br />마치 입력값이 빈 문자열로 “고정”된 것처럼 보입니다.
                <br />첫 번째 'input'의 value는 항상 firstName 변수와 일치하도록 설정되어 있으며, 두 번째 'input'의 value는 항상 lastName 변수와 일치하도록 설정되어 있습니다.
                <br />이 부분은 맞습니다.
                <br />두 입력 모두 onChange 이벤트 핸들러를 가지고 있으며, 최신 사용자 입력(e.target.value)을 기반으로 변수를 업데이트하려고 시도합니다.
                <br />그러나 변수들은 다시 렌더링 되는 동안 값을 “기억”하지 않는 것처럼 보입니다.
                <br />state 변수를 사용하여 이 문제를 해결하세요
            </p>
            <div id="parent" style={{ display: 'flex' }}>
                <div id="ch1" style={{ paddingRight: '20px' }}>
                    <h1>문제</h1>
                    <form onSubmit={e => e.preventDefault()}>
                        <input
                            placeholder="First name"
                            value={firstName}
                            onChange={handleFirstNameChange}
                        />
                        <input
                            placeholder="Last name"
                            value={lastName}
                            onChange={handleLastNameChange}
                        />
                        <h1>Hi, {firstName} {lastName}</h1>
                        <button onClick={handleReset}>Reset</button>
                    </form>
                </div>
                <div id="ch2">
                    <h1>해결</h1>
                    <form onSubmit={e => e.preventDefault()}>
                        <input
                            placeholder="First name"
                            value={firstNm}
                            onChange={handleFirstNameChangeState}
                        />
                        <input
                            placeholder="Last name"
                            value={lastNm}
                            onChange={handleLastNameChangeState}
                        />
                        <h1>Hi, {firstNm} {lastNm}</h1>
                        <button onClick={handleReset}>Reset</button>
                    </form>
                </div>
            </div>
        </>
    );
}
