import MenuItemCard from './MenuItemCard';

const MenuListCard = ({ cardKey, menuListData }) => {
    const { title, itemCards } = menuListData?.card?.card;

    return (
        <div className="menu-list">
            <div className="menu-list-info">
                <h3 className="menu-list-title">{title} ({itemCards?.length ?? ''})</h3>
                <div className="toggle-menu-btns">
                    <i className="fa-solid fa-angle-down open"
                        onClick={(e) => {
                            const openBtn = e.target;
                            const closeBtn = openBtn.nextSibling;
                            const menuItems = openBtn.parentElement.parentElement.parentElement.querySelector('.menu-items');

                            menuItems.style.display = "block";
                            openBtn.style.display = "none";
                            closeBtn.style.display = "block";
                        }}
                    >
                    </i>
                    <i className="fa-solid fa-angle-up close"
                        onClick={(e) => {
                            const closeBtn = e.target;
                            const openBtn = closeBtn.previousSibling;
                            const menuItems = closeBtn.parentElement.parentElement.parentElement.querySelector('.menu-items');

                            menuItems.style.display = "none";
                            openBtn.style.display = "block";
                            closeBtn.style.display = "none";
                        }}
                    >
                    </i>
                </div>
            </div>
            <div className="menu-items">
                {itemCards.map(itemCardObj => <MenuItemCard key={itemCardObj?.card?.info?.id} itemCardObj={itemCardObj} />)}
            </div>
        </div>
    );
};

export default MenuListCard;