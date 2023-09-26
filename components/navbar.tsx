// Componente Navbar.js
function Navbar() {
    return (
      <nav className="bg-blue-500 text-white p-4 shadow-lg">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="text-lg font-semibold">
              CES-26
            </div>
            <div>
              <a href="#about" className="hover:text-gray-300 px-2">Sobre</a>
              <a href="#contact" className="hover:text-gray-300 px-2">Contato</a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  