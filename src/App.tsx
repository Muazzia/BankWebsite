import Hero from "./components/Hero";
import Info from "./components/Info";

function App() {
  return (
    <>
      <div className="bg-mBg">
        <Hero />
        <div className="wrapper1 overflow-hidden max-w-[300px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[1000px] mx-auto pt-[180px]">
          <Info />
        </div>
      </div>
    </>
  );
}

export default App;
