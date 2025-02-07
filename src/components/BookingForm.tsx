import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { twMerge } from "tailwind-merge";
import { FaArrowRightLong } from "react-icons/fa6";

const schema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  emailAddress: z.string().email({ message: "Invalid email address" }),
  mobileNumber: z.string().min(1, { message: "Mobile number is required" }),
  university: z.string().min(3, { message: "Please select a university" }),
  planToStudy: z
    .string()
    .min(3, { message: "Please select what you plan to study" }),
  modeOfCounselling: z
    .string()
    .min(3, { message: "Please select counselling mode" }),
  fundEducation: z
    .string()
    .min(3, { message: "Please select how you will fund your education" }),
  preferredStudyLevel: z
    .string()
    .min(3, { message: "Please select your preferred study level" }),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and privacy policy",
  }),
  contactConsent: z.boolean(),
  marketingConsent: z.boolean(),
});

type BookingFormSchema = z.infer<typeof schema>;

const BookingForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<BookingFormSchema>({
    mode: "all",
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: BookingFormSchema) => {
    console.log(data);
  };

  console.log(watch("university"));

  return (
    <form
      className="mx-9 flex h-full flex-col justify-evenly gap-4 font-black"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-1 gap-x-10 gap-y-12 text-sm md:grid-cols-2 md:text-base">
        <div>
          <input
            type="text"
            id="firstName"
            placeholder="First Name*"
            {...register("firstName")}
            className="placeholder:text-text-gray w-full border-b p-2 focus:outline-none"
          />
          {errors.firstName && (
            <p className="mt-1 text-xs text-red-500">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div>
          <input
            type="text"
            id="lastName"
            placeholder="Last Name*"
            {...register("lastName")}
            className="placeholder:text-text-gray w-full border-b p-2 focus:outline-none"
          />
          {errors.lastName && (
            <p className="mt-1 text-xs text-red-500">
              {errors.lastName.message}
            </p>
          )}
        </div>

        <div>
          <input
            type="email"
            id="emailAddress"
            placeholder="Email Address*"
            {...register("emailAddress")}
            className="placeholder:text-text-gray w-full border-b p-2 focus:outline-none"
          />
          {errors.emailAddress && (
            <p className="mt-1 text-xs text-red-500">
              {errors.emailAddress.message}
            </p>
          )}
        </div>

        <div>
          <input
            type="tel"
            id="mobileNumber"
            placeholder="Mobile Number*"
            {...register("mobileNumber")}
            className="placeholder:text-text-gray w-full border-b p-2 focus:outline-none"
          />
          {errors.mobileNumber && (
            <p className="mt-1 text-xs text-red-500">
              {errors.mobileNumber.message}
            </p>
          )}
        </div>

        <div>
          <select
            id="university"
            {...register("university")}
            className={twMerge(
              watch("university") !== "-1" ? "text-black" : "text-text-gray",
              "w-full border-b p-2 focus:outline-none",
            )}
          >
            <option value="-1" hidden>
              Preferred University*
            </option>
            <option value="university1">University 1</option>
            <option value="university2">University 2</option>
            <option value="university3">University 3</option>
          </select>
          {errors.university && (
            <p className="mt-1 text-xs text-red-500">
              {errors.university.message}
            </p>
          )}
        </div>

        <div>
          <select
            id="planToStudy"
            {...register("planToStudy")}
            className={twMerge(
              watch("planToStudy") !== "-1" ? "text-black" : "text-text-gray",
              "w-full border-b p-2 focus:outline-none",
            )}
          >
            <option value="-1" hidden>
              What do you plan to study?*
            </option>
            <option value="engineering">Engineering</option>
            <option value="medicine">Medicine</option>
            <option value="business">Business</option>
            <option value="arts">Arts</option>
          </select>
          {errors.planToStudy && (
            <p className="mt-1 text-xs text-red-500">
              {errors.planToStudy.message}
            </p>
          )}
        </div>

        <div>
          <select
            id="modeOfCounselling"
            {...register("modeOfCounselling")}
            className={twMerge(
              watch("modeOfCounselling") !== "-1"
                ? "text-black"
                : "text-text-gray",
              "w-full border-b p-2 focus:outline-none",
            )}
          >
            <option value="-1" hidden>
              Mode of Counselling*
            </option>
            <option value="online">Online</option>
            <option value="inPerson">In Person</option>
            <option value="phone">Phone</option>
          </select>
          {errors.modeOfCounselling && (
            <p className="mt-1 text-xs text-red-500">
              {errors.modeOfCounselling.message}
            </p>
          )}
        </div>

        <div>
          <select
            id="fundEducation"
            {...register("fundEducation")}
            className={twMerge(
              watch("fundEducation") !== "-1" ? "text-black" : "text-text-gray",
              "w-full border-b p-2 focus:outline-none",
            )}
          >
            <option value="-1" hidden>
              How will you fund your education?*
            </option>
            <option value="selfFunded">Self Funded</option>
            <option value="scholarship">Scholarship</option>
            <option value="loan">Education Loan</option>
            <option value="family">Family Support</option>
          </select>
          {errors.fundEducation && (
            <p className="mt-1 text-xs text-red-500">
              {errors.fundEducation.message}
            </p>
          )}
        </div>

        <div className="md:col-span-2">
          <select
            id="preferredStudyLevel"
            {...register("preferredStudyLevel")}
            className={twMerge(
              watch("preferredStudyLevel") !== "-1"
                ? "text-black"
                : "text-text-gray",
              "w-full border-b p-2 focus:outline-none",
            )}
          >
            <option value="-1" hidden>
              Preferred Study Level*
            </option>
            <option value="undergraduate">Undergraduate</option>
            <option value="postgraduate">Postgraduate</option>
            <option value="phd">PhD</option>
          </select>
          {errors.preferredStudyLevel && (
            <p className="mt-1 text-xs text-red-500">
              {errors.preferredStudyLevel.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="mb-3 text-sm md:text-base">
          We will not share your details with others without your permission:
        </h2>

        <label className="flex items-start gap-2">
          <input
            type="checkbox"
            {...register("termsAccepted")}
            className="mt-1"
          />
          <span className="text-text-gray text-xs md:text-sm">
            I agree to Study In India Terms and Privacy Policy
          </span>
        </label>
        {errors.termsAccepted && (
          <p className="text-xs text-red-500">{errors.termsAccepted.message}</p>
        )}

        <label className="flex items-start gap-2">
          <input
            type="checkbox"
            {...register("contactConsent")}
            className="mt-1"
          />
          <span className="text-text-gray text-xs md:text-sm">
            Please contact me by phone, email or SMS to assist with my enquiry
          </span>
        </label>

        <label className="flex items-start gap-2">
          <input
            type="checkbox"
            {...register("marketingConsent")}
            className="mt-1"
          />
          <span className="text-text-gray text-xs md:text-sm">
            I would like to receive updates and offers from Study In India
          </span>
        </label>

        <button
          type="submit"
          className="bg-primary-green mt-3 flex w-fit items-center justify-center gap-2 rounded-full border-2 px-6 py-3 text-sm text-white md:px-8 md:py-4 md:text-base"
        >
          BOOK YOUR SEAT <FaArrowRightLong />
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
