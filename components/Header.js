import logo from '../images/app-icon.svg';
import userIcon from '../images/user-icom.png';
const logoStyling = {
    width : '10% '
}
const headerStyles = {
    height : '10%'
}
const  Header = () => {
    return (
        <div style={headerStyles}>
            <img src={logo} style={logoStyling} alt="My icon"/>
            <input type="search" placeholder="Search for food items"/>
            <img src={userIcon}alt="My user icon"/>
        </div>
    )
};
export default Header;