import "./Register.css";

import {
  RegisterHero,
  RegisterForm,
} from "./components";

function Register() {
  return (
    <main className="register">
      <div className="container">
        <div className="register__wrapper">

          <section className="register__hero">
            <RegisterHero />
          </section>

          <section className="register__form">
            <RegisterForm />
          </section>

        </div>
      </div>
    </main>
  );
}

export default Register;