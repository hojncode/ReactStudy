import styled from "styled-components"

interface ContainerProps { // interface 는 object shape (객체 모양)을 타입스크립트에서 설명해주는 개념.
    bgColor: string;
    borderColor: string;
}

const Container = styled.div<ContainerProps>`
    width : 200px;
    height : 200px;
    border-radius:100px;
    background-color : ${props => props.bgColor};
    border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps { 
    bgColor : string; // 부모 컴포넌트에서 props가 입력 되었기 때문에 옵셔널 체이닝이 없어서 오류가 발생하지 않는다.
    borderColor?:string;// 옵셔널체이닝을 입력하지 않으면 , 부모 컴포넌트에서 props를 입력해줘야 에러가 발생하지 않는다.
    text?:string;  // 옵셔널체이닝을 입력하지 않으면 , 부모 컴포넌트에서 props를 입력해줘야 에러가 발생하지 않는다.
}

// ?? 는 무엇인가 : ?? 앞에 값이 null이거나 undefined이면 오른쪽 값을, 그렇지 않으면 왼쪽 값을 반환하는 논리연산자.

//뷰
function Circle({bgColor, borderColor, text = "상위 컴포넌트에서 text props가 없을 시 , 현재 텍스트가 보여집니다"} : CircleProps) {
    return  ( 
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>  
        {text}
    </Container>
    )
}

export default Circle;