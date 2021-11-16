import React, {Component, useEffect, useState} from 'react'
import { slide as Menu } from 'react-burger-menu'
import Heart from '../../../../assets/Img/Heart.png'
import {AiOutlineHome} from 'react-icons/ai'
import {MdOutlineDashboardCustomize} from 'react-icons/md'
import {BsBarChart} from 'react-icons/bs'
import {RiFileList2Line} from 'react-icons/ri'
import {IoMdExit} from 'react-icons/io'
import {BurgerDashboardStyled, MenuStyled} from './styled'
import { Link } from 'react-router-dom'
import SolidBlackBar from '../../../../assets/Img/SolidBlackBar.svg'
import Close from '../../../../assets/Img/Close.svg'
import { BurgerStyled } from '../../../home/header/styled'

function useWindowSize () {
    const [size, setSize] = useState([window.innerWidth]);
    useEffect(() =>{
        const handleResize = () =>{
            setSize([window.innerWidth]);
        }
        window.addEventListener("resize", handleResize);
    }, []);
    return size;
};


class Burger extends Component {
    render() {
        return (
            <Menu isOpen={false} customBurgerIcon={<img src={SolidBlackBar} alt="bars"/>} customCrossIcon={<img src={Close} alt="close"/>} noOverlay width={'300px'} disableOverlayClick>
                <li className="logo-menu">
                    <img src={Heart} alt="Logo" className='logo'/>
                </li>
                <li className='option-menu'>
                    <AiOutlineHome className='icon'/>
                    <Link to='/'>Home</Link>
                </li>
                <li className='option-menu'>
                    <MdOutlineDashboardCustomize className='icon'/>
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
                <li className='option-menu'>
                    <BsBarChart className='icon'/>
                    <Link to='/grafico'>Gráficos</Link>
                </li>
                <li className='option-menu'>
                    <RiFileList2Line className='icon'/>
                    <Link to='/produtos'>Produtos</Link>
                </li>
                <li className='option-menu'>
                    <IoMdExit className='icon'/>
                    <Link to='/login'>Sair</Link>
                </li>
            </Menu>
        );
    }
}

export default function DashboardNavbar() {
    const [width] = useWindowSize()
    return (
        <>
            {(width <= 1200) ? 
            <BurgerDashboardStyled>
                <BurgerStyled>
                    <Burger/>
                </BurgerStyled>
            </BurgerDashboardStyled> :
            false
            }
            
            {(width > 1200) ? 
            <MenuStyled>
                <ul className='menu-container'>
                    <li className="logo-menu">
                        <img src={Heart} alt="Logo" className='logo'/>
                    </li>
                    <li className='option-menu'>
                        <AiOutlineHome className='icon'/>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='option-menu'>
                        <MdOutlineDashboardCustomize className='icon'/>
                        <Link to='/dashboard'>Dashboard</Link>
                    </li>
                    <li className='option-menu'>
                        <BsBarChart className='icon'/>
                        <Link to='/grafico'>Gráficos</Link>
                    </li>
                    <li className='option-menu'>
                        <RiFileList2Line className='icon'/>
                        <Link to='/produtos'>Produtos</Link>
                    </li>
                    <li className='option-menu'>
                        <IoMdExit className='icon'/>
                        <Link to='/login'>Sair</Link>
                    </li>
                </ul>
            </MenuStyled> :
            false
            }
        </>
    )
}
