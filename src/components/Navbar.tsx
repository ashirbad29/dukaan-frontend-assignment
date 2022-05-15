import Button from './Button';

const Navbar = () => {
  return (
    <nav className="container relative z-10 flex justify-between px-5 py-5 sm:px-0">
      <img src="/logo-white.svg" alt="Dukaan logo" />
      <div className="flex items-center">
        <button className="mr-8 text-white transition-all hover:underline">
          Sign in
        </button>
        <Button variant="secondary">Dukaan for PC</Button>
      </div>
    </nav>
  );
};

export default Navbar;
