const Papers = () => {
  return (
    <div className="p-8">
      <div>
        <h2 className="font-bold text-3xl  text-center">Research Papers</h2>
      </div>

      <div className="flex flex-row flex-wrap justify-center md:p-16">
        <div className="dark:bg-zinc-900 bg-zinc-100 text-zinc-900 dark:hover:bg-zinc-800 p-5 rounded-2xl m-4 text-center hover:ring-2 hover:ring-zinc-300 md:w-1/2 cursor-pointer flex justify-center flex-row flex-wrap  py-8  md:space-x-12">
          <a
            href="https://link.springer.com/chapter/10.1007/978-3-662-63958-0_43"
            target="_blank"
            rel="noreferrer"
          >
            <div className="dark:text-white flex flex-col justify-center rounded-lg p-4 motion-safe:hover:scale-105">
              <img src="/img/springer.jpg" className="w-32 m-auto mt-6" />

              <h2 className="dark:text-white text-center font-bold text-xl p-6">
                Coins, Covid, Keynes and K-Shaped Recovery
              </h2>
              <p className="p-8 dark:text-zinc-300">
                Reckless monetary policy, especially in the wake of a pandemic,
                amplifies the gap between the extreme ends of the income
                distribution, thus exacerbating the long term effects of income
                inequality and loss of human capital. Attempts of federal
                stimulus bills fall short in timing and size, including
                directing spending towards those most in need. We propose a
                general smart contract protocol that distributes funds to
                targeted individuals with programmatic spending enforceability,
                alleviating the K-Shape recovery that current monetary policy is
                creating and turn it into the desired V-Shape. Utilizing
                incentive structures, our model directs spending to help
                stimulate the economies of targeted communities and struggling
                businesses. Smart contracts remove the current inefficiencies in
                the political trust and permission-based solution and allow for
                more transparency, verification, and incentives to help one’s
                community in times of need. Such a system allows for a more
                positive and direct relationship between those with funds and
                those who need funds.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Papers;
