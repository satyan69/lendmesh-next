const testimonials = [
  {
    name: "Lorem ipsum",
    title: "IT Employee",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut amet, consectetur",
    rating: 5,
    active: false,
  },
  {
    name: "Lorem ipsum",
    title: "IT Employee",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut amet, consectetur",
    rating: 5,
    active: true,
  },
  {
    name: "Lorem ipsum",
    title: "IT Employee",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut amet, consectetur",
    rating: 5,
    active: false,
  },
];

export default function Clients() {
  return (
    <div className="py-10 px-4 text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center pb-12">Our Trusted Clients</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className={`p-6 rounded-md shadow-md transition ${
              t.active
                ? "bg-[#2D80F2] text-white"
                : "bg-[#F7F8F9] text-[#001E41]"
            }`}
          >
            <div className="flex justify-center mb-4">
              {[...Array(t.rating)].map((_, i) => (
                <span
                  key={i}
                  className={`text-xl ${
                    t.active ? "text-[#66E396]" : "text-[#2D80F2]"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="text-lg mb-4">“{t.quote}”</p>
            <p className={`font-bold ${t.active ? "text-[#66E396]" : ""}`}>
              {t.name}
            </p>
            <p
              className={`text-sm ${
                t.active ? "text-white" : "text-[#2D80F2]"
              }`}
            >
              {t.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
