import Link from "next/link";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div>
        <Link
          href={"/"}
          className="text-xl tablet:text-3xl font-bold font-heading cursor-pointer"
        >
          {" "}
          SHOP.CO{" "}
        </Link>
        <p>
          We have clothes that suits your style and which you’re proud to wear.
          From women to men.
        </p>
        <div>
          <FaTwitterSquare />
          <FaFacebookSquare />
          <FaInstagramSquare />
          <FaGithubSquare />
        </div>
      </div>

      <div>
        <h3> COMPANY </h3>
        <ul>
          <li>About</li>
          <li>Features</li>
          <li>Works</li>
          <li>Career</li>
        </ul>
      </div>

      <div>
        <h3> HELP</h3>
        <ul>
          <li>Customer Support</li>
          <li> Delivery Details</li>
          <li> Terms & Conditions </li>
          <li> Privacy Policy </li>
        </ul>
      </div>

      <div>
        <h3> FAQ</h3>
        <ul>
          <li>Account</li>
          <li>Manage Deliveries</li>
          <li>Orders</li>
          <li>Payments</li>
        </ul>
      </div>

      <div>
        <h3> RESOURCES</h3>
        <ul>
          <li>Free eBooks</li>
          <li>Development Tutorial</li>
          <li> How to -Blog </li>
          <li> Youtube playlist </li>
        </ul>
      </div>
    </>
  );
}
