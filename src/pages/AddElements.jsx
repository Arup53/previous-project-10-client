function AddElements() {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    console.log(name, photo);

    const obj = {
      name,
      photo,
    };

    fetch("http://localhost:3000/elements", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div className="min-h-[400px] flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        {/* form row name and quantity */}
        <div className="md:flex">
          <div>
            <h3>Element Name</h3>
            <div className="join">
              <input
                name="name"
                className="input input-bordered join-item"
                placeholder="Element Name"
              />
            </div>
          </div>
          <div>
            <h3>Photo URL</h3>
            <div className="join">
              <input
                name="photo"
                className="input input-bordered join-item"
                placeholder="PhotoUrl"
              />
            </div>
          </div>
        </div>
        {/* form row supplier and test */}
        {/* <div className="md:flex">
          <div>
            <h3>Supplier</h3>
            <div className="join">
              <input
                name="supplier"
                className="input input-bordered join-item"
                placeholder="Supplier"
              />
            </div>
          </div>
          <div>
            <h3>Quantity</h3>
            <div className="join">
              <input
                name="test"
                className="input input-bordered join-item"
                placeholder="test"
              />
            </div>
          </div>
        </div> */}

        {/* form row category and details */}
        {/* <div className="md:flex">
          <div>
            <h3>category</h3>
            <div className="join">
              <input
                name="category"
                className="input input-bordered join-item"
                placeholder="category"
              />
            </div>
          </div>
          <div>
            <h3>details</h3>
            <div className="join">
              <input
                name="details"
                className="input input-bordered join-item"
                placeholder="details"
              />
            </div>
          </div>
        </div> */}
        {/* form row photo */}

        {/* <div className="md:flex">
          <div>
            <h3>categor</h3>
            <div className="join">
              <input
                name="photo"
                className="input input-bordered join-item"
                placeholder="photoURL"
              />
            </div>
          </div>
        </div> */}

        <input className="btn w-full" type="submit" value="Add Coffee" />
      </form>
    </div>
  );
}

export default AddElements;
