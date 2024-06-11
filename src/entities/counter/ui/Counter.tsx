import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@/app/store';
import {decrement, increment, incrementByAmount} from '../model/counterSlice';

export const Counter: React.FC = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <span>{count}</span>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
            <button onClick={() => dispatch(incrementByAmount(5))}>
                Increment by 5
            </button>
        </div>
    );
};
