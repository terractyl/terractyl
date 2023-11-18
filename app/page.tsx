export default function Home() {
  return (
    <main className='content-center'>
      <h1 className='font-bold align-middle'>Terractyl</h1>
      <br />
      <p className='align-middle text-lg'>Welcome to a better panel for the Pterodactyl panel. 🦖</p>
      <hr />
      <h2>Quick Links:</h2>
      <ul>
        <li><a href='/login'>Login</a></li>
        <li><a href='/register'>Register</a></li>
        <li><a href='/account'>Account</a></li>
        <li><a href='/servers'>Servers</a></li>
      </ul>
    </main>
  )
}
