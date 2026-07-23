import "./Login.css";

import { LoginHero, LoginForm } from "./components";

function Login()
  
 {
  
  
  return (
    <main className="login">
      <div className="container">
        <div className="login__wrapper">

          <section className="login__hero">
            <LoginHero />
          </section>

          <section className="login__form">
            <LoginForm />
          </section>

          

        </div>
      </div>
    </main>
  );
}

export default Login;

