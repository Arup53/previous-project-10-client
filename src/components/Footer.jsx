import { Typewriter } from "react-simple-typewriter";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className="min-h-[400px] bg-no-repeat bg-cover bg-[url('/footer-back.jpg')] py-12">
      <div className="text-center text-2xl text-white my-2 ">FundSpring</div>
      <div>
        <p className="text-center tex-sm text-white ">
          Spread
          <span className="px-2">
            <Typewriter
              words={["Kindness", "Compassion", "Hope"]}
              loop={false}
            />
          </span>
        </p>
      </div>

      <div className=" flex flex-col  md:flex-row justify-center items-center gap-6   md:px-20  min-h-[400px]  text-white ">
        <div></div>
        <div className=" grid grid-cols-1 md:grid-cols-2 ">
          <div className=" ">
            <p className="text-lg">Sections</p>
            <p>Home</p>
            <p>Campaigns</p>
            <p>Login</p>
            <p>Register</p>
          </div>
          <div className=" flex flex-col gap-2 text-sm my-6 ">
            <p className="text-lg">Address</p>
            <p>6th street, Walton Avenue</p>
            <p>New York, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
