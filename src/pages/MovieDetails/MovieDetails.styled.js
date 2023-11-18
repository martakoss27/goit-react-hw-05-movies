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
    color: black;
    padding: 4px 4px;
    border-bottom: 2px solid black;
  }
`;

export const StyledLink = styled(Link)`
  background-color: #bf4f74;
  border-radius: 28px;
  border: none;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 17px;
  padding: 5px 10px;
  text-decoration: none;
  margin-bottom: 10px;

  &:hover {
    background-color: grey;
    color: black;
  }
`;
