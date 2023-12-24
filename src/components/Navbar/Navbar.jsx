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
  Square3Stack3DIcon,
  ChevronDownIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
 

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
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
  const renderItems = navListMenuItems.map(({ title, link }) => (
    <Link to={link} key={title}>
      <MenuItem>
        <Typography variant="h6" className="mb-1 text-gray-500 lg:text-gray-900 hover:text-black">
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
          <Typography as="a" href="/weworkwith/bussiness-owner" variant="h4" className="font-normal">
            <MenuItem className="hidden items-center gap-2 border-none font-medium lg:flex lg:rounded-md hover:text-black">
              <Square3Stack3DIcon className="h-[18px] w-[18px]" />
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
        <MenuList className="hidden overflow-visible lg:grid">
          <ul className="flex w-full flex-col">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>

      {/* Mobile Menu */}
      <MenuItem className="hover:text-black flex items-center gap-2 font-medium text-white-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-white-500 text-lg" />
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
    icon: UserCircleIcon,
    link: "/",
  },
  {
    label: "About Us",
    icon: CodeBracketSquareIcon,
    link: "/about",
  },
  {
    label: "News",
    icon: CubeTransparentIcon,
    link: "/news",
  },
];
 
function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
      {navListItems.map(({ label, icon, link }, key) => (
        <Link to={link} key={label}>
        <Typography
          key={label}
          to={link}
          className="font-medium text-xl text-white"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-md">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            <span> {label}</span>
          </MenuItem>
        </Typography>
        </Link>
      ))}
    </ul>
  );
}
 
export default function Navigationbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
 
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);
 
  return (
    <Navbar className="container mx-auto bg-black shadow-sm shadow-blue-gray-200 w-full border-none p-2 lg:rounded-md lg:pl-10">
      <div className="relative flex items-center justify-around text-white-gray-900">
      <div className="bg-black rounded-md">
            {/* Logo */}
            <Link to="/" key={'home'}>
            <img src="/src/assets/logo.png" alt="Logo" className="w-28 md:w-48 md:h-30 mx-auto rounded-lg" />
            </Link>
          </div>
        <div className="hidden lg:block">
          <NavList />
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
        <NavList />
      </Collapse>
    </Navbar>
  );
}