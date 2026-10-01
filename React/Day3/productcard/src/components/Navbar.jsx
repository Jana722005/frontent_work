import './navbar.css'
const Navbar = ()=> {

    return (<>
    
    <div className="navbar">
        <div className="logo">
            <img src="../src/assets/Flipkart-Logo.png" alt="" />
        </div>

        <div className='search'>
            <input type="text" placeholder='search'/>
        </div>

        <div className="links">
            <a href="">Cart</a>
            <a href="">Wishlist</a>
            <a href="">Orders</a>
        </div>
    </div>
    
    </>)
}

export default Navbar