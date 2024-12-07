import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../runningcampaigns.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { data } from "react-router-dom";
import { filterByActivation, limiter } from "../util/utilites";
import moment from "moment";

function RunningCampaigns() {
  const [campaigns, setCampaigns] = useState(null);

  useEffect(() => {
    fetch("https://backend-ecru-mu.vercel.app/campaigns")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const filteredData = filterByActivation(data);
        const finalData = limiter(filteredData);
        setCampaigns(finalData);
      });
  }, []);

  console.log(campaigns);
  return (
    <div className="h-[600px]">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {campaigns &&
          campaigns.map((campaign) => (
            <SwiperSlide key={campaign._id}>
              <div className="card bg-base-100 w-96 rounded-t-none shadow-xl">
                <figure>
                  <img className="h-[300px]" src={`${campaign.image}`} />
                </figure>
                <div className="card-body space-y-6">
                  <h2 className="text-lg text-center font-bold">
                    {campaign.title}
                  </h2>

                  <p className="text-sm">Donation Type: {campaign.type}</p>

                  <p className="text-sm">
                    Deadline: {moment(campaign.deadline).format("D MMMM YYYY")}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default RunningCampaigns;
