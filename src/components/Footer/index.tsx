import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
  FaEnvelope,
} from "react-icons/fa";
import Button from "../Button";

export default function Footer() {
  return (
    <footer className="relative mx-auto max-w-[1440px] bg-base h-full pt-48 px-10 mt-48">

      <section className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2  mx-auto py-10 w-full max-w-[350px] sm:max-w-[600px] lg:max-w-[1240px] rounded-2xl bg-black sm:flex sm:justify-evenly items-center px-4">
        <p className="font-heading text-4xl lg:text-5xl text-neutral-100 text-center sm:text-pretty mb-5">
          STAY UPTO DATE ABOUT OUR
          <br />
          LATEST OFFERS
        </p>

        <div className="flex flex-col gap-5 ">
          {/* input */}
          <div className="flex gap-3 items-center w-full sm:w-[350px] bg-slate-100 h-12 rounded-[62px] px-5 py-3">
            <FaEnvelope color="gray" size="18px" />
            <input
              type="text"
              placeholder="Enter your email address"
              className="text-neutral-500 text-sm w-full px-2 py-2  outline-slate-900 "
            />
          </div>
          {/* subscribe */}
          <div className="h-12 w-full">
            <Button
              type="white"
              text="Subscribe to Newsletter"
              fullWidth={true}
              fullHeight={true}
            />
          </div>
        </div>
      </section>

      <section className="lg:flex justify-between ">
        <div className="flex flex-col gap-5 mb-7">
          <p className="text-xl md:text-3xl font-bold font-heading ">
            TRENDIFY
          </p>
          <p className="text-sm text-neutral-600">
            We have clothes that suits your style and <br />
            which you’re proud to wear. From women to men.
          </p>
          <div className="flex gap-2">
            <FaTwitterSquare size={28} />
            <FaFacebookSquare size={28} />
            <FaInstagramSquare size={28} />
            <FaGithubSquare size={28} />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-4 md:gap-16">
          {/* Menu */}
          <div>
            <h3 className="font-semibold mb-5"> COMPANY </h3>
            <ul className="text-neutral-600 space-y-2 cursor-pointer">
              <li className="hover:underline">About</li>
              <li className="hover:underline">Features</li>
              <li className="hover:underline">Works</li>
              <li className="hover:underline">Career</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-5 "> HELP</p>
            <ul className="text-neutral-600 space-y-2 cursor-pointer">
              <li className="hover:underline">Customer Support</li>
              <li className="hover:underline"> Delivery Details</li>
              <li className="hover:underline"> Terms & Conditions </li>
              <li className="hover:underline">Privacy Policy </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-5 "> FAQ </p>
            <ul className="text-neutral-600 space-y-2 cursor-pointer">
              <li className="hover:underline">Account</li>
              <li className="hover:underline"> Manage Deliveries</li>
              <li className="hover:underline"> Orders </li>
              <li className="hover:underline">Payments </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-5 "> RESOURCES </p>
            <ul className="text-neutral-600 space-y-2 cursor-pointer">
              <li className="hover:underline">Free eBooks</li>
              <li className="hover:underline"> Development Tutorial</li>
              <li className="hover:underline"> Hot to - blog </li>
              <li className="hover:underline"> Youtube Playlist </li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="my-2" />

      <p className="text-neutral-600 text-sm ">
        Trendify.ca © 2000-2023, All Rights Reserved
      </p>
    </footer>
  );
}
