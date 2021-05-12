import { VscHome } from "react-icons/vsc";

export default function Sidebar() {
  return (
    <nav>
      <ul>
        <li>
          <VscHome />
          Inicio
        </li>
        <li>Programas</li>
        <li>Archivos</li>
      </ul>
    </nav>
  );
}
