import './App.scss'
import Logo from './images/logo.svg'
import Illustration from './images/illustration-mockups.svg'

function App() {
  return (
    <>
      <header>
        <img src={Logo} alt="Logo" />
      </header>
      <main>
        <img src={Illustration} alt="Illustration" />
        <section>
          <h1>Build The Community Your Fans Will Love</h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button>Register</button>
        </section>
      </main>
      <footer>
        <div className="icon">
          <i class="fa-brands fa-facebook-f"></i>
        </div>
        <div className="icon">
          <i class="fa-brands fa-twitter"></i>
        </div>
        <div className="icon">
          <i class="fa-brands fa-instagram"></i>
        </div>
      </footer>
    </>
  )
}

export default App
