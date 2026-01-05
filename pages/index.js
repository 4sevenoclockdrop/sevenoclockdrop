export default function Home() {
  const loginWithPi = async () => {
    if (!window.Pi) {
      alert('Open this app in Pi Browser');
      return;
    }

    const scopes = ['username', 'payments'];
    const auth = await window.Pi.authenticate(
      scopes,
      () => console.log('Incomplete payment')
    );

    await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(auth)
    });

    alert('Logged in with Pi!');
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Seven O’Clock Drop</h1>
      <button onClick={loginWithPi}>
        Login with Pi
      </button>
    </div>
  );
}
