import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import StyleNavbar from '../components/StyleNavbar';

const Home = () => {
  return (
    <>
        <StyleNavbar />
        <Outlet/>
    </>
  );
};
export default Home;
