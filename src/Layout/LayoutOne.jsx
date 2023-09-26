import DynamicTitle from '../Components/HelpingComponent/DynamicTitle';
import FromTop from '../Components/HelpingComponent/FromTop';
import GoToTop from '../Components/HelpingComponent/GoToTop';
import Footer from '../Shared/Footer/Footer';
import Nav from '../Shared/Nav/Nav';
import { Outlet } from 'react-router-dom';


const LayoutOne = () => {


    return (
        <div className='overflow-hidden'>
            <DynamicTitle>
                <FromTop>
                    <Nav></Nav>
                    <div className='min-h-[calc(100vh-60px)] bg-dark-1 mt-[64px] lg:mt-[68px]'>
                        <Outlet></Outlet>
                    </div>
                    <Footer></Footer>
                    <GoToTop></GoToTop>
                </FromTop>
            </DynamicTitle>
        </div>
    );
};

export default LayoutOne;