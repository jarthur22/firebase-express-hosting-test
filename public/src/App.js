import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import PersonList from './components/home/PersonList';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <div>
      <Header/>
      <main className="py-3">
        <Container>
          <h1>FERN+M Template</h1>
          <PersonList />
        </Container>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
