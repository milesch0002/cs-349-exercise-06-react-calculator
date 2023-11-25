import { useState } from 'react';

export default function Caclulator() {
    const [displayValue, setDisplayValue] = useState("0");

    const handleClick = (value) => {
        if (value === "=") {
            const result = evaluateExpression(displayValue);
            console.log(displayValue);
            setDisplayValue(result);
        } 
        else if (value === "C") {
            setDisplayValue("");
        }
        else {
            setDisplayValue(displayValue + value);
        }
    }

    const evaluateExpression = (equation) => {
        try {
            return eval(equation);
        } catch (error) {
            return "Invalid Expression";
        }
    }


    return (
        <>
            <div className="container">
                <div className="display">
                        <Display value={displayValue} />
                </div>
                <div className="buttons">
                    <Button value="1" onButtonClick={() => handleClick("1")} />
                    <Button value="2" onButtonClick={() => handleClick("2")} />
                    <Button value="3" onButtonClick={() => handleClick("3")} />
                    <Button value="+" onButtonClick={() => handleClick("+")} />
                    <Button value="4" onButtonClick={() => handleClick("4")} />
                    <Button value="5" onButtonClick={() => handleClick("5")} />
                    <Button value="6" onButtonClick={() => handleClick("6")} />
                    <Button value="-" onButtonClick={() => handleClick("-")} />
                    <Button value="7" onButtonClick={() => handleClick("7")} />
                    <Button value="8" onButtonClick={() => handleClick("8")} />
                    <Button value="9" onButtonClick={() => handleClick("9")} />
                    <Button value="/" onButtonClick={() => handleClick("/")} />
                    <Button value="0" onButtonClick={() => handleClick("0")} />
                    <Button value="C" onButtonClick={() => handleClick("C")} />
                    <Button value="=" onButtonClick={() => handleClick("=")} />
                    <Button value="X" onButtonClick={() => handleClick("X")} />
                </div>
            </div> 
        </>
    );

}

function Display({value}) {
    return <div className="output">{value}</div>;
}

function Button({value, onButtonClick}) {
    return (
        <button className="button" onClick={onButtonClick}>{value}</button>
    );
}


