import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

    const items= useSelector((state)=>state.cart)

  return (
   <Nav>
   <div className='container-fluid'>
   <div className='list'>
   <ul>
   
   <Link to={'/'} className='link'>Home</Link>
   <Link to={'/cart'} className='link'>Cart</Link>
   


   </ul>

  
   <h3>Quantity:{items.length}</h3>
   
   </div>
   
   
   </div>
   
   
   </Nav>
  )
}

export default Header

const Nav=styled.div`
background-color: pink;

.list{
    display: flex;
    padding-bottom: 20px;
    padding-top: 20px;
    justify-content: space-between;
}

.list ul{
    display: flex;
    gap: 30px;
   
}

.link{
    font-size: 30px;
    text-decoration: none;
    color: black;
}



`;