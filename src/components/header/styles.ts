import styled from 'styled-components';

export const Container = styled.header `
    border: 2px solid #212D47;
    border-radius: 30px;
    margin: 20px;
    margin-left: 70px; 
    padding: 10px;
    gap: 16px;
    display: flex;
    align-items: center;
`
export const Content = styled.header `
    padding: 10px;
    gap: 16px;
    display: flex;
    align-items: center;
    
     &:hover {
    background-color: #4338ca; 
    transition: background-color 0.3s ease;
  }

`
