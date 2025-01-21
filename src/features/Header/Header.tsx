'use client'

import React, {useEffect, useRef, useState} from "react";
import {ShoppingCart01Icon, UserAccountIcon} from "hugeicons-react";
import Image from "next/image";
import Link from "next/link";
import './Header.css'
import Tabs from "@/components/Tabs/Tabs";
import menubg from "@/assets/menu_bg_trans.png"
import headerbg from "@/assets/textbox1.png"
import iconFFF from '../../../public/FFF icon.png'
import menuButton from '../../../public/menuButton.png'

import {usePathname} from "next/navigation";
import logged from "@/store/logged";
import {observer} from "mobx-react-lite";
import cartCount from "@/store/cart";

const Header:React.FC = observer(() => {

    const params = usePathname()
    const [tab, setTab] = useState<string>('')
    const [menu, setMenu] = useState<boolean>(false)
    const subMenuRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        logged.getToken()
    }, []);

    useEffect(() => {
        if (params) {
            setTab(params.slice(1, 99))
        }
    }, [params]);

    useEffect(() => {
        const popup = (e: MouseEvent) => {
            const target = e.target as Node
            if (subMenuRef.current && !subMenuRef.current.contains(target)) {
                setMenu(false)
            }
        }
        if (menu) {
            document.addEventListener('mousedown', popup)
        }
        return () => {
            document.addEventListener('mousedown', popup)
        }
    }, [menu, subMenuRef]);

    useEffect(() => {
        const menubgElem = document.getElementById('left_menu_sub')
        const headerElem = document.getElementById('header')
        if (menubgElem) {
            menubgElem.style.background = `linear-gradient(rgb(187 51 110), rgb(255 0 139 / 44%)) 0% 0% / cover, url("${menubg.src}")`;
            menubgElem.style.backgroundSize = `cover`
            menubgElem.style.backgroundBlendMode = 'multiply'
        }
        if (headerElem) {
            headerElem.style.background = `linear-gradient(rgb(187 51 110), rgb(255 0 139 / 44%)) 0% 0% / cover, url("${headerbg.src}")`;
            headerElem.style.backgroundSize = `cover`
            headerElem.style.backgroundBlendMode = 'multiply'
            headerElem.style.backgroundPositionY = '-57px'
        }
    }, []);

    return (
        <header id={'header'}>
            <div>
                <div onClick={() => setMenu(true)} className={'header_menu_button'}>
                    <Image src={menuButton} alt={''} height={50}/>
                </div>
                <div className={`left_menu_root ${menu ? '' : 'hide'}`}>
                    <div className={`left_menu_sub ${menu ? '' : 'hide'}`} id={'left_menu_sub'} ref={subMenuRef}>
                        <div onClick={() => setMenu(false)} className={'header_close_button'}>
                            <span>Закрыть</span>
                        </div>
                        <div className={'header_menu_icon'}>
                            <Image src={iconFFF} alt={''} />
                        </div>

                        <div className={'header_menu_utabs'}>
                            <Tabs isActive={tab === ''} onClick={() => setTab('')}>
                                <Link href={'/'} className={`header_props ${tab === '' ? 'active' : ''}`} onClick={() => setMenu(false)}>
                                    <span>Главная</span>
                                </Link>
                            </Tabs>
                            <Tabs isActive={tab === 'food'} onClick={() => setTab('food')}>
                                <Link href={'/food'} className={`header_props ${tab === 'food' ? 'active' : ''}`} onClick={() => setMenu(false)}>
                                    <span>Еда</span>
                                </Link>
                            </Tabs>
                            <Tabs isActive={tab === 'family'} onClick={() => setTab('family')}>
                                <Link href={'/family'} className={`header_props ${tab === 'family' ? 'active' : ''}`} onClick={() => setMenu(false)}>
                                    <span>Семья</span>
                                </Link>
                            </Tabs>
                            <Tabs isActive={tab === 'history'} onClick={() => setTab('history')}>
                                <Link href={'/history'} className={`header_props ${tab === 'history' ? 'active' : ''}`} onClick={() => setMenu(false)}>
                                    <span>История</span>
                                </Link>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'header_right'}>
                <Link href={`/cart`} className={'shopping_cart_icon'}>
                    <ShoppingCart01Icon color={'white'}/>
                    {cartCount.cartCount !== 0 &&
                        <div>{cartCount.cartCount}</div>
                    }
                </Link>
                <Link href={logged.token ? '/profile' : '/login'} className={logged.token ? 'header_profile_button' : 'header_login_button'}>
                    {logged.token ?
                        <div>
                            <div>
                                <Image src={'/defaultAvatar.png'} alt={''} width={45} height={45}/>
                            </div>
                            <div>
                                <span>MrZaxter</span>
                            </div>
                        </div>
                        :
                        <div>
                            <div>
                                <UserAccountIcon color={'white'}/>
                            </div>
                            <div>
                                <span>Войти</span>
                            </div>
                        </div>
                    }
                </Link>
            </div>
        </header>
    )
})
export default Header