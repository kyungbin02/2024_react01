import React from 'react';

// 인자, 매개변수 : props
function Book(props) {
    return (
        <div>
            {/* 문자열 ${}` */}
            <h1>{`이 책의 이름음 ${props.name} 입니다.`}</h1>
            <h1>{`이 책은 총 ${props.numOfPAge} 페이지로 이루어져 있습니다.`}</h1>
        </div>
    );
}

export default Book;