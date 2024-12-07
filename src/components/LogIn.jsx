import { data, Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";

function LogIn() {
  const { logIn, popUpSignUp } = useAuthContext();

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
        fetch("https://backend-ecru-mu.vercel.app/users", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        })
          .then((res) => res.json())
          .then((data) => {
            form.reset();
            console.log(data);
            toast.success("Login Successful");
          });
      })
      .catch((err) => {
        form.reset();
        console.log(err.message);
        toast.error("Login Error", err.message);
      });
  }

  function handleGoogleSignIn() {
    let isPresent = false;
    popUpSignUp()
      .then((result) => {
        console.log(result.user);
        const user = result.user;
        const googleUser = {
          name: user.displayName,
          email: user.email,
          createAt: user?.metadata?.creationTime,
        };

        async function checker() {
          const res = await fetch(
            `https://backend-ecru-mu.vercel.app/users?email=${googleUser.email}`
          );
          const data = await res.json();

          if (data.length === 0) {
            fetch("https://backend-ecru-mu.vercel.app/users", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(googleUser),
            })
              .then((res) => res.json())
              .then((data) => console.log(data));
          } else {
            const lastLogInTime = result?.user?.metadata?.lastLoginAt;
            const obj = {
              email: googleUser.email,
              lastLogInTime,
            };

            fetch("https://backend-ecru-mu.vercel.app/users", {
              method: "PATCH",
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
        }
        checker();

        toast.success("Login Successful");
      })

      .catch((err) => {
        console.log(err.message);
        toast.error("Login Error", err.message);
      });
  }

  return (
    <div>
      <div className="h-[600px]  bg-[url('/c-7.avif')]  bg-cover bg-no-repeat mb-24">
        <div className="h-full w-full bg-gradient-to-b from-black/40 to-black/60"></div>
        <p className="bg-sky-400 text-lg md:text-4xl font-bold text-white text-center relative md:-top-14 -top-10 left-1/3 -translate-x-6 md:-translate-x-16 lg:translate-x-0 px-12 py-6 w-[200px] md:w-[400px]">
          Login
        </p>
      </div>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-[350px] min-h-[60vh] shrink-0 shadow-2xl p-2">
            <form onSubmit={handleSubmit} className="card-body ">
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
                    to={"/signup"}
                    className="label-text-alt link link-hover"
                  >
                    Don't Have An Account? Register
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn w-full btn-primary">Login</button>
              </div>
            </form>
            <button onClick={handleGoogleSignIn} className="btn m-2">
              Google SignIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
