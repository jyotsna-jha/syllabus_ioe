import styled from 'styled-components';


const SyllabusTable = styled.table`
  border-collapse: collapse;
  width: 98%;
  margin: 20px auto;
  padding: 10px;

  
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
    font-family:Dm sans;
    color:#636e72;
  }


  th {
    background-color: #f2f2f2;
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
    font-family:Dm sans;
    color:black;
    
  }
`;

const NavigationButton = styled.button`

  border: none;
  background: ${({ isActive }) => (isActive ? '#0652DD' : 'none')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#777777')};
  cursor: pointer;
  font-weight: bold;
  padding:10px 40px;

  margin-right: 10px;
`;


const Heading = styled.h1`
  margin-left: 28px;
  font-family: sans-serif;
  display: flex;
  align-items: center;
`;






export { SyllabusTable, NavigationButton,Heading };


