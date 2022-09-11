import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import { AuthContext } from '../../contexts/AuthContext.js';
import { RefreshContext } from '../../contexts/RefreshContext.js';
import { getUserName, getUserBalance } from '../../services/axiosServices.js';

//components


export default function Wallet() {

    const [username, setUsername] = useState('');
    const [userbalance, setUserbalance] = useState(0);
    const { usertoken } = useContext(AuthContext);
    const { refresh } = useContext(RefreshContext);

    useEffect(() => {
        getUserName(usertoken).then((res) => {
            setUsername(res.data);
        })
        .catch((res) => {
            console.log(res.data);
        });
    },[usertoken]);

    useEffect(() => {
        getUserBalance(usertoken).then((res) => {
            setUserbalance(res.data);
        })
        .catch((res) => {
            console.log(res.data);
        });
    },[usertoken, refresh]);

    return (
        <WalletContainer>
            <header>
                <h2>Olá, {username}</h2>


            </header>
            <div>


                
                <h3>Saldo: <strong>{userbalance}</strong></h3>
            </div>
            {/* <EntryButton />
            <EntryButton /> */}
        </WalletContainer>
    );
}

const WalletContainer = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`;