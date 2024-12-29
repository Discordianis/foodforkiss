'use client'

import React, {useEffect, useRef, useState} from "react";
import {UserAccountIcon} from "hugeicons-react";
import Image from "next/image";
import Link from "next/link";
import './Header.css'
import Tabs from "@/components/Tabs/Tabs";
import menubg from "@/assets/menu_bg_trans.png"
import headerbg from "@/assets/textbox1.png"
import iconFFF from '@/assets/FFF icon.png'
import menuButton from '@/assets/menuButton.png'
import {usePathname} from "next/navigation";

const Header:React.FC = () => {

    const params = usePathname()
    const [tab, setTab] = useState<string>('')
    const [menu, setMenu] = useState<boolean>(false)
    const subMenuRef = useRef<HTMLDivElement | null>(null)

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
            headerElem.style.backgroundPositionY = '-62px'
        }
    }, []);

    return (
        <header className={'sticky top-0 flex flex-row justify-between bg-pink-300/80 rounded-b-lg'} id={'header'}>
            <div>
                <div onClick={() => setMenu(true)} className={'py-1.5 px-2.5 mr-2 cursor-pointer header_menu_button'}>
                    <Image src={menuButton} alt={''} height={50}/>
                </div>
                <div className={`left_menu_root ${menu ? '' : 'hide'}`}>
                    <div className={`left_menu_sub ${menu ? '' : 'hide'}`} id={'left_menu_sub'} ref={subMenuRef}>
                        <div onClick={() => setMenu(false)} className={'header_close_button'}>
                            <span>Закрыть</span>
                        </div>
                        <div className={'mb-4 mt-2 header_menu_icon'}>
                            <Image src={iconFFF} alt={''} />
                        </div>

                        <div className={'flex flex-col gap-2.5'}>
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

            <div>
                <Link href={'/login'} className={'py-1.5 h-full px-3 ml-2 flex justify-center items-center cursor-pointer login_profile_button'}>
                    <div className={'flex gap-1.5'}>
                        <div>
                            <UserAccountIcon color={'white'}/>
                        </div>
                        <div>
                            <span>Войти</span>
                        </div>
                    </div>
                </Link>
            </div>
        </header>
    )
}
export default Header