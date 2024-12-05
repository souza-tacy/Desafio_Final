import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Inicio from '../../pages/inicio/inicio';
import LivrosDoados from '../../pages/livrosDoados/livrosDoados';
import QueroDoar from '../../pages/queroDoar/queroDoar';
import logo from '../../assets/logo.png';
import lupa from '../../assets/lupa.png';
import s from './header.module.scss';

export default function Header() {
  return (
    <BrowserRouter>
      <header className={s.header}>
        {/* Aqui na header colocamos uma className para evitar de haver conflitos futuramente. */}
        <section className={s.boxLogo}>
          <img src={logo} alt="ilustração de um livro aberto com capa azul"/>
          <h1>Livros Vai na Web</h1>
        </section>
        <nav className={s.boxMenu}>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/livrosdoados">Livros Doados</Link></li>
            <li><Link to="/querodoar">Quero Doar</Link></li>
          </ul>
        </nav>
        <div className={s.boxInput}>
            <input type="text" placeholder="O que você procura?"/>
            <img src={lupa} alt="Icone de lupa branca" />
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/livrosdoados" element={<LivrosDoados />} />
        <Route path="/querodoar" element={<QueroDoar />} />
      </Routes>
    </BrowserRouter>
  );
}
