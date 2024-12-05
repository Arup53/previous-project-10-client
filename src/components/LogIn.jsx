import { useAuthContext } from "../context/AuthProvider";

function LogIn() {
  const { logIn } = useAuthContext();

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.pass.value;
    console.log(email);

    logIn(email, password)
      .then((result) => {
        console.log(result);
        const lastLogInTime = result?.user?.metadata?.lastLoginAt;
        const obj = {
          email,
          lastLogInTime,
        };
        fetch("http://localhost:3000/users", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <div>
      <div className="h-[600px]  bg-[url('c-7.avif')]  bg-cover bg-no-repeat mb-24">
        <div className="h-full w-full bg-gradient-to-b from-black/40 to-black/60"></div>
        <p className="bg-orange-400 text-4xl font-bold text-white text-center relative -top-14 left-1/3 px-12 py-6 w-[400px]">
          Login
        </p>
      </div>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
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
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
