import React from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-container">

      <div className="purple-box">
        <div className="logo-acidentes">
          <img src="/logo branca.png" alt="LogoAcidentes" height={300}/>
        </div>
      </div>

      <div className="black-box">
      <p className="login-text">Faça login ae!</p>

        <div className="gray-box">
          <div className="input-container">
            <label className="white-text">Nome de usuário:</label>
            <input type="text" className="input-field" />
          </div>

          <div className="input-container">
            <label className="white-text">Senha:</label>
            <input type="password" className="input-field" />
          </div>

          <p className="forgot-password">Esqueceu sua senha?</p>
          <button className="purple-button">ENTRAR</button>
          <p className="create-account">Não possui conta? <Link to ="/CreateAnAccount">CRIE UMA</Link></p>
        </div>
        <p className="credits">Criado por João Pedro Nunes da Silva & Matheus Batista Rosignol</p>
      </div>
      
    </div>
  );
};

export default Login;
