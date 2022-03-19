import { ButtonGroup, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostData } from "../../redux/actions";
import { getData } from "../../redux/selectors";
import { FetchButton, ThunkContainer } from "./index.styles";

const ThunkComponent: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector(getData);

  const _onClickHandler = () => {
    dispatch(getPostData({ id: 1 }));
  };
  return (
    <ThunkContainer>
      <Typography variant='h5'>{data.title}</Typography>
      <Typography variant='body2'>{data.body}</Typography>

      <ButtonGroup>
        <FetchButton
          color='primary'
          variant='contained'
          onClick={_onClickHandler}
        >
          Get Data
        </FetchButton>
      </ButtonGroup>
    </ThunkContainer>
  );
};

export default ThunkComponent;
