import webbLogo from '/assets/webb-logo.svg';
import { NavLink } from './nav-link';

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img className='size-8 rounded-lg' src={webbLogo} alt="Webb Icon" />

      <nav className="flex items-center gap-5">
        <NavLink classe={"opacity-60"} href="/eventos">Eventos</NavLink>
        <NavLink classe='' href="/participantes">Participantes</NavLink>
      </nav>
    </div>
  );
}