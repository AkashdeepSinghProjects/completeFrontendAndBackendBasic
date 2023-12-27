import Header from "./components/Header";
import Time from "./components/Time";
import Timer from "./components/Timer";

function App() {
  return (
    <>
      <Header />
      <div id="modal"></div>
      <Time className="mx-auto text-3xl flex justify-end" />
      <Timer />
    </>
  );
}

export default App;
