import React, { useState, useMemo } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { HiOutlineSearch } from 'react-icons/hi';
import { GiMeat, GiNoodles, GiSandwich, GiBowlOfRice, GiHotMeal } from 'react-icons/gi';
import { BiSolidDrink, BiLeaf } from 'react-icons/bi';
import { GiCookingPot } from "react-icons/gi";
import './Menu.css';
import { BsCupHot } from 'react-icons/bs';
import { TbCup, TbGrill, TbMeat, TbSalad } from 'react-icons/tb';
import { LuDonut, LuSandwich } from 'react-icons/lu';
import { PiBowlFood } from 'react-icons/pi';
import { RiDrinks2Line } from 'react-icons/ri';
import { CiBowlNoodles, CiCoffeeCup } from 'react-icons/ci';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

const MENU_DATA = [
    {
        category: "Breakfast",
        icon: <BsCupHot />,
        items: [
            { name: "French Fries, Ketchup & Chicken", price: "₦6,000", img: "/m1.png" },
            { name: "French Fries, Fried Eggs & Ketchup", price: "₦4,500", img: "/m2.png" },
            { name: "Fried Plantain & Eggs", price: "₦6,000", img: "/m3.png" },
            { name: "French Fries, Scrambled Eggs & Coffee", price: "₦8,500", img: "/m4.png" },
            { name: "Indomie & Egg", price: "₦3,700", img: "/m1.png" },
            { name: "Oatmeal, Plantain & Egg Sauce", price: "₦8,000", img: "/m2.png" },
            { name: "Yam Balls & Tea", price: "₦2,500", img: "/m3.png" },
            { name: "Plantain Frittata", price: "₦6,000", img: "/m1.png" }
        ]
    },
    {
        category: "Sandwich",
        icon: <LuSandwich />,
        items: [
            { name: "Club Sandwich & Fries", price: "₦6,500", img: "/m4.png" },
            { name: "Chicken Shawarma (Single Sausage)", price: "₦4,000", img: "/m5.png" },
            { name: "Chicken Shawarma (Standard)", price: "₦3,500", img: "/m4.png" },
            { name: "Chicken Shawarma (Large)", price: "₦5,000", img: "/m5.png" },
            { name: "Beef Shawarma (With Sausage)", price: "₦3,500", img: "/m4.png" },
            { name: "Beef Shawarma (Standard)", price: "₦3,000", img: "/m5.png" },
            { name: "Beef Shawarma (Large)", price: "₦4,500", img: "/m4.png" }
        ]
    },
    {
        category: "Meat & Fish",
        icon: <TbMeat />,
        items: [
            { name: "Peppered Beef", price: "₦1,500", img: "/m6.png" },
            { name: "Peppered Turkey", price: "₦5,000", img: "/m7.png" },
            { name: "Chicken (Per Piece)", price: "₦2,500", img: "/m8.png" },
            { name: "Kentucky Chicken", price: "₦1,500", img: "/m6.png" },
            { name: "Catfish Pepper Soup", price: "₦7,000", img: "/m7.png" },
            { name: "Goat Meat (Peppered)", price: "₦1,500", img: "/m8.png" },
            { name: "Assorted Meat Pepper Soup", price: "₦4,000", img: "/m6.png" },
            { name: "Asun Goat Meat", price: "₦5,000", img: "/m7.png" },
            { name: "Boiled Egg", price: "₦400", img: "/m8.png" },
            { name: "Crocker Fish", price: "₦3,500", img: "/m6.png" },
            { name: "Dry Catfish", price: "₦3,000", img: "/m7.png" }
        ]
    },
    {
        category: "Swallow",
        icon: <PiBowlFood />,
        items: [
            { name: "Eba (with Soup)", price: "₦4,000", img: "/m9.png" },
            { name: "Semovita (with Soup)", price: "₦4,000", img: "/m10.png" },
            { name: "Pounded Yam (with Soup)", price: "₦4,500", img: "/m9.png" },
            { name: "Wheat (with Soup)", price: "₦4,500", img: "/m10.png" },
            { name: "Fufu (with Soup)", price: "₦4,000", img: "/m9.png" },
            { name: "Seafood Okro & Pounded Yam", price: "₦10,000", img: "/m10.png" },
            { name: "Miyan Kuka & Tuwon Shinkafa", price: "₦2,500", img: "/m9.png" }
        ]
    },
    {
        category: "Rice",
        icon: <GiBowlOfRice />,
        items: [
            { name: "Basmati Fried Rice", price: "₦4,000", img: "/m11.png" },
            { name: "Coconut Rice", price: "₦4,500", img: "/m12.png" },
            { name: "Native Rice", price: "₦5,500", img: "/m13.png" },
            { name: "Jollof Rice", price: "₦2,500", img: "/m11.png" },
            { name: "Yum Fried Rice", price: "₦2,500", img: "/m12.png" },
            { name: "Pineapple Rice", price: "₦4,000", img: "/m13.png" },
            { name: "Chicken Shrimp Rice", price: "₦7,000", img: "/m11.png" },
            { name: "Ofada Rice & Sauce", price: "₦5,500", img: "/m12.png" }
        ]
    },
    {
        category: "Pasta",
        icon: <CiBowlNoodles />,
        items: [
            { name: "Stir Fried Pasta", price: "₦3,000", img: "/m14.png" },
            { name: "Native Pasta", price: "₦4,000", img: "/m15.png" },
            { name: "Jollof Spaghetti", price: "₦3,500", img: "/m14.png" },
            { name: "Spaghetti Bolognese", price: "₦4,000", img: "/m15.png" },
            { name: "Spaghetti & Stew", price: "₦3,500", img: "/m14.png" },
            { name: "Pasta Alfredo", price: "₦7,000", img: "/m15.png" },
            { name: "Creamy Pasta", price: "₦6,500", img: "/m14.png" }
        ]
    },
    {
        category: "African & Porridge",
        icon: <GiHotMeal />,
        items: [
            { name: "Yam Porridge", price: "₦3,000", img: "/m16.png" },
            { name: "Plantain Porridge", price: "₦4,000", img: "/m17.png" },
            { name: "Beans Porridge", price: "₦3,000", img: "/m16.png" },
            { name: "Gizdodo", price: "₦8,500", img: "/m17.png" },
            { name: "Nkwobi", price: "₦8,000", img: "/m16.png" },
            { name: "Isiewu", price: "₦7,000", img: "/m17.png" }
        ]
    },
    {
        category: "Grills",
        icon: <TbGrill />,
        items: [
            { name: "Whole Grilled Chicken & Bole", price: "₦9,000", img: "/m18.png" },
            { name: "Whole Grilled Chicken", price: "₦7,000", img: "/m19.png" },
            { name: "Grilled Turkey", price: "₦4,000", img: "/m18.png" },
            { name: "Lamb Chops", price: "₦7,000", img: "/m19.png" },
            { name: "Grilled Fish", price: "₦5,000", img: "/m18.png" },
            { name: "Mixed Grill Platter", price: "₦8,000", img: "/m19.png" }
        ]
    },
    {
        category: "Milkshakes & Smoothies",
        icon: <TbCup />,
        items: [
            { name: "Chocolate Yum Shake", price: "₦4,500", img: "/m20.png" },
            { name: "Oreo Cookies & Cream", price: "₦5,500", img: "/m21.png" },
            { name: "Vanilla / Strawberry Shake", price: "₦4,500", img: "/m20.png" },
            { name: "Fruit Smoothie (Banana/Pineapple)", price: "₦3,500", img: "/m21.png" },
            { name: "Yoghurt Parfait", price: "₦6,500", img: "/m20.png" }
        ]
    },
    {
        category: "Sides & Snacks",
        icon: <LuDonut />,
        items: [
            { name: "Small Chops", price: "₦3,000", img: "/m22.png" },
            { name: "Yamarita", price: "₦5,500", img: "/m23.png" },
            { name: "Potarita", price: "₦2,500", img: "/m22.png" },
            { name: "Moi Moi", price: "₦1,000", img: "/m23.png" },
            { name: "Meat Pie", price: "₦1,200", img: "/m22.png" }
        ]
    },
    {
        category: "Cold Kitchen",
        icon: <TbSalad />,
        items: [
            { name: "Fruit Platter (Small/Large)", price: "₦5,000", img: "/m24.png" },
            { name: "Caesar Salad", price: "₦3,500", img: "/m25.png" },
            { name: "Fruit Salad", price: "₦2,500", img: "/m24.png" },
            { name: "Vegetable Salad", price: "₦1,500", img: "/m25.png" }
        ]
    },
    {
        category: "Drinks",
        icon: <RiDrinks2Line />,
        items: [
            { name: "Water", price: "₦500", img: "/m26.png" },
            { name: "Chapman / Pinacolada", price: "₦4,000", img: "/m27.png" },
            { name: "Soft Drinks", price: "₦1,000", img: "/m26.png" },
            { name: "Packaged Juice", price: "₦3,000", img: "/m27.png" }
        ]
    },
    {
        category: "Hot Kitchen",
        icon: <CiCoffeeCup />,
        items: [
            { name: "Coffee / Tea", price: "₦1,500", img: "/m28.png" },
            { name: "Cappuccino", price: "₦2,500", img: "/m29.png" },
            { name: "Hot Chocolate", price: "₦1,500", img: "/m28.png" }
        ]
    }
];

const Menu = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredMenu = useMemo(() => {
        return MENU_DATA.map(section => ({
            ...section,
            items: section.items.filter(item => 
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (activeCategory === 'All' || activeCategory === section.category)
            )
        })).filter(section => section.items.length > 0);
    }, [searchTerm, activeCategory]);

    return (
        <main className="yum-menu-theatre">
            <div className="menu-epic-banner">
                <Motion.h1 
                    className="banner-title-text"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    Our Menu
                </Motion.h1>
            </div>

            <div className="menu-search-nexus">
                <input 
                    type="text" 
                    placeholder="Search for Jollof, Shawarma, Milkshakes..." 
                    className="search-input-field"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <HiOutlineSearch className="search-icon-node" />
            </div>

            <div className="menu-category-belt">
                <button 
                    className={`category-trigger-node ${activeCategory === 'All' ? 'active' : ''}`}
                    onClick={() => setActiveCategory('All')}
                >
                    <div className="category-icon-vessel"><MdOutlineRestaurantMenu /></div>
                    <span className="category-label-text">All Items</span>
                </button>
                {MENU_DATA.map(section => (
                    <button 
                        key={section.category}
                        className={`category-trigger-node ${activeCategory === section.category ? 'active' : ''}`}
                        onClick={() => setActiveCategory(section.category)}
                    >
                        <div className="category-icon-vessel">{section.icon}</div>
                        <span className="category-label-text">{section.category}</span>
                    </button>
                ))}
            </div>

            <div className="menu-catalog-nexus">
                <AnimatePresence mode='popLayout'>
                    {filteredMenu.length > 0 ? (
                        filteredMenu.map((section) => (
                            <Motion.div 
                                key={section.category}
                                className="catalog-section-group"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                            >
                                <h2 className="catalog-header-title">{section.category}</h2>
                                <div className="catalog-grid-array">
                                    {section.items.map((item, idx) => (
                                        <Motion.div 
                                            key={item.name}
                                            className="catalog-item-capsule"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.02 }}
                                            whileHover={{ y: -10 }}
                                        >
                                            <img src={item.img} alt={item.name} className="item-visual-artifact" />
                                            <h3 className="item-prose-name">{item.name}</h3>
                                            <p className="item-price-tag">{item.price}</p>
                                        </Motion.div>
                                    ))}
                                </div>
                            </Motion.div>
                        ))
                    ) : (
                        <Motion.div className="menu-empty-state" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            Sorry, we couldn't find any results for "{searchTerm}".
                        </Motion.div>
                    )}
                </AnimatePresence>
            </div>
        </main>
    );
};

export default Menu;