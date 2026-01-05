const loginWithPi = async () => {
  if (!window.Pi) {
    alert('Open this app in Pi Browser');
    return;
  }

  const scopes = ['username', 'payments'];

  const authResult = await window.Pi.authenticate(scopes);

  // SEND ONLY WHAT BACKEND NEEDS
  await fetch('/api/auth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      pi_uid: authResult.user.uid,
      username: authResult.user.username
    })
  });

  alert('Logged in with Pi!');
};
