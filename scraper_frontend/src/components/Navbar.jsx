

const Navbar = () => {
  return (
    <header className="header">
            <img src="assets/images/logo.png" alt="Logo" className="logo" />
            <nav className="nav">
            <button className="nav-button"><a href="/">Home</a></button>
                <button className="nav-button">Events</button>
                <button className="nav-button">Hiring</button>
                <button className="nav-button"><a href="/clublogin">Login</a></button>
                <button className="nav-button">☰</button>
            </nav>
        </header>
  )
}

export default Navbar