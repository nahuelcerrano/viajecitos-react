import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";

import { BsFillCartFill, BsFillCartDashFill } from 'react-icons/bs'

import navStyles from "./navbar.module.css";


export const Navbar = () => {
  
  const [fixed, setFixed] = useState(false)

  const navbar = useRef()
  const navbarOffset = useRef()

  useEffect(() => {
    
    const handleScroll = () => {
      const value = navbarOffset.current.clientHeight

      setFixed(window.pageYOffset >= value)
    }

    window.addEventListener('scroll', handleScroll)

    return () => 
      window.removeEventListener('scroll', handleScroll)
  },[])

  return (
    <div 
      className={`${navStyles.header}  ${fixed && navStyles.fixed} ${fixed && 'animate__animated animate__slideInDown'} ${!fixed && 'animate__animated animate__fadeIn animate__faster'}`}
      ref={navbarOffset}>
      <nav
      // ${fixed && navStyles.fixed} ${fixed && 'animate__animated animate__slideOutUp'}
      className={`${navStyles.navbar} row`}
      ref={navbar}>
        <Link className={`${navStyles.logo}`} to="/">
          Viajecitos
        </Link>

        <ul className={navStyles.menu}>
          <li className={navStyles.list}>
            <Link to="/viajes">Viajes</Link>
          </li>

          <li className={navStyles.list}>
            <Link to="/about">Nosotros</Link>
          </li>

          <li className={navStyles.list}>
            <Link to="/servicios">Servicios</Link>
          </li>
        </ul>
        <div className={ navStyles.buttons }>
          <Link to="/contacto">
            <Button radius="lg" className={ fixed ? 'bg-white text-black' : 'bg-rose-700 text-white' }>
              Contacto
            </Button> 
          </Link>
          <Link to='/compras'>
            <Button className='bg-transparent text-slate-50 text-2xl align-middle' >
              <BsFillCartFill />
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};
