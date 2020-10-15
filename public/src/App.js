import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <div>
      <Header/>
      <main className="py-3">
        <Container>
          FERN+M Template
        </Container>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
