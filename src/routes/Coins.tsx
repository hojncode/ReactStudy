import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
    font-size: 48px;
    color:${props => props.theme.accentColor};
`

const Loader = styled.span`
    text-align: center;
    display:block;
`

const Img = styled.img`
    width:25px;
    height:25px;
    margin-right: 10px;
`
const Container = styled.div`
    padding: 0px 20px;
    //가운데로 정렬하고 , 최대 크기 고정.
    max-width: 480px;
    margin:0 auto;
`
const Header = styled.header`
    height: 15vh;
    display:flex;
    justify-content: center;
    align-items: center;
`

const CoinsList = styled.ul`
    
`

const Coin = styled.li`
    background-color:white;
    color: ${(props=> props.theme.bgColor)};
    border-radius:15px;
    margin-bottom:10px;
    a{
        display: flex;
        padding: 10px;
        transition: color 0.1s ease-in;
        align-items: center;
    }
    &:hover {
        a{
            color: ${(props)=> props.theme.accentColor};
        }
    }


`

interface CoinInterface {
        id: string,
        name: string,
        symbol: string,
        rank: number,
        is_new: boolean,
        is_active:boolean,
        type: string,
}

function Coins() {
    const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=> {
        (async()=> {
           const response = await fetch("https://api.coinpaprika.com/v1/coins");
           const json = await response.json();
           setCoins(json.slice(0,10));
           setLoading(false);
        })();
    },[])
    return (
    <Container>
        <Header>
            <Title>코인/defaultPage</Title>
        </Header>
        
        {loading ? <Loader>"로딩중...please wait"</Loader> : (<CoinsList>
            {coins.map((coin)=> (
                <Coin key={coin.id}>
                    <Link 
                        to={{
                            pathname: `/${coin.id}`,
                            state: {name: coin.name},
                    }}>
                        <Img 
                        src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} alt="" className="" />
                        {coin.name} &rarr;
                    </Link>   
                </Coin>
            ))}
        </CoinsList>)}
        
    </Container>
    )
}

export default Coins;