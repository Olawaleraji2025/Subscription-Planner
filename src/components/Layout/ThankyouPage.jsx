import iconThankYou from "/src/assets/images/icon-thank-you.svg";

export function ThankYouPage() {
  return (
    <>
      <div className="w-full shadow-lg mx-auto my-0 z-10 p-6.25 max-w-75 bg-white rounded-lg md:shadow-none md:max-w-100">
        <div className="flex-col justify-center flex text-center items-center gap-6 mt-8">
          <img
            src={iconThankYou}
            alt="Thank you icon"
            className="w-12"
          />
          <h3 className="text-bold text-blue-950 font-bold text-xl">
            Thank you!
          </h3>
        </div>
        <div>
          <p className="text-gray-400 text-sm text-center mb-8 mt-4">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. if you ever need support, please feel to email us at
            support@loregaming.com
          </p>
        </div>
      </div>
    </>
  );
}
