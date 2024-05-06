import { Header } from "./components/header";
import { ParticipanteList } from "./components/participante-list";

export function App() {
  return (
    <div className="2xl:max-w-[1216px] lg:px-10 2xl:px-0 2xl:mx-auto py-5 flex flex-col gap-5">
      <Header />
      <ParticipanteList />
    </div>
  )
}