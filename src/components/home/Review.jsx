import React from "react";
import hashan from "../../assets/img/hashan.jpg";

const reviews = [
  {
    name: "Hashan Thennakoon",
    role: "Owner, Eye Planet Optical",
    contact: "+94 711912202",
    image: hashan,
    quote:
      "Vishnaka is an exceptional professional who consistently demonstrates dedication, strategic thinking, and a results-driven mindset. His work has had a tangible impact on our business, improving processes, efficiency, and overall team performance. He approaches challenges with creativity and persistence, always delivering beyond expectations. Vishnaka is a true asset to any organization and has my highest recommendation.",
  },
  {
    name: "Manikya Senarathne",
    role: "CEO, LightwayIT",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "He built our chatbot integration end-to-end and handled AWS & OpenAI beautifully. Highly recommended for serious SaaS projects. ",
  },
  {
    name: "Chinthaka Jayawardhana",
    role: "CTO, EyePlanet.lk",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    quote:
      "Delivered our sales tracking system with a clean UI and CI/CD setup. Very flexible, and quick with iterations.",
  },
];

function Review() {
  return (
    <section
      id="reviews"
      className="w-full min-h-[50vh] bg-[#0D1117] text-white px-6 lg:px-32 py-20"
    >
      <h2 className="text-4xl font-extrabold text-white mb-16 text-center">
        What People Say
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-[#161B22] p-6 rounded-xl shadow-md hover:shadow-orange-500/20 transition-all"
          >
            <div className="flex items-center mb-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 rounded-full object-cover mr-4 ring-2 ring-orange-500"
              />
              <div>
                <h3 className="text-md font-semibold">{review.name}</h3>
                <p className="text-xs text-gray-400">{review.role}</p>
                <a href="tel:+94713704691" className="text-xs text-gray-500">
                  {review.contact}
                </a>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              “{review.quote}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Review;
