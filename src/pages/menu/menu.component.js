import { MenuList } from "../../data/MenuList";
import MenuItem from "../../components/menu-item/menu-item.component";
import "./menu.styles.css";

function Menu() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'> Our Menu</h1>
      <div className='menuList'>
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
