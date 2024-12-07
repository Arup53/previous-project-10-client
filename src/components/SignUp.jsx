import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";

function SignUp() {
  const { signUp, updateUser } = useAuthContext();

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.pass.value;
    const photo = form.photo.value;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    // password validation
    if (!passwordRegex.test(password)) {
      const msg =
        "Password must contain one uppercase, one lowercase and length must be 6 or greater";
      toast.error(msg);
      return;
    }

    // sign up
    signUp(email, password)
      .then((data) => {
        console.log(data);
        updateUser(name, photo);
        const createdAt = data.user?.metadata?.creationTime;
        const newUser = { name, email, createdAt };

        fetch("https://backend-ecru-mu.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
        toast.success("Registration Successful");
        form.reset();
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("Error While Registering", err.message);
        form.reset();
      });
  }

  return (
    <div>
      <div className="h-[600px]  bg-[url('/c-6.avif')]  bg-cover bg-no-repeat mb-24">
        <div className="h-full w-full bg-gradient-to-b from-black/40 to-black/60"></div>
        <p className="bg-sky-400 text-lg md:text-4xl font-bold text-white text-center relative md:-top-14 -top-10 left-1/3 -translate-x-6 md:-translate-x-16 lg:translate-x-0 px-12 py-6 w-[200px] md:w-[400px]">
          Register
        </p>
      </div>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Username"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="PhotoURL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="pass"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link
                    to={"/login"}
                    className="label-text-alt link link-hover"
                  >
                    Already Have An Account?Login
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">SignUp</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
