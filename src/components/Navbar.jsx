import "./Navbar.css";
const Navbar = ({ links, changeMode }) => {
  return (
    <nav>
      <div>
        <img
          src="https://banner2.cleanpng.com/20180401/gcq/kisspng-royalty-free-clip-art-sun-vector-5ac0e38e43bc15.7460223415225906062775.jpg"
          alt="Logo sole"
        />
        {links.map(({ href, text, id }) => (
          <a key={`link${id}`} href={href}>
            {text}
          </a>
        ))}
        <button onClick={changeMode}>Cambia Modalita</button>{" "}
      </div>
    </nav>
  );
};
export default Navbar;
