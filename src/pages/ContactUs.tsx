import { Map, Marker } from "pigeon-maps";
import contactUsImage from "../assets/contactUs.jpg";
import { BookingForm, HeroBanner } from "../components";
import cardBG from "../assets/cardBG.jpg";
import {
  PiEnvelopeSimple,
  PiMapTrifoldLight,
  PiPhoneListThin,
} from "react-icons/pi";

const ContactUs = () => {
  const { x, y } = { x: 27.741493705530218, y: 85.33139438850685 };

  return (
    <>
      <HeroBanner title="Contact Us" image={contactUsImage} />

      <div className="my-16 flex flex-col gap-16">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-lg font-black xl:text-[2.375rem]">
            Get In Touch With Us
          </h1>
          <h3 className="text-text-gray max-w-[63ch] text-center text-sm font-black xl:text-lg">
            Please leave a message if you have any question or experiencing any
            difficulty using our webs.
          </h3>
          <div className="bg-accent-red h-1 w-20"></div>
        </div>

        <div className="flex flex-col items-center justify-center xl:flex-row">
          <div className="max-w-[645px] bg-neutral-200 px-14 py-20">
            <BookingForm />
          </div>
          <div className="relative isolate flex h-[373px] w-[644px] scale-50 items-center font-black text-white md:scale-100">
            <div className="ml-14 flex flex-col">
              <h2 className="text-4xl">Contact Details</h2>
              <div className="">
                <PiPhoneListThin /> xx-xxxxxxxx
              </div>
              <div className="">
                <PiEnvelopeSimple /> contact@studyindia.com.np
              </div>
              <div className="">
                <PiMapTrifoldLight />
                SCO - 252/545 <br /> New Baneswor, <br /> Kathmandu, 160022
              </div>
            </div>
            <img
              src={cardBG}
              alt="cardBG"
              className="absolute inset-0 -z-10 object-cover"
            />
          </div>
        </div>
      </div>

      <Map height={300} defaultCenter={[x, y]} defaultZoom={18}>
        <Marker width={50} anchor={[x, y]} />
      </Map>
    </>
  );
};

export default ContactUs;
