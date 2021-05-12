import Header from "./layouts/Header";
import ParentContainer from "./layouts/ParentContainer";
import Sidebar from "./layouts/Sidebar";
import Home from "./pages/Home";

export default function App() {
  return (
    <ParentContainer>
      <Header />
      <Sidebar />
      <Home />
    </ParentContainer>
  );
}
