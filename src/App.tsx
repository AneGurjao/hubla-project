// import "./App.css";
import  FileInput  from "./components/FileInput";
import Logo from "./assets/img.png";
import  Header  from "./components/Header";

export default function App() {
  return (
    <>
      <header>
        <img src={Logo} alt="Logo" />
      </header>
      <div className="content">
        <Header />
        <form>
          <FileInput />
        </form>
      </div>
    </>
  );
}
