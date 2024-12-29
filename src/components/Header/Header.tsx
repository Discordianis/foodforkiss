'use client'

import React, {useState} from "react";
import {UserAccountIcon} from "hugeicons-react";
import Image from "next/image";
import menuButton from '../../../public/menuButton.png'
import Link from "next/link";
import './Header.css'
import Tabs from "@/components/Tabs/Tabs";

const Header:React.FC = () => {

    const [tab, setTab] = useState<string>('')
    const [menu, setMenu] = useState<boolean>(false)

    return (
        <div className={'sticky flex flex-row justify-between bg-pink-300/80 rounded-b-lg'}>
            <div>
                <div onClick={() => setMenu(true)}>
                    <Image src={menuButton} alt={''} height={50}/>
                </div>
                <div className={`${menu ? 'left_menu_root' : 'left_menu_root hidden'}`}>
                    <div className={'left_menu_sub'}>
                        <div onClick={() => setMenu(false)}>
                            <p>Тут кнопка назад и лого</p>
                        </div>
                        <div className={'flex flex-col gap-2.5'}>
                            <Tabs isActive={tab === 'food'} onClick={() => setTab('food')}>
                                <Link href={'/food'} className={'header_props'}>
                                    <span>Еда</span>
                                </Link>
                            </Tabs>
                            <Tabs isActive={tab === 'family'} onClick={() => setTab('family')}>
                                <Link href={'/family'} className={'header_props'}>
                                    <span>Семья</span>
                                </Link>
                            </Tabs>
                            <Tabs isActive={tab === 'history'} onClick={() => setTab('history')}>
                                <Link href={'/history'} className={'header_props'}>
                                    <span>История</span>
                                </Link>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'flex flex-row items-center justify-center gap-2.5 flex-1'}>
                <Tabs isActive={tab === 'food'} onClick={() => setTab('food')}>
                    <Link href={'/food'} className={'header_props'}>
                        <span>Еда</span>
                    </Link>
                </Tabs>
                <Tabs isActive={tab === 'family'} onClick={() => setTab('family')}>
                    <Link href={'/family'} className={'header_props'}>
                        <span>Семья</span>
                    </Link>
                </Tabs>
                <Tabs isActive={tab === 'history'} onClick={() => setTab('history')}>
                    <Link href={'/history'} className={'header_props'}>
                        <span>История</span>
                    </Link>
                </Tabs>
            </div>

            <div>
                <Link href={'/login'}>
                    <div className={'login_profile_button'}>
                    <div>
                            <UserAccountIcon color={'white'}/>
                        </div>
                        <div>
                            <span>Войти</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default Header