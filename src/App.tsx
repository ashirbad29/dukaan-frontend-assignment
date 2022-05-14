import Navbar from './components/Navbar';
import SlogansContainer from './components/SlogansContainer';

function App() {
  return (
    <div className="relative min-h-screen bg-black-lightest font-default">
      <div className="absolute left-0 right-0 top-0 z-0 h-80 bg-primary" />
      <Navbar />
      <div className="relative pt-12">
        <div className="container rounded-lg bg-white shadow-subtle">
          <section className="mx-auto max-w-3xl px-6 py-16">
            <h1 className="mb-4 text-4xl font-bold leading-10 text-black-dark">
              Free Slogan Maker
            </h1>
            <p className="mb-6 text-xl font-normal text-black-light">
              Simply enter a term that describes your business, and get up to 1,000
              relevant slogans for free.
            </p>
            <SlogansContainer />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
