import './App.css';
import StyledComponent from './StyledComponent';
import Button1 from './components/Button1';
import Button2 from './components/Button2';
// import styled, {css} from 'styled-components';
import TailwindComponent from './TailwindComponent';
/*
const Container = styled.div`
  display:flex;
`;

const Button = styled.button`
  backgound: transparent;
  border-radius: 3px;
  border: 2px solid #3c5b69;
  color: #b9eaff;
  margin : 0 1rem;
  padding : 0.25em 1em;
  ${(props) => 
    props.primary &&
    css`
      background: #009cd5;
      color: white;
    `};
`;
*/

function App() {
  return (
    <>
      <TailwindComponent/>
    </>
  );
}

export default App;