import { useState } from 'react';
import MenuItemCard from './MenuItemCard';

const MenuListCard = ({ menuListData, showMenuItems, setShowMenuItemsWithIndex }) => {
    const { title, itemCards } = menuListData?.card?.card;
    const [accordianToggle, setAccordianToggle] = useState(false); 

    return (
        <div className="menu-list py-4 border-b-[16px] border-[#f1f1f6] cursor-pointer" 
            onClick={(e) => {
                setAccordianToggle(!accordianToggle);
                setShowMenuItemsWithIndex();
            }}
        >
            <div className="menu-list-info flex justify-between relative">
                <h3 className="menu-list-title text-[18px] font-bold text-slate-700">{title} ({itemCards?.length ?? ''})</h3>
                {
                    accordianToggle === false ? <i className="fa-solid fa-angle-down"></i> : <i className="fa-solid fa-angle-up"></i> 
                }
            </div>
            {
                showMenuItems ?
                    <div className="menu-items">
                        {itemCards.map(itemCardObj => <MenuItemCard key={itemCardObj?.card?.info?.id} itemCardObj={itemCardObj} />)}
                    </div> :
                    null
            }
        </div>
    );
};

export default MenuListCard;