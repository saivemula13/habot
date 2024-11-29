import React from 'react'
import AreYouASuppliyer from './AreYouASuppliyerComponent/AreYouASuppliyer'
import BuyerSupplyerCompont from './BuyerSupplyerCompont/BuyerSupplyerCompont'
import DriveIntoHabot from './DriveIntoHabot/DriveIntoHabot'
import FindYou from './FindYou/FindYou'
import FooterComponent from './FooterComponent/FooterComponent'
import HowItWork from './HowItWork/HowItWork'
import { NavBarComponent } from './NavBarComponent/NavBarComponent'

export const HomeComponent = () => {
    return (
        <>
            <section className='position-relative overflow-hidden'>
                <img src={require("../../Assets/Images/banner-bg.jpg")} className="position-absolute top-0 start-50 translate-middle-x bg-img" alt="banner-img" />
                <NavBarComponent />
                <AreYouASuppliyer />
            </section>
            <section>
                <DriveIntoHabot />
                <BuyerSupplyerCompont />
                <FindYou />
                <HowItWork />
                <FooterComponent />
            </section>
        </>
    )
}