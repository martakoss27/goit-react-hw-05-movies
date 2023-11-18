import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  padding-bottom: 16px;
  border-bottom: 1px solid black;
`;

export const Article = styled.article`
  padding-left: 10px;
`;

export const StyledLi = styled.li`
  list-style-type: circle;
  padding-bottom: 15px;
  font-size: 20px;
  font-weight: 700;

  & :hover {
    color: white;
    background-color: navy;
    padding: 8px 4px;
    border-radius: 10px;
  }
`;

export const StyledLink = styled(Link)`
  background-color: orangered;
  border-radius: 28px;
  border: 1px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 17px;
  padding: 5px 10px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;
  margin-bottom: 10px;

  &:hover {
    background: linear-gradient(to bottom, #5cbf2a 5%, #44c767 100%);
    background-color: #5cbf2a;
  }
`;
