import React from 'react';

import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';
import FormSignIn from '../../../components/FormSignIn';

import { SectionComponent } from './styles';

const Login: React.FC = () => {
  return(
    <>
    <NavBar />
    <div className="container">
      <SectionComponent>
        <FormSignIn />
      </SectionComponent>
    </div>
    <Footer/>
    </>
  );
}

export default Login;