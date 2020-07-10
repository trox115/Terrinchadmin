import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import NavBar from './components/Navigation';
import Dashboard from './components/Home/Dashboard'
function App() {
  return (
    
<>
    < NavBar />
      <Container>
        <Row>
    <Route>
    <Switch>
    <Route exact path="/" component={Dashboard} />
    </Switch>
    </Route>
        </Row>
    </Container>
    </>
  );
}

export default App;
