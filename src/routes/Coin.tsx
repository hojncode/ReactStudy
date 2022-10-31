import { useParams } from "react-router-dom";

interface Params {
    coinId:string;
}

function Coin() {
        const {coinId} = useParams<Params>();
    return <h1>Coin: {coinId}</h1>;
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