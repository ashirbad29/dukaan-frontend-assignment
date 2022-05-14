import Navbar from './components/Navbar';

function App() {
  return (
    <div className="relative min-h-screen bg-black-lightest">
      <div className="absolute left-0 right-0 top-0 z-0 h-80 bg-primary" />
      <Navbar />
    </div>
  );
}

export default App;
