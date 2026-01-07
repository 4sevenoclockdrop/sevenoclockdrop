export default function Home() {
  function piLogin() {
    Pi.authenticate(["username", "payments"])
      .then(auth => {
        console.log("Logged in", auth);
        alert("Pi login success");
      })
      .catch(err => {
        console.error(err);
        alert("Login failed");
      });
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Seven O'Clock Drop</h1>
      <button onClick={piLogin}>
        Login with Pi
      </button>
    </div>
  );
}
