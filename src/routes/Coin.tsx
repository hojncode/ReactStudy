import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";


const Title = styled.h1`
    font-size: 48px;
    color: ${props => props.theme.accentColor};
`
const Loader = styled.span`
    text-align:center;
    display: block;
`
const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
`
const Header = styled.div`
    height : 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
`


interface Params {
    coinId:string;
}

interface State {
    name: string;
}

function Coin() {
        const [loading, setLoading] = useState(true);
        const {coinId} = useParams<Params>();
        const {state} = useLocation<State>();
        console.log(state.name)
    return (
        <Container>
            <Header>
                <Title>{state?.name || "로딩중..."}</Title>
            </Header>
            
            {loading ? <Loader>"로딩중...please wait"</Loader> : null }
        </Container>
    )
}

export default Coin;



//깃 푸시용 테스트 주석
// const {coinId} = useParams<{coinId:string}>();
// 를 interface 를 사용해서 정의 할 수 있다.
// ===
// interface Params {
//     coinId:string;
// }
//...
// const {coinId} = useParams<Params>();