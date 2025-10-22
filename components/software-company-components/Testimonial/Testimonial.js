import { useRef, useEffect } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

// Fiverr Reviews Data
const fiverrReviews = [
  {
    id: "01",
    name: "mahadevan_1983",
    country: "Singapore",
    countryCode: "SG",
    rating: 5,
    timeAgo: "6 days ago",
    review:
      "Suleman was excellent in explaining the project details clearly and setting realistic expectations throughout the process. His communication and professionalism made the collaboration smooth and productive, and I look forward to working closely with him over the coming months on future phases of the project.",
    badge: "Repeat Client",
    duration: "13 days",
  },
  {
    id: "02",
    name: "chaplogcorp",
    country: "South Africa",
    countryCode: "ZA",
    rating: 5,
    timeAgo: "2 weeks ago",
    review:
      "Suleman was very professional and made my 1st time using Fiverr a great pleasure. I will recommend him to any business all over the world. His is great and professional and very responsive and quick",
    badge: null,
    duration: "1 day",
  },
  {
    id: "03",
    name: "mahadevan_1983",
    country: "Singapore",
    countryCode: "SG",
    rating: 5,
    timeAgo: "3 weeks ago",
    review:
      "Suleman was truly exceptional in every aspect of this project. From the very beginning, he demonstrated a clear understanding of the requirements and ensured that all expectations were properly aligned before commencing the work. What impressed me most was not only the speed of delivery - completing...",
    badge: "Repeat Client",
    duration: "1 day",
  },
  {
    id: "04",
    name: "drsayandeepdas",
    country: "India",
    countryCode: "IN",
    rating: 5,
    timeAgo: "2 days ago",
    review:
      "I am new to vibe coding. This seller has been of great help in fixing the issues. Will contract him for all our startup needs!!!",
    badge: null,
    duration: "1 day",
  },
  {
    id: "05",
    name: "ismailyousopov",
    country: "Sweden",
    countryCode: "SE",
    rating: 5,
    timeAgo: "1 week ago",
    review:
      "Suleman helped me with my Base44 app. He found the problem I had been struggling with for weeks. Very easy to talk to and professional – highly recommended 🚀",
    badge: "Repeat Client",
    duration: "1 day",
  },
  {
    id: "06",
    name: "tt7311970",
    country: "United States",
    countryCode: "US",
    rating: 5,
    timeAgo: "5 days ago",
    review:
      "I've found a winner, this guy use my vibe coding front-end and created the database back-end in the less than an hour for my lead management app",
    badge: "Repeat Client",
    duration: "1 day",
  },
  {
    id: "07",
    name: "ismailyousopov",
    country: "Sweden",
    countryCode: "SE",
    rating: 5,
    timeAgo: "3 days ago",
    review:
      "I'm once again very satisfied with the result I got. Suleman helped me a lot and fixed the bugs in my app. He's easy to communicate with, provides excellent customer support, and answered all of my questions throughout the process.",
    badge: "Repeat Client",
    duration: "1 day",
  },
  {
    id: "08",
    name: "mateenabbasi729",
    country: "United States",
    countryCode: "US",
    rating: 5,
    timeAgo: "7 hours ago",
    review:
      "He's great. Hard working and a good listener. Will work with him again.",
    badge: null,
    duration: "3 weeks",
  },
  {
    id: "09",
    name: "tt7311970",
    country: "United States",
    countryCode: "US",
    rating: 5,
    timeAgo: "3 days ago",
    review:
      "Amazing job, others quit but this guy worked until i was happy, definitely can't wait til the next project",
    badge: "Repeat Client",
    duration: "2 days",
  },
  {
    id: "10",
    name: "fantasyraheem",
    country: "United Kingdom",
    countryCode: "GB",
    rating: 5,
    timeAgo: "3 weeks ago",
    review:
      "I was really happy with Suleman and his work, he helped me massively with my loveable project and has good knowledge on how to solve problems",
    badge: null,
    duration: "4 days",
  },
];

const Testimonial = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="row">
      <div className="col-lg-4">
        <div className="deals_winner_customers">
          <h3 className="title_text">
            <mark>30+</mark> Happy Clients on Fiverr
          </h3>
          <div className="row">
            <div className="col-12">
              <div className="review_short_info mb-3">
                <div className="d-flex align-items-center mb-3">
                  <svg
                    width="120"
                    height="40"
                    viewBox="0 0 400 76"
                    fill="#1DBF73"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="#1DBF73">
                      <path d="M0 0h18v18H0V0zm0 20h18v56H0V20zm20 0h18v56H20V20zm20-20h18v76H40V0zm20 20h18v56H60V20zm20 0h18v56H80V20zM361.2 36.6c6.7 0 12.2 5.4 12.2 12.2s-5.4 12.2-12.2 12.2c-6.7 0-12.2-5.4-12.2-12.2s5.5-12.2 12.2-12.2zm0-16.6c-15.9 0-28.8 12.9-28.8 28.8s12.9 28.8 28.8 28.8S390 64.7 390 48.8 377.1 20 361.2 20zm-80.6 20c-13.9 0-25.2 11.3-25.2 25.2S266.7 90.4 280.6 90.4h25.2V76h-25.2c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h25.2V40h-25.2zm-46.3 0c-13.9 0-25.2 11.3-25.2 25.2S220.4 90.4 234.3 90.4h25.2V76h-25.2c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h25.2V40h-25.2z" />
                    </g>
                  </svg>
                </div>
                <ul className="rating_block unordered_list mb-2">
                  <li>
                    <i className="fa-solid fa-star fa-fw"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-star fa-fw"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-star fa-fw"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-star fa-fw"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-star fa-fw"></i>
                  </li>
                </ul>
                <div className="review_counter">
                  <b>5.0</b> Rating from <b>30+</b> reviews
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p className="text-muted small mb-2">
              <i className="fa-solid fa-check-circle text-success me-1"></i>
              100% Job Success Rate
            </p>
            <p className="text-muted small mb-2">
              <i className="fa-solid fa-check-circle text-success me-1"></i>
              Fast Response Time
            </p>
            <p className="text-muted small mb-0">
              <i className="fa-solid fa-check-circle text-success me-1"></i>
              Expert in AI & Full-Stack Development
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="review_onecol_wrapper">
          <div className="review_onecol_carousel">
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              speed={1000}
              parallax={true}
              ref={swiperRef}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {fiverrReviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <div className="review_block_2">
                    <div className="d-flex align-items-center mb-3">
                      <ul className="rating_block unordered_list me-3">
                        {[...Array(5)].map((_, i) => (
                          <li key={i}>
                            <i className="fa-solid fa-star fa-fw"></i>
                          </li>
                        ))}
                      </ul>
                      {review.badge && (
                        <span className="badge bg-success-subtle text-success">
                          {review.badge}
                        </span>
                      )}
                    </div>
                    <p className="review_commtent mb-4">"{review.review}"</p>
                    <div className="d-md-flex justify-content-md-between align-items-end">
                      <div className="review_admin">
                        <div className="review_admin_info">
                          <h4 className="review_admin_name mb-1">
                            {review.name}
                          </h4>
                          <div className="review_admin_country mb-2">
                            <span className="country_flag me-2">
                              <img
                                src={`https://flagcdn.com/24x18/${review.countryCode.toLowerCase()}.png`}
                                alt={`${review.country} Flag`}
                                width="24"
                                height="18"
                              />
                            </span>
                            <span className="country_text">
                              {review.country}
                            </span>
                          </div>
                          <div className="text-muted small">
                            <i className="fa-regular fa-clock me-1"></i>
                            {review.timeAgo} • {review.duration} delivery
                          </div>
                        </div>
                      </div>
                      <div className="review_admin_logo mt-3 mt-md-0">
                        <svg
                          width="140"
                          height="45"
                          viewBox="0 0 400 76"
                          fill="#1DBF73"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ opacity: 1 }}
                        >
                          <g fill="#1DBF73">
                            <path d="M0 0h18v18H0V0zm0 20h18v56H0V20zm20 0h18v56H20V20zm20-20h18v76H40V0zm20 20h18v56H60V20zm20 0h18v56H80V20zM361.2 36.6c6.7 0 12.2 5.4 12.2 12.2s-5.4 12.2-12.2 12.2c-6.7 0-12.2-5.4-12.2-12.2s5.5-12.2 12.2-12.2zm0-16.6c-15.9 0-28.8 12.9-28.8 28.8s12.9 28.8 28.8 28.8S390 64.7 390 48.8 377.1 20 361.2 20zm-80.6 20c-13.9 0-25.2 11.3-25.2 25.2S266.7 90.4 280.6 90.4h25.2V76h-25.2c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h25.2V40h-25.2zm-46.3 0c-13.9 0-25.2 11.3-25.2 25.2S220.4 90.4 234.3 90.4h25.2V76h-25.2c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h25.2V40h-25.2z" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="carousel_arrows_nav">
              <button
                ref={prevRef}
                type="button"
                className="r1cc-swiper-button-prev"
              >
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button
                ref={nextRef}
                type="button"
                className="r1cc-swiper-button-next"
              >
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
