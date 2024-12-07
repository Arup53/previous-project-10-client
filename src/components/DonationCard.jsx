import moment from "moment";

function DonationCard({ campaign }) {
  const { image, title, type, deadline } = campaign;

  const date = deadline && moment(deadline).format("D MMMM YYYY");

  console.log(image, title, type, deadline);
  return (
    <div className="md:flex justify-center items-center">
      <div className="card bg-base-100 md:w-80 lg:w-96 rounded-t-none shadow-xl">
        <figure>
          <img className="w-full h-[300px] object-cover " src={`${image}`} />
        </figure>
        <div className="card-body space-y-6">
          <h2 className="card-title">{title}</h2>
          <div>
            <p>Donation Type: {type}</p>
          </div>
          <p className="">Deadline: {date}</p>
        </div>
      </div>
    </div>
  );
}

export default DonationCard;
