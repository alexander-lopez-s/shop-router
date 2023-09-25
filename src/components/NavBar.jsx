import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
      <div>
      <nav>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/Decoration'>Decoration</NavLink></li>
            <li><NavLink to='/Shoes'>Shoes</NavLink></li>
            <li><NavLink to='/Furniture'>Furniture</NavLink></li>
            <li><NavLink to='/Sunglasses'>Sunglasses</NavLink></li>
          </ul>
      </nav>
      </div>
    )
  }
  
  export default NavBar