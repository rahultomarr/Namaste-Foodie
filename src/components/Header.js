import { LOGO_URL } from "../utlis/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utlis/useOnlineStatus";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const onlineStatus = useOnlineStatus();

  //Subscribing to the store using Seletor
  const cartItems = useSelector((store)=>store.cart.items);
  // console.log(cartItems)

  return (
    <header className="bg-gradient-to-r from-red-600 to-red-400 shadow-lg px-4 py-3">
      <div className="flex justify-between items-center">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-3">
          <img src={LOGO_URL} alt="Logo" className="w-12 rounded-full" />
          <h1 className="text-lg sm:text-xl font-bold text-black">Namaste Foodie</h1>
        </div>

        <button
          className="sm:hidden text-2xl text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>

        <nav className="hidden sm:flex items-center space-x-6 text-gray-800 font-medium">
          <span>Online Status: {onlineStatus ? "✅" : "❌"}</span>
          <Link to="/" className="hover:text-blue-700">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-700">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-700">
            Contact
          </Link>
          <Link to="/grocery" className="hover:text-blue-700">
            Grocery
          </Link>
          <Link to="/cart" className="hover:text-blue-700 font-bold flex">
            <FaCartShopping className="content-center size-7"/>({cartItems.length})
          </Link>
          <button
            className="ml-4 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
            onClick={() => setbtnName(btnName === "Login" ? "Logout" : "Login")}
          >
            {btnName}
          </button>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden flex flex-col items-start mt-4 space-y-3 text-gray-700 font-medium">
          <span>Online Status: {onlineStatus ? "✅" : "❌"}</span>
          <Link to="/" className="hover:text-blue-700">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-700">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-700">
            Contact
          </Link>
          <Link to="/grocery" className="hover:text-blue-700">
            Grocery
          </Link>
          <Link to="/cart"className="hover:text-blue-700">Cart</Link>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            onClick={() => setbtnName(btnName === "Login" ? "Logout" : "Login")}
          >
            {btnName}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
