import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";

import Newsletter from "../Newsletter";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1440px] flex justify-around items-center bg-base py-10">
      {/* <Newsletter/> */}

      <div className="grid grid-cols-1 gap-5 md:w-[230px]">
        <p className="text-xl md:text-3xl font-bold font-heading ">TRENDIFY</p>
        <p className="text-sm text-neutral-600">
          We have clothes that suits your style and which you’re proud to wear.
          From women to men.
        </p>
        <div className="flex gap-1">
          <FaTwitterSquare size={28} />
          <FaFacebookSquare size={28} />
          <FaInstagramSquare size={28} />
          <FaGithubSquare size={28} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5">
        <h3 className="font-semibold tracking-wider"> COMPANY </h3>
        <ul className="text-neutral-600 space-y-2">
          <li>About</li>
          <li>Features</li>
          <li>Works</li>
          <li>Career</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-5">
        <h3 className="font-semibold tracking-wider"> HELP</h3>
        <ul className="text-neutral-600 space-y-2">
          <li>Customer Support</li>
          <li> Delivery Details</li>
          <li> Terms & Conditions </li>
          <li> Privacy Policy </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-5">
        <h3 className="font-semibold tracking-wider"> FAQ</h3>
        <ul className="text-neutral-600 space-y-2">
          <li>Account</li>
          <li>Manage Deliveries</li>
          <li>Orders</li>
          <li>Payments</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-5">
        <h3 className="font-semibold tracking-wider"> RESOURCES</h3>
        <ul className="text-neutral-600 space-y-2">
          <li>Free eBooks</li>
          <li>Development Tutorial</li>
          <li> How to -Blog </li>
          <li> Youtube playlist </li>
        </ul>
      </div>
    </footer>
  );
}
