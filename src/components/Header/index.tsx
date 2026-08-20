import { Container } from "../Container";
import { Menu } from "../Menu";
import logo from "./../../assets/logo.png";
import bg from "./../../assets/bg.jpg";

export const Header = () => {
    return (
        <div className="flex flex-col">
            <Container>
                <div className="py-8 flex justify-between items-center">
                    <img 
                        className="max-w-11"
                        src={logo} 
                        alt="Logo" 
                    />
                    <Menu />
                    <div>Search</div>     
                </div> 
            </Container>
            <div>
                <img src={bg} alt="banner" />
            </div>
        </div>    
    )
};