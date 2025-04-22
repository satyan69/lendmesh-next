export default function Clients() {
  return (
    <>
      <h2 className="text-4xl font-bold text-center mb-12">
        Our Trusted Clients
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* <!-- Card 1 --> */}
        <div className="bg-white shadow-lg rounded-lg p-8 transition transform hover:scale-105">
          <div className="flex justify-center mb-4">
            <span className="text-[#4296EA] text-2xl"></span>
          </div>
          <p className="text-lg mb-6">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut amet, consectetur”
          </p>
          <h4 className="font-bold">Lorem ipsum</h4>
          <p className="text-[#4296EA]">IT Employee</p>
        </div>

        {/* <!-- Active Card --> */}
        <div className="bg-blue-500 shadow-lg rounded-lg p-8 transform scale-105 transition">
          <div className="flex justify-center mb-4">
            <span className="text-[#6BE3A2] text-2xl">★ ★ ★ ★ ★</span>
          </div>
          <p className="text-white text-lg mb-6">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut amet, consectetur”
          </p>
          <h4 className="text-[#6BE3A2] font-bold">Lorem ipsum</h4>
          <p className="text-white">IT Employee</p>
        </div>

        {/* <!-- Card 3 --> */}
        <div className="bg-white shadow-lg rounded-lg p-8 transition transform hover:scale-105">
          <div className="flex justify-center mb-4">
            <span className="text-[#4296EA] text-2xl">★ ★ ★ ★ ★</span>
          </div>
          <p className="text-lg mb-6">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut amet, consectetur”
          </p>
          <h4 className="font-bold">Lorem ipsum</h4>
          <p className="text-[#4296EA]">IT Employee</p>
        </div>
      </div>
    </>
  );
}
