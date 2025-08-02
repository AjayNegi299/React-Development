import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = " ";
    let str = "ABCDEFGHIJKLMNOPQRSTabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "^*$Q()@#_!~&";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

    useEffect(()=>{
      passwordGenerator()
    },[length, numberAllowed, charAllowed, passwordGenerator])

    const passwordRef = useRef(null)

    const copyPasswordGenerator = useCallback(()=>{
      passwordRef.current?.select()
      window.navigator.clipboard.writeText(password)
    },[password])

  return (
    <div className="w-full max-w-md mx-auto shadow-2xl rounded-lg px-4 py-4 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3 font-bold text-2xl">
        Password generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-gray-100 text-black"
          placeholder="Password"
          ref={passwordRef}
          
          />
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0  cursor-pointer
        "
        onClick={copyPasswordGenerator}
        >
          copy
        </button>
      </div>
      <div className="flex justify-center gap-x-2 mt-8">
        <input
          type="range"
          min={6}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />

        <label>length: {length}</label>

        <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="NumberInput"
          onClick={() => setNumberAllowed((pre) => !pre)}
        />
        <label htmlFor="NumberInput">Number</label>

        <input
          type="checkbox"
          defaultChecked={charAllowed}
          id="characterInput"
          onClick={() => setCharAllowed((pre) => !pre)}
        />
        <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
  );
}

export default App;
