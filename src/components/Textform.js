import React, { useState } from 'react'
//rfc-->react function based component
export default function Textform(props) {

    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let n = text.toUpperCase();
        setText(n);
        props.showAlert("converted to uppercase", "success")
    }

    const handleLowClick = () => {

        let n = text.toLowerCase();
        setText(n);
        props.showAlert("converted to lowercase", "success")

    }

    const handleClear = () => {

        let n = '';
        setText(n);

    }

    const handleASCII = () => {

        let n = text.charCodeAt(0);
        setText(`${n}`);

    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("text copied!!!", "success")
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);//regex(regular expression concept is used here )which first split on the basis of space and form array then again join array with just single spaces
        setText(newText.join(" "));
    }
    //when you listen for any event in react then function will definitely run but we get event object in free
    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);
    }
    const f1 = () => {


        if (text.includes("@gmail.com")) {
            const myArray = text.split(" ");
            for (let i = 0; i < myArray.length; i++) {
                if (myArray[i].includes("@gmail.com"))
                    setText(myArray[i]);

            }


        }
        else {
            setText("not have gmail");

        }


    }

    const [text, setText] = useState('');
    //text is state variable whose default valaue is Enter text here'
    //text="new text "//wrong way to set the staate
    //setText("new text ");//correct way to set the state


    const [oper, setOper] = useState('choose operator');
    const [res, setRes] = useState('');
    const op1 = () => {
        var value1 = document.getElementById('inp1').value;
        var value2 = document.getElementById('inp2').value;

        if (value1 === '' || value2 === '') {
            alert("values cant empty");
        }
        else {
            let n = Number(value1) + Number(value2);
            setRes(n);
            setOper("+");

        }

    }
    const op2 = () => {
        var value1 = document.getElementById('inp1').value;
        var value2 = document.getElementById('inp2').value;

        if (value1 === '' || value2 === '') {
            alert("values cant empty");
        }
        else {
            let n = Number(value1) - Number(value2);
            setRes(n);
            setOper("-");

        }

    }
    const op3 = () => {
        var value1 = document.getElementById('inp1').value;
        var value2 = document.getElementById('inp2').value;

        if (value1 === '' || value2 === '') {
            alert("values cant empty");
        }
        else {
            let n = Number(value1) / Number(value2);
            setRes(n);
            setOper("/");

        }

    }
    const op4 = () => {
        var value1 = document.getElementById('inp1').value;
        var value2 = document.getElementById('inp2').value;

        if (value1 === '' || value2 === '') {
            alert("values cant empty");
        }
        else {
            let n = Number(value1) % Number(value2);
            setRes(n);
            setOper("%");

        }

    }

    const op5 = () => {
        var value1 = document.getElementById('inp1').value;
        var value2 = document.getElementById('inp2').value;

        if (value1 === '' || value2 === '') {
            alert("values cant empty");
        }
        else {
            let n = Number(value1) * Number(value2);
            setRes(n);
            setOper("*");

        }

    }
    let mystyle = {

    }
    return (
        <>
            <div className='container' style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>Convert to uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-3" onClick={handleLowClick}>Convert to lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-3" onClick={handleClear}>Clear</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-3" onClick={handleASCII}>Convert to ASCII value</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-3" onClick={handleExtraSpace}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-3" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-3" onClick={f1}>search gmail</button>


            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                {/*\s means white spaces including new line */}
                <p>{text.split(/\s+/).filter((element) => {
                    return element.length !== 0;
                }).length} words and {text.length} characters and {text.split("\n").length} lines</p>
                <p>It takes {0.008 * text.split(" ").filter((element) => {
                    return element.length !== 0;
                }).length} minutes to read</p>
                <br></br>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
                <br></br>
                <div>

                    <h1><b>CALCULATOR</b></h1>
                    <br></br>
                    <input type="text" id="inp1" placeholder='Enter number1'></input>

                    <button className="btn btn-primary m-3">{oper}</button>
                    <input type="text" id="inp2" placeholder='Enter number2'></input>

                    <br></br>
                    <button style={mystyle} className="btn btn-secondary m-3" onClick={op1}>+</button>
                    <button className="btn btn-success m-3" onClick={op2}>-</button>
                    <button className="btn btn-warning m-3" onClick={op3}>/</button>
                    <button className="btn btn-danger m-3" onClick={op4}>%</button>
                    <button className="btn btn-info m-3" onClick={op5}>*</button>



                    <p>Result:{res}</p>

                </div>



            </div>
        </>
    )
}
