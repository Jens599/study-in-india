import { HeroBanner } from "../components";
import {
  homeInHand,
  meritBasedScholarship,
  meritBasedScholarshipIcon,
  scholarshipBanner,
  stipend,
  stipendIcon,
  studentFreeShip,
  studentFreeShipIcon,
} from "../assets";

const Scholarship = () => {
  return (
    <>
      <HeroBanner title="Scholarship" image={scholarshipBanner} />

      <div className="font-black">
        <div className="my-16 flex flex-col items-center justify-center gap-20 xl:flex-row">
          <div className="flex max-w-lg flex-col gap-4 rounded-2xl bg-green-900/30 px-9 py-8">
            <img
              src={studentFreeShip}
              alt="Student Free Ship"
              className="size-full rounded-2xl"
            />
            <div className="flex items-start justify-center gap-9">
              <img
                src={studentFreeShipIcon}
                alt="Student Free Ship Icon"
                className="size-16"
              />
              <div className="">
                <div className="">
                  <h2 className="text-2xl">Student Free Ship</h2>
                </div>
                <div className="text-text-gray line-clamp-3 xl:line-clamp-none">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </div>
          </div>

          <div className="flex max-w-lg flex-col gap-4 rounded-2xl bg-amber-100 px-9 py-8">
            <img
              src={stipend}
              alt="Stipend"
              className="size-full rounded-2xl"
            />
            <div className="flex items-start justify-center gap-9">
              <img src={stipendIcon} alt="Stipend" className="size-16" />
              <div className="">
                <div className="">
                  <h2 className="text-2xl">Stipend</h2>
                </div>
                <div className="text-text-gray line-clamp-3 xl:line-clamp-none">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-16 flex flex-col items-center justify-center gap-20 xl:flex-row">
          <div className="flex items-start justify-center gap-9">
            <img
              src={meritBasedScholarshipIcon}
              alt="Merit Based Scholarship Icon"
              className="size-16"
            />
            <div className="">
              <div className="">
                <h2 className="text-2xl">Merit Based Scholarship</h2>
              </div>
              <div className="text-text-gray line-clamp-3 max-w-[50ch] xl:line-clamp-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </div>
            </div>
          </div>

          <div className="max-w-xl">
            <img
              src={meritBasedScholarship}
              alt="Merit Based Scholarship"
              className="size-full rounded-2xl"
            />
          </div>
        </div>

        <div className="mx-78.75 flex gap-4 rounded-2xl bg-green-900/30 px-9 py-8">
          <div className="max-w-xl">
            <img
              src={homeInHand}
              alt="Home In Hand"
              className="size-full rounded-2xl"
            />
          </div>

          <div className="my-auto flex items-start justify-center gap-9">
            <img src={stipendIcon} alt="Stipend" className="size-16" />
            <div className="">
              <div className="">
                <h2 className="text-2xl">&nbsp;</h2>
              </div>
              <div className="text-text-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Scholarship;
