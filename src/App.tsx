import Footer from './components/Fotter';
import Navbar from './components/Navbar';
import SlogansContainer from './components/SlogansContainer';
import { otherProductsData, promotionData } from './data';

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
      <section className="mt-20 bg-primary/5 py-16">
        <div className="container flex flex-wrap gap-8 px-4 md:px-0">
          {promotionData.map((item, idx) => (
            <div
              key={item.label}
              className="flex min-w-[300px] flex-1 flex-col items-center">
              <item.icon />
              <span
                className={`mt-5 block text-xl font-medium text-black-dark ${
                  idx === 2 && 'mt-1'
                }`}>
                {item.label}
              </span>
              <p className="text-center text-black-light">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mt-20 px-4 md:px-0">
        <h2 className="mb-12 text-4xl font-bold text-black-dark">
          Try our other free products
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {otherProductsData.map((product) => (
            <div key={product.label}>
              <img src={product.image} alt={product.label} className="w-full" />
              <span className="mt-4 inline-block text-xl font-medium text-black-dark">
                {product.label}
              </span>
              <p className="mt-1 text-black-light">{product.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
