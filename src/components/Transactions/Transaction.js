import styled from 'styled-components';

export default function Transaction({id, title, value, type, date}) {

    //insert edit and delete functions

    return (
        <TransactionContainer type={type}>
            <span>{date.split('/').slice(0,-1).join('/')}</span>
            <span>{title}</span>
            <span>{value.toFixed(2)}</span>
        </TransactionContainer>
    );
}

const TransactionContainer = styled.li`
    width: 100%;
    height: auto;
    min-height: 40px;
    font-size: 16px;
    font-weight: 400;
    display: flex;
    align-items: center;
    padding: 5px 80px 5px 0px;
    position: relative;
    span:nth-of-type(1) {
        margin-right: 12px;
        color: #C6C6C6;
    }
    span:nth-of-type(2) {
        color: #000000;
        word-break: break-all;
    }
    span:nth-of-type(3) {
        position: absolute;
        right: 0px;
        color:${props => (props.type==='+')?'#03AC00':'#C70000'};
    }
`;