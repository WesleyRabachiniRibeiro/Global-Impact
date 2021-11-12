import React from 'react'
import Heart from '../../../../assets/Img/Heart.png'
import {AiOutlineHome} from 'react-icons/ai'
import {MdOutlineDashboardCustomize} from 'react-icons/md'
import {BsBarChart} from 'react-icons/bs'
import {RiFileList2Line} from 'react-icons/ri'
import {IoMdExit} from 'react-icons/io'
import {MenuStyled} from './styled'

export default function DashboardNavbar() {
    return (
            <MenuStyled>
                <ul className='menu-container'>
                    <li className="logo-menu">
                        <img src={Heart} alt="Logo" className='logo'/>
                    </li>
                    <li className='option-menu'>
                        <AiOutlineHome className='icon'/>
                        <p>Home</p>
                    </li>
                    <li className='option-menu'>
                        <MdOutlineDashboardCustomize className='icon'/>
                        <p>Dashboard</p>
                    </li>
                    <li className='option-menu'>
                        <BsBarChart className='icon'/>
                        <p>Gráficos</p>
                    </li>
                    <li className='option-menu'>
                        <RiFileList2Line className='icon'/>
                        <p>Produtos</p>
                    </li>
                    <li className='option-menu'>
                        <IoMdExit className='icon'/>
                        <p>Sair</p>
                    </li>
                </ul>
            </MenuStyled>
    )
}
