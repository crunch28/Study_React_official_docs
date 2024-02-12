import { useState } from 'react';
import { sculptureList } from './data1.js';

export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick1() {
        setIndex(index + 1);
    }

    function handleNextClick2() {
        setIndex(index + 1);
    }

    function handlePreviousClick2() {
        setIndex(index - 1);
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return (
        <>
            <p>마지막 조각상에서 “Next”를 누르면 코드가 충돌합니다.
                <br />로직을 수정하여 이를 해결하세요.
                <br />이벤트 핸들러에 추가로 로직을 추가하거나 동작이 불가능할 때 버튼을 비활성화하여 이를 처리할 수 있습니다.

                충돌을 수정한 후, 이전 조각상을 표시하는 “Previous” 버튼을 추가하세요.
                <br />첫 번째 조각상에서는 충돌이 발생하지 않아야 합니다.</p>
            <div id="parent" style={{ display: 'flex' }}>
                <div id="ch1" style={{ paddingRight: '20px' }}>
                    <h1>문제</h1>
                    <button onClick={handleNextClick1}>
                        Next
                    </button>
                    <h2>
                        <i>{sculpture.name} </i> by {sculpture.artist}
                    </h2>
                    <h3>
                        ({index + 1} of {sculptureList.length})
                    </h3>
                    <button onClick={handleMoreClick}>
                        {showMore ? 'Hide' : 'Show'} details
                    </button>
                    {showMore && <p>{sculpture.description}</p>}
                    <img src={sculpture.url} alt={sculpture.alt} />
                </div>
                <div id="ch2">
                    <h1>해결</h1>
                    {sculptureList.length === index + 1 ? null
                        : <button onClick={handleNextClick2}>
                            Next
                        </button>}
                    {1 === index + 1 ? null
                        : <button onClick={handlePreviousClick2}>
                            Previous
                        </button>}
                    <h2>
                        <i>{sculpture.name} </i>
                        by {sculpture.artist}
                    </h2>
                    <h3>
                        ({index + 1} of {sculptureList.length})
                    </h3>
                    <button onClick={handleMoreClick}>
                        {showMore ? 'Hide' : 'Show'} details
                    </button>
                    {showMore && <p>{sculpture.description}</p>}
                    <img
                        src={sculpture.url}
                        alt={sculpture.alt}
                    />
                </div>
            </div >
        </>
    );
}
