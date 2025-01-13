"use client";

import React, { useEffect } from 'react';
import Link from "next/link";
import './HomeButtons.css';
import logged from "@/store/logged";
import { observer } from "mobx-react-lite";
import Image from "next/image";

const HomeButtons: React.FC = observer(() => {

    useEffect(() => {
        logged.getToken();
    }, []);

    if (logged.tokenLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {logged.token ? (
                <div className="home_main_buttons">
                    <Link href={'/food'}>
                        <span>Меню</span>
                        <Image src={'/food.png'} alt={''} width={350} height={150}/>
                    </Link>
                    <Link href={'/MrZaxter/createMenu'}>
                        <span>Составить меню</span>
                        <Image src={'/cooker.png'} alt={''} width={400} height={150}/>
                    </Link>
                    <Link href={'/family'}>
                        <span>Семья</span>
                        <Image src={'/family.png'} alt={''} width={500} height={100}/>
                    </Link>
                    <Link href={'/history'}>
                        <span>История</span>
                        <Image src={'/history.png'} alt={''} width={470} height={150}/>
                    </Link>
                </div>
            ) : (
                <div className="flex flex-col justify-center items-center">
                    <span className="text-lg">Но для начала...</span>
                    <Link href="/login" className="button_link">
                        Войдите в аккаунт
                    </Link>
                </div>
            )}
        </div>
    );
});

export default HomeButtons;
