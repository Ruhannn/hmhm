
import { useState, useEffect, useRef } from 'react';

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartRef = useRef(null);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={cartRef}>
      <button className="text-white" onClick={toggleCart}>
        🛒
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-md">
          {/* Cart items go here */}
          <div className="p-2">
            {/* Example item */}
            <div className="flex justify-between items-center mb-2">
              <span>Product Name</span>
              <span>$20.00</span>
            </div>

            {/* Add more items as needed */}
          </div>

          {/* Cart total */}
          <div className="flex justify-between items-center bg-gray-200 p-2">
            <span>Total:</span>
            <span>$50.00</span>
          </div>

          {/* Checkout button */}
          <button className="w-full bg-blue-500 text-white p-2 rounded-b-lg">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
