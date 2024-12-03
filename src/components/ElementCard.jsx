import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function ElementCard({ element, onDeletetion }) {
  const { name, photo, _id: id } = element;

  function handleDelete(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/elements/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              console.log(data);
              onDeletetion(id);
            }
          });
      }
    });
  }

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <Link to={`/updateelements/${id}`} className="btn btn-primary">
              Update
            </Link>
            <button onClick={() => handleDelete(id)} className="btn ">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ElementCard;
