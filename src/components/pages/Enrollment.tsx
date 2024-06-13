import Tick from "../../assets/images/check-mark-svgrepo-com.svg";
let listData1 = [
  "Access to beginner level classes",
  "Weekly live practice sessions",
  "Basic analytics on progress",
  "Email support with 48-hour response time",
  "Access to community forums",
];
let listData2 = [
  "Access to intermediate level classes",
  "Bi-weekly live practice sessions with feedback",
  "Advanced progress analytics",
  "24-hour support response time",
  "Access to community forums and exclusive workshops",
  "Personalized feedback on assignments",
];
let listData3 = [
  "Access to advanced level classes",
  "Weekly one-on-one sessions",
  "Comprehensive progress analytics",
  "Priority support with 1-hour response time",
];

function Enrollment() {
  return (
    <div>
      <div className="rounded-lg border-grandis-100 pb-12 font-playfair">
        <div className="">
          <p className="text-center text-base font-semibold text-grandis-50">
            Pricing
          </p>
          <p className="text-center text-5xl font-bold capitalize text-grandis-300">
            Pricing Detail of all classes
          </p>
          <p className="text-center leading-8 text-grandis-300 opacity-75">
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
            quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
          </p>
        </div>
        <div className="container m-auto mb-4 mt-4 px-4">
          <div className="grid grid-cols-3">
            <div className="mt-8 flex flex-col rounded-3xl rounded-r-none border border-r-0 border-grandis-300 bg-white p-8">
              <div className="my-2 text-xl font-semibold text-revolver-950">
                Beginner
              </div>
              <div className="flex content-end items-end">
                <div className="text-4xl font-bold text-revolver-950">
                  24 Class/
                </div>
                <div className="text-revolver-950">year</div>
              </div>
              <div className="text-revolver-950">
                The perfect start for aspiring musicians.
              </div>
              <ul className="mt-4 grow">
                {listData1.map((ele, index) => {
                  return (
                    <>
                      <li key={index}>
                        <div className="flex items-center gap-2">
                          <div>
                            <img src={Tick} className="size-4" alt="" />
                          </div>
                          <div className="text-lg text-revolver-950">
                            {" "}
                            {ele}
                          </div>
                        </div>
                      </li>
                    </>
                  );
                })}
              </ul>
              <button className="lg:px w-full lg:mt-4 lg:rounded-lg lg:border-2 lg:border-grandis-300 lg:px-6 lg:py-2 lg:text-2xl lg:text-grandis-300">
                Register
              </button>
            </div>
            <div className="flex flex-col rounded-3xl rounded-b-none border border-grandis-300 bg-gradient-to-t from-transparent via-grandis-300 to-grandis-300 p-8">
              <div className="my-2 text-xl font-semibold text-revolver-950">
                Intermediate (Most Popular)
              </div>
              <div className="flex content-end items-end">
                <div className="text-4xl font-bold text-revolver-950">
                  24 Class/
                </div>
                <div className="text-revolver-950">year</div>
              </div>
              <div className="text-revolver-950">
                The perfect start for aspiring musicians.
              </div>
              <ul className="mt-4 grow">
                {listData2.map((ele, index) => {
                  return (
                    <>
                      <li key={index}>
                        <div className="flex items-center gap-2">
                          <div>
                            <img src={Tick} className="size-4" alt="" />
                          </div>
                          <div className="text-lg text-revolver-950">
                            {" "}
                            {ele}
                          </div>
                        </div>
                      </li>
                    </>
                  );
                })}
              </ul>
              <button className="lg:px w-full lg:mt-4 lg:rounded-lg lg:border-2 lg:border-grandis-300 lg:px-6 lg:py-2 lg:text-2xl lg:text-grandis-300">
                Register
              </button>
            </div>

            <div className="mt-8 flex flex-col rounded-3xl rounded-l-none border border-l-0 border-grandis-300 bg-white p-8">
              <div className="my-2 text-xl font-semibold text-revolver-950">
                Advanced
              </div>
              <div className="flex content-end items-end">
                <div className="text-4xl font-bold text-revolver-950">
                  24 Class/
                </div>
                <div className="text-revolver-950">year</div>
              </div>
              <div className="text-revolver-950">
                For dedicated students aiming for mastery.
              </div>
              <ul className="mt-4 grow">
                {listData3.map((ele, index) => {
                  return (
                    <>
                      <li key={index}>
                        <div className="flex items-center gap-2">
                          <div>
                            <img src={Tick} className="size-4" alt="" />
                          </div>
                          <div className="text-lg text-revolver-950">
                            {" "}
                            {ele}
                          </div>
                        </div>
                      </li>
                    </>
                  );
                })}
              </ul>
              <button className="lg:px w-full lg:mt-4 lg:rounded-lg lg:border-2 lg:border-grandis-300 lg:px-6 lg:py-2 lg:text-2xl lg:text-revolver-950">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enrollment;
