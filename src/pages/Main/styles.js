import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    max-width: 900px;
    background: linear-gradient(to bottom, #fff 0%, rgba(0, 0, 0, 0.01) 100%);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    margin-bottom: 0;
    padding: 60px;
    margin: 0 auto;
    text-align: center;

    div {
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        font-size: 15px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`;

export const Form = styled.form`
    margin-top: 10px;
    display: flex;
    flex-direction: row;

    input {
        flex: 1;
        border: 1px solid #eee;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 16px;
        color: #666;

        ::placeholder {
            color: #999;
        }
    }
`;

export const DivUl = styled.ul`
    margin-top: 50px;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;

    li {
        max-width: 250px;
        display: flex;
        flex-direction: column;
        background: #fff;
        border-radius: 4px;
        padding: 20px;

        > img {
            align-self: center;
            width: 200px;
            height: 250px;
        }

        > strong {
            font-size: 16px;
            line-height: 20px;
            color: #333;
            margin-top: 5px;
        }

        > span {
            font-size: 21px;
            font-weight: bold;
            margin: 5px 0 20px;
        }

        > p {
            display: flex;
            font-size: 14px;
            line-height: 20px;
            color: #666;
            align-items: left;
        }

        > button {
            background: #626263;
            color: #fff;
            border: 0;
            border-radius: 4px;
            overflow: hidden;
            margin-top: auto;

            display: flex;
            align-items: center;

            &:hover {
                background: ${darken(0.1, '#626263')};
            }

            div {
                display: flex;
                align-items: center;
                padding: 12px;
                background: rgba (0, 0, 0, 0.1);

                svg {
                    margin-right: 5px;
                }
            }

            span {
                flex: 1;
                text-align: center;
                font-weight: bold;
            }
        }
    }
`;
