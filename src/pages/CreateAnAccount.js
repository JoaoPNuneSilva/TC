import React from 'react';
import "./CreateAnAccount.css";
import { Link } from 'react-router-dom';

const CreateAnAccount = () => {
  return (
    <div className="login-container">

      <div className="purple-box">
        <div className="logo-acidentes">
          <img src="/logo branca.png" alt="LogoAcidentes" height={300}/>
        </div>
      </div>

      <div className="black-box">
      <p className="login-text">Crie sua conta</p>

        <div className="gray-box">
          <div className="input-container">
            <label className="white-text">Nome de usuário:</label>
            <input type="text" className="input-field" />
          </div>

          <div className="input-container">
            <label className="white-text">Senha:</label>
            <input type="password" className="input-field" />
          </div>

          <div className="input-container">
            <label className="white-text">E-mail:</label>
            <input type="text" className="input-field" />
          </div>

          <div className="idadesexo-container">

            <div className= "idade">
              <label className="white-text">Idade:</label>
              <input type="integer" className="input-idade" />
            </div>

            <div className='sexo'>

              <div className='frase-sexo'>
                <label className="white-text">Sexo:</label>
              </div>
              
              <div className='opcoes'>

                <div className="masculino">
                  <label className="white-text">
                    <input type="radio" name="sexo" value="masculino"/>
                    Masculino
                  </label>
                </div>

                <div className="feminino">
                  <label className="white-text">
                    <input type="radio" name="sexo" value="feminino" />
                    Feminino
                  </label>
                </div>

              </div>
              
            </div>

          </div>

          <div className="input-container">
            <label className="white-text">Sobre você:</label>
            <input type="text" className="input-field" />
          </div>

          <div className="input-container">
          <label className="white-text">Escolha uma foto para o perfil</label>
          <input type="file" accept="image/jpeg" />
          </div>

          <div className="input-container">
          <label className="white-text">Escolha uma foto de capa</label>
          <input type="file" accept="image/jpeg" />
          </div>

          <p className="forgot-password">Esqueceu sua senha?</p>
          <button className="purple-button">CADASTRAR</button>
          <p className="create-account">Não possui conta? <Link to ="/CreateAnAccount">CRIE UMA</Link></p>
        </div>
        <p className="credits">Criado por João Pedro Nunes da Silva & Matheus Batista Rosignol</p>
      </div>
      
    </div>
  );
};

export default CreateAnAccount;