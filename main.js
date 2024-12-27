import './style.css'

document.querySelector('#app').innerHTML = `
  <header>
    <nav>
      <div class="logo">
        <h2>Lucas Moraes</h2>
      </div>
      <div class="nav-links">
        <a href="#sobre">Sobre mim</a>
        <a href="#portfolio">Meu portfólio</a>
        <a href="#contato">Contato</a>
      </div>
    </nav>
  </header>

  <main>
    <section class="hero">
      <h1>Olá, sou Lucas Moraes</h1>
      <div class="profile-image">
        <img src="./imagens/lucas.jpg" alt="Lucas Moraes">
      </div>
      <p>Estudante de Análise e Desenvolvimento de Sistemas</p>
    </section>

    <section class="tech-grid">
      <div class="tech-card">
        <i class="fas fa-code"></i>
        <h3>Desenvolvimento Web</h3>
        <p>HTML, CSS, JavaScript</p>
      </div>
      <div class="tech-card">
        <i class="fas fa-database"></i>
        <h3>Banco de Dados</h3>
        <p>SQL, MongoDB</p>
      </div>
      <div class="tech-card">
        <i class="fas fa-mobile-alt"></i>
        <h3>Desenvolvimento Mobile</h3>
        <p>React Native</p>
      </div>
    </section>
  </main>

  <footer>
    <p>© 2024 - Todos os direitos reservados</p>
    <p>Criado por Lucas Moraes</p>
  </footer>

  <a href="https://wa.me/5512992126779" class="whatsapp-float" target="_blank">
    <i class="fab fa-whatsapp"></i>
  </a>
`