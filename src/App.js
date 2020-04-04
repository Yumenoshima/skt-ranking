import React, {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

    let sv = ["デポ01", "デポ02", "デポ03", "ケン01", "ケン02", "ケン03", "イシ01", "イシ02", "イシ03", "ケレ01"]
    const [serverName, setServerName] = useState('デポ01')
    const [server, setServer] = useState(1);
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const result = await axios(
                'https://script.google.com/macros/s/AKfycbzIq4GFUccHevknzrlGmv2K-W5oIco_yVBq6Q92rmxiHI_zTwoa/exec?server=' + server,
            );
            setData(result.data);
            setServerName(sv[server-1]);
        }

        fetchData();
    }, [sv, server]);

    return (
        <div className="App">
            <header className="App-header">

                <Dropdown onSelect={function (evt) {
                    setServer(evt)
                }}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        サーバー選択
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="1">デポ01</Dropdown.Item>
                        <Dropdown.Item eventKey="2">デポ02</Dropdown.Item>
                        <Dropdown.Item eventKey="3">デポ03</Dropdown.Item>
                        <Dropdown.Divider/>

                        <Dropdown.Item eventKey="4">ケン01</Dropdown.Item>
                        <Dropdown.Item eventKey="5">ケン02</Dropdown.Item>
                        <Dropdown.Item eventKey="6">ケン03</Dropdown.Item>
                        <Dropdown.Divider/>

                        <Dropdown.Item eventKey="7">イシ01</Dropdown.Item>
                        <Dropdown.Item eventKey="8">イシ02</Dropdown.Item>
                        <Dropdown.Item eventKey="9">イシ03</Dropdown.Item>
                        <Dropdown.Divider/>

                        <Dropdown.Item eventKey="10">ケレ01</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <h1>{serverName}</h1>

                <img src={logo} className="App-logo" alt="logo"/>


                <Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        <th>ランク</th>
                        <th>名前</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item, index) => (
                        <tr>
                            <td>{item.ranking}</td>
                            <td>{item.name}</td>
                        </tr>

                    ))}
                    </tbody>
                </Table>

                <p>
                    リネージュM記者クラブ<br/>
                    <code>Twitter特派員募集中！</code>
                </p>
                <a
                    className="App-link"
                    href="https://twitter.com/Yumenoshima1"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Yumenoshima
                </a>
            </header>
        </div>
    );
}

export default App;
