export default function HomeAbout() {
    return (
        <>
        {/* <!-- Title Section --> */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">About Lendmesh</h2>

        <p className="text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
          At LendMesh, we believe finding the right loan should be simple,
          transparent, and stress-free. Our platform connects you with top
          lenders and credit unions across the USA, offering real-time rates and
          tailored loan options, all in one place.
        </p>

        {/* <!-- Stats Section (2x2 Grid on Mobile) --> */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#4296EA]">100+</h3>
            <p>clients</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#4296EA]">200+</h3>
            <p>clients</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#4296EA]">300+</h3>
            <p>clients</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#4296EA]">400+</h3>
            <p>clients</p>
          </div>
        </div>

        {/* <!-- Button Section --> */}
        <div className="mt-10">
          <button
            typeof="button"
            className="border-2 border-[#002144] text-[#002144] px-6 py-2 rounded-[8px] hover:bg-[#6BE3A2] hover:border-[#6BE3A2] hover:text-white transition cursor-pointer"
          >
            Know more
          </button>
        </div>
      </>
    )
}