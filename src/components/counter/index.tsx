import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/actions";
import { getCount } from "../../redux/selectors";
import {
  AddSubtractButton,
  CounterContainer,
  CounterDisplay,
} from "./index.styles";

const Counter: React.FC = () => {
  const count = useSelector(getCount);
  const dispatch = useDispatch();

  const _handleIncrement = () => {
    dispatch(increment());
  };

  const _handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <CounterContainer>
      <AddSubtractButton
        color='primary'
        variant='contained'
        onClick={_handleDecrement}
      >
        -
      </AddSubtractButton>
      <CounterDisplay variant='outlined'>{count}</CounterDisplay>
      <AddSubtractButton
        color='primary'
        variant='contained'
        onClick={_handleIncrement}
      >
        +
      </AddSubtractButton>
    </CounterContainer>
  );
};

export default Counter;
