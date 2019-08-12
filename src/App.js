import React from 'react';
import { Container, Row, Column } from './styles';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Column mobile='6' tablet='12' desktop ='6'>Mobile 6 / tablet 12 / desktop 6</Column>
          <Column mobile='6' tablet='6' desktop ='6'>Mobile 6 / tablet 6 / desktop 6</Column>
          <Column mobile='12' tablet='6' desktop ='12'>Mobile 12 / tablet 6 / desktop 6</Column>
        </Row>
      </Container>
    </div>
  );
}

export default App;
