import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { Container, Form, DivUl } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';
import { useAlert } from 'react-alert';
import logo from '../../assets/Logo.svg';
import api from '../../services/api';

export default function Main({ history, match }) {
    const [smartPhone, setSmartphone] = useState([]);
    const [cellphones, setCellphones] = useState([]);
    //const alert = useAlert();

    const handleSubmit = useCallback(e => {
        history.push(`/search/${smartPhone}`);
    });

    useEffect(() => {
        async function callingApi() {
            const response = await api.get();

            setCellphones(response.data);
        }
        callingApi();
    }, []);

    const results = cellphones.filter(cellphone =>
        cellphone.offer_desc
            .trim()
            .toLowerCase()
            .includes(match.params.smartPhone.trim().toLowerCase())
    );

    return (
        <Container>
            <div>
                <Link to="/">
                    <img src={logo} alt="sprint" />
                </Link>
                <h1>Sprint</h1>
            </div>
            <Form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="search smartphone upgrade"
                    value={smartPhone}
                    onChange={e => setSmartphone(e.target.value)}
                />
            </Form>
            <DivUl>
                {results.map(result => (
                    <li key={result.offer_id}>
                        <img src={result.image_url} alt="" />
                        <strong>{result.offer_desc}</strong>
                        <p>{result.long_description}</p>
                        <button
                            onClick={() => {
                                alert.show('Oh look, an alert!');
                            }}
                        >
                            <div>
                                <MdAddShoppingCart size={16} color="#fff" />
                            </div>
                            <span>Assign Plan</span>
                        </button>
                    </li>
                ))}
            </DivUl>
        </Container>
    );
}
