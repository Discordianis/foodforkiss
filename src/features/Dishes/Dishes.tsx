'use client';

import React, { useEffect, useState, useRef } from 'react';
import '../../interfaces/dishes';
import './Dishes.css';
import Image from "next/image";
import {PlusSignIcon} from "hugeicons-react";
import cartCount from "@/store/cart";

const Dishes: React.FC = () => {
    const [food, setFood] = useState<ICategory[]>([]);
    const categoryRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://zasos.animequiz.ru/test.json', {
                method: 'GET',
            });
            const data = await res.json();
            if (data) {
                setFood(data.menu.categories);
            } else {
                console.log('fetch error', data);
            }
        };
        fetchData().then();
    }, []);

    const scrollToCategory = (id: number) => {
        const categoryElement = categoryRefs.current[id];

        if (categoryElement) {
            const elementPosition = categoryElement.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - 57.45,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="dishes_root">
            <div className={'food_categories'}>
                {Object.values(food).map((map: ICategory, index) =>
                    <span onClick={() => scrollToCategory(map?.id)} key={index}>{map.name}</span>
                )}
            </div>

            {food.map((category: ICategory) => (
                <div key={category.id} className="category_block" ref={(el) => {categoryRefs.current[category.id] = el}}>
                    <h2 className="category_title">{category.name}</h2>
                    <div className="dishes_items">
                        {category.items.map((item: IDishesItem) => (
                            <div key={item.id} className="dishes_item">
                                <div className={'dishes_item_image'}>
                                    <Image src={item.image} alt={item.name} width={200} height={130}/>
                                </div>
                                <div className={'dishes_item_name'}>
                                    <h4>{item.name}</h4>
                                    <span>{item.description}</span>
                                </div>
                                <div>
                                    <PlusSignIcon color={'white'} onClick={() => cartCount.incrementCartCount()}/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Dishes;
