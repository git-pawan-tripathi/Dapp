import logo from './logo.svg';
import './App.css';
import { Button, Card } from 'react-bootstrap'
import { Mint, Burn, Freeze, UnFreeze, TotalSupply } from './Actions'
import React, { useState, useEffect } from 'react';
function App() {
    let mintInput = React.createRef();
    let burnInput = React.createRef();
    const [totalsupply, settotalsupply] = useState(0);

    useEffect(() => { 
        document.getElementById('tts').innerHTML = totalsupply;
        console.log(totalsupply)
    });

    function handleSubmit() {
        TotalSupply().then(res =>{
            settotalsupply(res);
        })
    }

    return (
        <div className="App">
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Mint</Card.Title>
                 <input ref={mintInput} />
                <Button variant="primary" onClick={() => Mint(mintInput.current.value)}>Mint</Button>
            </Card.Body> 
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Burn</Card.Title>
                <input ref={burnInput} />
                <Button variant="primary" onClick={() => Burn(burnInput.current.value)}>Burn</Button>
            </Card.Body> 
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Freeze</Card.Title>
                <Button variant="primary" onClick={() => Freeze()}>Freeze</Button>
            </Card.Body> 
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>UnFreeze</Card.Title>
                <Button variant="primary" onClick={() => UnFreeze()}>UnFreeze</Button>
            </Card.Body> 
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Total Supply</Card.Title>
                 <Card.Text id="tts">
                    {totalsupply}
                </Card.Text>
                <Button variant="primary" onClick={handleSubmit}>TotalSupply</Button>
            </Card.Body> 
            </Card>

    </div>
    );
}

export default App;