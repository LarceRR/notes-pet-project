import { Rate } from 'antd';
import React from 'react';

interface StarsProps {
    amount: number
}

const PriorityStart = ({ amount }: StarsProps) => {
    return (
        <Rate disabled defaultValue={amount} style={{color: 'black'}}/>
    )
};

export default PriorityStart;