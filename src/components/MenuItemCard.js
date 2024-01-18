import { VEG_ICON_IMAGE_URL } from '../utils/constants';
import { MENU_ITEM_IMAGE_URL } from '../utils/constants';

const MenuItemCard = ({ itemCardObj }) => {
    const {name, price, description, imageId} = itemCardObj?.card?.info;

    return (
        <div className="menu-item">
            <div className="menu-card-info">
                <img className="veg-img" src={VEG_ICON_IMAGE_URL} />
                <h3 className="menu-name">{name}</h3>
                <p className="menu-price">₹ {price/(100)}</p>
                <p className="menu-description">{description}</p>
            </div>
            <div className="menu-card-image">
                {(imageId) ? <img src={MENU_ITEM_IMAGE_URL + imageId} /> : null}
                <button className="add-menu-btn">ADD</button>
            </div>
        </div>
    );
};

export default MenuItemCard;