import { useParams } from "react-router-dom";
import styled from "styled-components";

const Styled = styled.h1`
    color:${props =>  props.theme.textColor};
`
interface Params {
    coinId:string;
}

function Coin() {
        const {coinId} = useParams<Params>();
    return <Styled>Coin: {coinId}</Styled>;
}

export default Coin;




// const {coinId} = useParams<{coinId:string}>();
// 를 interface 를 사용해서 정의 할 수 있다.
// ===
// interface Params {
//     coinId:string;
// }
//...
// const {coinId} = useParams<Params>();