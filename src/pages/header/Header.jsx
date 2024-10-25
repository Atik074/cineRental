import Logo from '../../assets/logo.svg';
import  Ring from '../../assets/ring.svg';
import ShoppingCart from '../../assets/shopping-cart.svg'
import  Moon from '../../assets/icons/moon.svg'
import  Sun from '../../assets/icons/sun.svg'
import { useContext, useState } from 'react';
import CartDetails from '../cinema/CartDetails';
import { MovieContext, ThemeContext } from '../../context';

export default function Header(){
	const [showCart , setShowCart] = useState(false)
	const {cartData} = useContext(MovieContext)
	const {darkMode ,setDarkMode} = useContext(ThemeContext)
	
	

	const handleCartShow =()=>{
		 setShowCart(true)
	}

    return (
		<>
		{
			showCart && <CartDetails onClose={()=>setShowCart(false)}/>
		}
        <header>
		<nav className="container flex items-center justify-between space-x-10 py-6">
			<a href="index.html">
				<img src={Logo} width="139" height="26" alt="logo" />
			</a>

			<ul className="flex items-center space-x-5">
				<li>
					<a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
						<img src={Ring} width="24" height="24" alt="ring" />
					</a>
				</li>
				<li>
					<a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#"
					 onClick={()=>setDarkMode(darkMode =>! darkMode)}
					>
						<img src={darkMode ? Sun : Moon} width="24" height="24" alt="moon" />
					</a>
				</li>
				<li>
					<a 
					onClick={handleCartShow}
					className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
						<img src={ShoppingCart} width="24" height="24" alt="shoppingCart" />
						{
							cartData.length > 0 &&
							<span className='absolute h-[30px] w-[30px] text-center rounded-full -top-[12px] left-[27px] p-[2px] bg-[#12CF6F]'>{cartData.length}</span>
						}
					</a>
				</li>
			</ul>
		</nav>
	</header>
	</>

    );
}