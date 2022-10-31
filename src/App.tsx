import React, { useState } from "react";
import Circle from "./Circle";
import styled from "styled-components";



// function App() {
  
//     const [value, setValue] = useState("");

//     const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//       const {
//         currentTarget : {value},
//       } = event;
//       setValue(value);
//     };

//     const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//       event.preventDefault();
//       console.log("hello", value);
//     };

//     return (
//     <div>
//       <Circle borderColor="yellow" bgColor="teal"/>
//       <Circle text="props from parent" bgColor="tomato"/>

//       <form onSubmit={onSubmit}>
//         <input
//           value={value}
//           onChange={onChange}
//           type="text"
//           placeholder="username"
//         />
//       </form>
//     </div>
//   )

// }


  const Container = styled.div`
    background-color: ${(props) => props.theme.bgColor};
  `

  const H1 =styled.div`
    color: ${(props)=> props.theme.textColor};
  `

  function App() {
    return (
      <Container>
        <H1>hahahahahahah</H1>
      </Container>
    )
  }


export default App;
