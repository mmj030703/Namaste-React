import { VEG_ICON_IMAGE_URL } from '../utils/constants';
import { MENU_ITEM_IMAGE_URL } from '../utils/constants';

const MenuItemCard = ({ itemCardObj }) => {
    const {name, price, defaultPrice, description, imageId} = itemCardObj?.card?.info;

    return (
        <div className="menu-item pt-5 pb-12 flex justify-between border-b-[1px] border-slate-300">
            <div className="menu-card-info">
                <img className="veg-img w-4" src={VEG_ICON_IMAGE_URL} />
                <h3 className="menu-name text-slate-700 font-semibold mt-1">{name}</h3>
                <p className="menu-price text-slate-700 text-sm mt-1">₹ {(price ?? defaultPrice)/(100)}</p>
                <p className="menu-description mt-4 text-[13px] text-slate-400">{description}</p>
            </div>
            <div className="menu-card-image relative flex flex-col justify-center items-center">
                {(imageId) ? <img src={MENU_ITEM_IMAGE_URL + imageId} className="w-[120px] h-24 object-cover rounded-[5px]" /> : null}
                {
                    (imageId) ? 
                        <button className="add-menu-btn absolute -bottom-2 bg-white text-[12px] outline outline-1 outline-slate-300 shadow-[0_10px_20px_5px_rgba(255,255,255,1)] font-bold text-green-600 px-8 py-[7px] rounded-sm">ADD</button> 
                        : 
                        <button className="add-menu-btn bg-white text-[12px] outline outline-1 outline-slate-300 mr-4 font-bold text-green-600 px-8 py-[7px] rounded-sm">ADD</button>
                }
            </div>
        </div>
    );
};

export default MenuItemCard;