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
        <input type="button" id="btn-login" value="Entrar">
        <p class="login-google">Entre com</p>
        <button class="google" id="btn-google"><img class="img-g"  src="../../img/google.jpg" alt="logo-google"></button>
        <p>Não tem cadastro? <a href="/registro">Cadastre-se</a></p>
      </form>  
    </div>    
  `;

    //LOGIN COM E-MAIL E SENHA

    const loginButton = rootElement.querySelector('#btn-login');
      loginButton.addEventListener('click', (event) => {
      event.preventDefault();  
      const email = rootElement.querySelector('#registered-email').value
      const password = rootElement.querySelector('#registered-password').value
      login(email, password);
      window.location.href = '/time-line';
    });

    //AUTENTICAÇÃO COM GOOGLE

    const googleButton = rootElement.querySelector('#btn-google');
      googleButton.addEventListener('click', (event) => {
      event.preventDefault();  
      loginWithGoogle();
      window.location.href = '/time-line';
    });

  return rootElement;
};








































