import React from 'react'
import "./style.css"
import menu from "./menuApi"
import MenuCard from "./MenuCard.jsx"

const Resturant = () => {
    const [menuData, setmenuData] = React.useState(menu);

    const filteritem = (category) => {
        const updatedList = menu.filter((curElem) => {
            return curElem.category === category;
        });
        setmenuData(updatedList);
    }
    return (
        <>
            <nav className='navbar'>
                <div className='btn-group'>
                    <button className='btn-group__item' onClick={()=>filteritem("breakfast")}>BreakFast</button>
                    <button className='btn-group__item' onClick={()=>filteritem("lunch")}>Lunch</button>
                    <button className='btn-group__item' onClick={() => filteritem("dinner")}>Dinner</button>
                    <button className='btn-group__item' onClick={()=>filteritem("evening")}>Evening</button>
                    <button className='btn-group__item' onClick={()=> setmenuData(menu)}>All</button>
                </div>
            </nav>
            <MenuCard menuData = {menuData} />
        </>
    );
}

export default Resturant