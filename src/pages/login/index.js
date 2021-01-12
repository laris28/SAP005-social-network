import { loginWithGoogle, login } from '../../services/index.js';

export const Login = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
    <div class="login-form" 
      <form id="login">
        <h1 class="title">PetLovers</h1>
        <h2 class="intro-phrase">A rede social do seu pet</h2>
        <h2>Acesse sua conta</h2>
        <label class="e-mail">E-mail</label> 
        <input id="registered-email" type="e-mail" placeholder="Digite o e-mail cadastrado" required>
        <label class="password">Senha</label>
        <input id="registered-password" type="password" placeholder="Digite sua senha" required>
        <input type="button" id="login-btn" value="Entrar">
        <p class="login-google">Entre com</p>
        <button class="google" id="google-btn"><img class="img-g"  src="../../img/google.jpg" alt="logo-google"></button>
        <p>Não tem conta? <a href="/registro">Cadastre-se</a></p>
      </form>  
    </div>    
  `;

    //LOGIN COM E-MAIL E SENHA

    const loginButton = rootElement.querySelector('#login-btn');
      loginButton.addEventListener('click', (event) => {
      event.preventDefault();  
      const email = rootElement.querySelector('#registered-email').value
      const password = rootElement.querySelector('#registered-password').value
      login(email, password);
    });

    //AUTENTICAÇÃO COM GOOGLE

    const googleButton = rootElement.querySelector('#google-btn');
      googleButton.addEventListener('click', (event) => {
      event.preventDefault();  
      loginWithGoogle();
    });

  return rootElement;
};








































