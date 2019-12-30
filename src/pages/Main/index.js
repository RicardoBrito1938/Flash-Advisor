import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { Container, Form, DivUl } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';
import logo from '../../assets/Logo.svg';
import api from '../../services/api';

export default function Main({ history }) {
    const [smartPhone, setSmartphone] = useState('');
    const [cellphones, setCellphones] = useState([]);

    const handleSubmit = useCallback(e => {
        e.preventDefault();

        history.push(`/search/${smartPhone}`);
    });

    useEffect(() => {
        async function callingApi() {
            const response = await api.get();

            setCellphones(response.data);
        }
        callingApi();
    }, []);

    return (
        <Container>
            <div>
                <Link to="/">
                    <img src={logo} alt="sprint" />
                </Link>
                <h1>Smartphones</h1>
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
                {cellphones.map(cellphone => (
                    <li key={cellphone.offer_id}>
                        <img src={cellphone.image_url} alt="" />
                        <strong>{cellphone.offer_desc}</strong>
                        <p>{cellphone.long_description}</p>
                        <button type="button">
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
