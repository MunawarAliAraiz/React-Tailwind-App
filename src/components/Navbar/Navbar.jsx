import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  ChevronDownIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import logo from '../../assets/ngc_logo.jpg'
 

// nav list menu
const navListMenuItems = [
  {
    title: "Bussiness Owners",
    link: "/weworkwith/bussiness-owner",
  },
  {
    title: "Investors",
    link: "/weworkwith/investors",
  },
];
 
function NavListMenu({ closeNav}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
  const renderItems = navListMenuItems.map(({ title, link }) => (
    <Link to={link} key={title}>
      <MenuItem onClick={closeNav}>
        <Typography variant="h6" className="mb-1 text-gray-400 lg:text-gray-300 hover:text-black">
          {title}
        </Typography>
      </MenuItem>
    </Link>
  ));
 
  return (
    <React.Fragment>

      {/* Desktop Menu */}
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography href="/weworkwith/bussiness-owner" variant="h4" className="font-normal" onClick={closeNav}>
            <MenuItem className="hidden items-center gap-2 border-none text-xl font-medium lg:flex lg:rounded-md hover:text-black">
              {" We Work With "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="bg-black border-none hidden overflow-visible lg:grid" onClick={closeNav}>
          <ul className="flex w-full flex-col">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>

      {/* Mobile Menu */}
      <MenuItem open={isMenuOpen} handler={setIsMenuOpen} className="hover:text-black flex items-center gap-2 text-lg lg:text-xl font-medium text-white-900 lg:hidden" onClick={closeNav}>
        {" We Work With "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}
 
// nav list component
const navListItems = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About Us",
    link: "/about",
  },
  {
    label: "News",
    link: "/news",
  },
];
 
function NavList({ closeNav}) {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">

      {/* Item 1 */}
      <Link to='/' key='home'>
        <Typography
          key='Home'
          to='/'
          className="font-medium text-lg lg:text-xl text-white"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-md" onClick={closeNav}>
            <span>Home</span>
          </MenuItem>
        </Typography>
        </Link>

      {/* Item 2 */}
      <NavListMenu closeNav={closeNav} />

      {/* Item 3 */}
      <Link to='/about' key="About Us">
        <Typography
          key="About Us"
          to='/about'
          className="font-medium text-lg lg:text-xl text-white"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-md" onClick={closeNav}>
            <span>About Us</span>
          </MenuItem>
        </Typography>
        </Link>

        {/* Item 4 */}
      <Link to='/news' key='news'>
        <Typography
          key='news'
          to='/news'
          className="font-medium text-lg lg:text-xl text-white"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-md" onClick={closeNav}>
            <span> News</span>
          </MenuItem>
        </Typography>
        </Link>
      {/* {navListItems.map(({ label, link }) => (
        <Link to={link} key={label}>
        <Typography
          key={label}
          to={link}
          className="font-medium text-xl text-white"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-md" onClick={closeNav}>
            <span> {label}</span>
          </MenuItem>
        </Typography>
        </Link>
      ))} */}
    </ul>
  );
}
 
export default function Navigationbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
 
  const toggleIsNavOpen = () => {
    setIsNavOpen((cur) => !cur);}

    const closeNav = () => {
      console.log("isNavOpen")
      setIsNavOpen(false);
    };
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);
 
  return (
    <Navbar fullWidth={true} className="bg-black shadow-sm shadow-blue-gray-200 border-none p-2 lg:rounded-md lg:pl-10">
      <div className="flex items-center justify-around text-white-gray-900">
        <div className="bg-black rounded-md">
            {/* Logo */}
            <Link to="/" key={'home'}>
            <img src={logo} alt="Logo" className="w-28 md:w-48 md:h-30 mx-auto rounded-lg" />
            </Link>
        </div>
        <div className="hidden lg:block">
          <NavList  />
        </div>
        <IconButton
          size="lg"
          color="white"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
        
        <Link to="/contact">
        <Button size={window.innerWidth < 768 ? "md": "lg"} variant='gradient' className="hover:bg-white hover:text-black">
          <span>Contact Us</span>
        </Button>
        </Link>
      </div>
      <Collapse open={isNavOpen} className="">
        <NavList closeNav={closeNav}/>
      </Collapse>
    </Navbar>
  );
}