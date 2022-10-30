import React, { useState } from "react";
import Circle from "./Circle";



function App() {
  
    const [value, setValue] = useState("");

    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
      const {
        currentTarget : {value},
      } = event;
      setValue(value);
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log("hello", value);
    };

    return (
    <div>
      <Circle borderColor="yellow" bgColor="teal"/>
      <Circle text="props from parent" bgColor="tomato"/>

      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
      </form>
    </div>
  )
}

export default App;
