import React, { Fragment, useState } from "react";

import Event_01_1 from '../../assets/images/Event_01_1.jpg';
import Event_01_2 from '../../assets/images/Event_01_2.jpg';
import Event_01_3 from '../../assets/images/Event_01_3.jpg';
import Event_01_4 from '../../assets/images/Event_01_4.jpg';
import Event_01_5 from '../../assets/images/Event_01_5.jpg';
import Event_01_6 from '../../assets/images/welcome6.jpg';
import Event_01_7 from '../../assets/images/welcome7.jpg';
import Event_01_8 from '../../assets/images/welcome8.jpg';
import Event_01_9 from '../../assets/images/welcome9.jpg';
import Event_01_10 from '../../assets/images/welcome10.jpg';
import Event_01_11 from '../../assets/images/welcome11.jpg';
import Event_01_12 from '../../assets/images/welcome12.jpg';
import Event_01_13 from '../../assets/images/welcome13.jpg';
import Event_01_14 from '../../assets/images/welcome14.jpg';
import Event_01_15 from '../../assets/images/welcome15.jpg';


import Event_02_1 from '../../assets/images/Event_02_1.jpg';
import Event_02_2 from '../../assets/images/Event_02_2.jpg';
import Event_02_3 from '../../assets/images/Event_02_3.jpg';
import Event_02_4 from '../../assets/images/Event_02_4.jpg';
import Event_02_5 from '../../assets/images/Event_02_5.jpg';
import Event_02_6 from '../../assets/images/Event_02_6.jpg';
import Event_02_7 from '../../assets/images/Event_02_7.jpg';
import Event_02_8 from '../../assets/images/Event_02_8.jpg';
import Event_02_9 from '../../assets/images/Event_02_9.jpg';
import Event_02_10 from '../../assets/images/Event_02_10.jpg';
import Event_02_11 from '../../assets/images/Event_02_11.jpg';

import Event_03_1 from '../../assets/images/republic/1.jpg';
import Event_03_2 from '../../assets/images/republic/2.jpg';
import Event_03_3 from '../../assets/images/republic/3.jpg';
import Event_03_4 from '../../assets/images/republic/4.jpg';
import Event_03_5 from '../../assets/images/republic/5.jpg';
import Event_03_6 from '../../assets/images/republic/6.jpg';
import Event_03_7 from '../../assets/images/republic/7.jpg';
import Event_03_9 from '../../assets/images/republic/9.jpg';

import Event_04_1 from '../../assets/images/sports/1.jpg';
import Event_04_2 from '../../assets/images/sports/2.jpg';
import Event_04_3 from '../../assets/images/sports/3.jpg';
import Event_04_4 from '../../assets/images/sports/4.jpg';
import Event_04_5 from '../../assets/images/sports/5.jpg';
import Event_04_6 from '../../assets/images/sports/6.jpg';
import Event_04_7 from '../../assets/images/sports/7.jpg';
import Event_04_8 from '../../assets/images/sports/8.jpg';
import Event_04_9 from '../../assets/images/sports/9.jpg';
import Event_04_10 from '../../assets/images/sports/10.jpg';
import Event_04_11 from '../../assets/images/sports/11.jpg';
import Event_04_12 from '../../assets/images/sports/12.jpg';
import Event_04_13 from '../../assets/images/sports/13.jpg';
import Event_04_14 from '../../assets/images/sports/14.jpg';
import Event_04_15 from '../../assets/images/sports/15.jpg';
import Event_04_16 from '../../assets/images/sports/16.jpg';
import Event_04_17 from '../../assets/images/sports/17.jpg';


import Event_05_1 from '../../assets/images/christmas/1.jpg';
import Event_05_2 from '../../assets/images/christmas/2.jpg';
import Event_05_3 from '../../assets/images/christmas/3.jpg';
import Event_05_4 from '../../assets/images/christmas/4.jpg';
import Event_05_5 from '../../assets/images/christmas/5.jpg';
import Event_05_6 from '../../assets/images/christmas/6.jpg';
import Event_05_7 from '../../assets/images/christmas/7.jpg';
import Event_05_8 from '../../assets/images/christmas/8.jpg';
import Event_05_9 from '../../assets/images/christmas/9.jpg';
import Event_05_10 from '../../assets/images/christmas/10.jpg';
import Event_05_11 from '../../assets/images/christmas/11.jpg';
import Event_05_12 from '../../assets/images/christmas/11.jpg';

import Event_06_1 from '../../assets/images/concert/1.jpg';
import Event_06_2 from '../../assets/images/concert/2.jpg';
import Event_06_3 from '../../assets/images/concert/3.jpg';
import Event_06_4 from '../../assets/images/concert/4.jpg';
import Event_06_5 from '../../assets/images/concert/5.jpg';
import Event_06_6 from '../../assets/images/concert/6.jpg';
import Event_06_7 from '../../assets/images/concert/7.jpg';
import Event_06_8 from '../../assets/images/concert/8.jpg';
import Event_06_9 from '../../assets/images/concert/9.jpg';
import Event_06_10 from '../../assets/images/concert/10.jpg';
import Event_06_11 from '../../assets/images/concert/11.jpg';
import Event_06_12 from '../../assets/images/concert/12.jpg';
import Event_06_13 from '../../assets/images/concert/13.jpg';
import Event_06_14 from '../../assets/images/concert/14.jpg';
import Event_06_15 from '../../assets/images/concert/15.jpg';

import Event_07_1 from '../../assets/images/manthan/1.jpg';
import Event_07_2 from '../../assets/images/manthan/2.jpg';
import Event_07_3 from '../../assets/images/manthan/3.jpg';
import Event_07_4 from '../../assets/images/manthan/4.jpg';
import Event_07_5 from '../../assets/images/manthan/5.jpg';
import Event_07_6 from '../../assets/images/manthan/6.jpg';
import Event_07_7 from '../../assets/images/manthan/7.jpg';
import Event_07_8 from '../../assets/images/manthan/8.jpg';
import Event_07_9 from '../../assets/images/manthan/9.jpg';
import Event_07_10 from '../../assets/images/manthan/10.jpg';
import Event_07_11 from '../../assets/images/manthan/11.jpg';
import Event_07_12 from '../../assets/images/manthan/12.jpg';
import Event_07_13 from '../../assets/images/manthan/13.jpg';
import Event_07_14 from '../../assets/images/manthan/14.jpg';
import Event_07_15 from '../../assets/images/manthan/15.jpg';

import Event_08_1 from '../../assets/images/music/1.jpg';
import Event_08_2 from '../../assets/images/music/2.jpg';
import Event_08_3 from '../../assets/images/music/3.jpg';
import Event_08_4 from '../../assets/images/music/4.jpg';
import Event_08_5 from '../../assets/images/music/5.jpg';
import Event_08_6 from '../../assets/images/music/6.jpg';
import Event_08_7 from '../../assets/images/music/7.jpg';
import Event_08_8 from '../../assets/images/music/8.jpg';
import Event_08_9 from '../../assets/images/music/9.jpg';
import Event_08_10 from '../../assets/images/music/10.jpg';

import Event_08_11 from '../../assets/images/music/11.jpg';
import Event_08_12 from '../../assets/images/music/12.jpg';
import Event_08_13 from '../../assets/images/music/13.jpg';
import Event_08_14 from '../../assets/images/music/14.jpg';
import Event_08_15 from '../../assets/images/music/15.jpg';


import Event_09_1 from '../../assets/images/parent-partnership/1.jpg';
import Event_09_2 from '../../assets/images/parent-partnership/2.jpeg';
import Event_09_3 from '../../assets/images/parent-partnership/3.jpeg';
import Event_09_4 from '../../assets/images/parent-partnership/4.jpeg';
import Event_09_5 from '../../assets/images/parent-partnership/5.jpeg';
import Event_09_6 from '../../assets/images/parent-partnership/6.jpeg';
import Event_09_7 from '../../assets/images/parent-partnership/7.jpeg';
import Event_09_8 from '../../assets/images/parent-partnership/8.jpeg';
import Event_09_9 from '../../assets/images/parent-partnership/9.jpeg';
import Event_09_10 from '../../assets/images/parent-partnership/10.jpg';
import Event_09_11 from '../../assets/images/parent-partnership/11.jpg';
import Event_09_12 from '../../assets/images/parent-partnership/12.jpg';
import Event_09_13 from '../../assets/images/parent-partnership/13.jpg';
import Event_09_14 from '../../assets/images/parent-partnership/14.jpeg';
import Event_09_15 from '../../assets/images/parent-partnership/15.jpeg';
import Event_09_16 from '../../assets/images/parent-partnership/16.jpg';
import Event_09_17 from '../../assets/images/parent-partnership/17.jpg';
import Event_09_18 from '../../assets/images/parent-partnership/18.jpg';
import Event_09_19 from '../../assets/images/parent-partnership/19.jpg';
import Event_09_20 from '../../assets/images/parent-partnership/20.jpg';

import Event_10_1 from '../../assets/images/swar-shankar/1.jpg';
import Event_10_2 from '../../assets/images/swar-shankar/2.jpg';
import Event_10_3 from '../../assets/images/swar-shankar/3.jpg';
import Event_10_4 from '../../assets/images/swar-shankar/4.jpg';
import Event_10_5 from '../../assets/images/swar-shankar/5.jpg';
import Event_10_6 from '../../assets/images/swar-shankar/6.jpg';
import Event_10_7 from '../../assets/images/swar-shankar/7.jpg';
import Event_10_8 from '../../assets/images/swar-shankar/8.jpg';
import Event_10_9 from '../../assets/images/swar-shankar/9.jpg';
import Event_10_10 from '../../assets/images/swar-shankar/10.jpg';
import Event_10_11 from '../../assets/images/swar-shankar/11.jpg';
import Event_10_12 from '../../assets/images/swar-shankar/12.jpg';
import Event_10_13 from '../../assets/images/swar-shankar/13.jpg';
import Event_10_14 from '../../assets/images/swar-shankar/14.jpg';
import Event_10_15 from '../../assets/images/swar-shankar/15.jpg';

import Event_11_1 from '../../assets/images/foundation-day/1.jpg';
import Event_11_2 from '../../assets/images/foundation-day/2.jpg';
import Event_11_3 from '../../assets/images/foundation-day/3.jpg';
import Event_11_4 from '../../assets/images/foundation-day/4.jpg';
import Event_11_5 from '../../assets/images/foundation-day/5.jpg';
import Event_11_6 from '../../assets/images/foundation-day/6.jpg';
import Event_11_7 from '../../assets/images/foundation-day/7.jpg';
import Event_11_8 from '../../assets/images/foundation-day/8.jpg';
import Event_11_9 from '../../assets/images/foundation-day/9.jpg';
import Event_11_10 from '../../assets/images/foundation-day/10.jpg';
import Event_11_11 from '../../assets/images/foundation-day/11.jpg';
import Event_11_12 from '../../assets/images/foundation-day/12.jpg';
import Event_11_13 from '../../assets/images/foundation-day/13.jpg';
import Event_11_14 from '../../assets/images/foundation-day/14.jpg';
import Event_11_15 from '../../assets/images/foundation-day/15.jpg';

import Event_12_1 from '../../assets/images/independence-day/1.jpg';
import Event_12_2 from '../../assets/images/independence-day/2.jpg';
import Event_12_3 from '../../assets/images/independence-day/3.jpg';
import Event_12_4 from '../../assets/images/independence-day/4.jpg';
import Event_12_5 from '../../assets/images/independence-day/5.jpg';
import Event_12_6 from '../../assets/images/independence-day/6.jpg';
import Event_12_7 from '../../assets/images/independence-day/7.jpg';
import Event_12_8 from '../../assets/images/independence-day/8.jpg';
import Event_12_9 from '../../assets/images/independence-day/9.jpg';
import Event_12_10 from '../../assets/images/independence-day/10.jpg';
import Event_12_11 from '../../assets/images/independence-day/11.jpg';


import Event_13_1 from '../../assets/images/guru-pournima/1.jpeg';
import Event_13_2 from '../../assets/images/guru-pournima/2.jpeg';
import Event_13_3 from '../../assets/images/guru-pournima/3.jpeg';
import Event_13_4 from '../../assets/images/guru-pournima/4.jpeg';
import Event_13_5 from '../../assets/images/guru-pournima/5.jpeg';
import Event_13_6 from '../../assets/images/guru-pournima/6.jpeg';
import Event_13_7 from '../../assets/images/guru-pournima/7.jpeg';

import Event_14_1 from '../../assets/images/investiture-ceremony/1.jpg';
import Event_14_2 from '../../assets/images/investiture-ceremony/2.jpg';
import Event_14_3 from '../../assets/images/investiture-ceremony/3.jpg';
import Event_14_4 from '../../assets/images/investiture-ceremony/4.jpg';
import Event_14_5 from '../../assets/images/investiture-ceremony/5.jpg';
import Event_14_6 from '../../assets/images/investiture-ceremony/6.jpg';
import Event_14_7 from '../../assets/images/investiture-ceremony/7.jpg';

import Event_15_1 from '../../assets/images/yoga/1.jpg';
import Event_15_2 from '../../assets/images/yoga/2.jpg';
import Event_15_3 from '../../assets/images/yoga/3.jpg';
import Event_15_4 from '../../assets/images/yoga/4.jpg';
import Event_15_5 from '../../assets/images/yoga/5.jpg';
import Event_15_6 from '../../assets/images/yoga/6.jpg';
import Event_15_7 from '../../assets/images/yoga/7.jpg';
import Event_15_8 from '../../assets/images/yoga/8.jpg';
import Event_15_9 from '../../assets/images/yoga/9.jpeg';

import Event_16_1 from '../../assets/images/care-club/1.jpg';
import Event_16_2 from '../../assets/images/care-club/2.jpg';
import Event_16_3 from '../../assets/images/care-club/3.jpg';
import Event_16_4 from '../../assets/images/care-club/4.jpg';
import Event_16_5 from '../../assets/images/care-club/5.jpg';

import Event_17_1 from '../../assets/images/csr/1.jpg';
import Event_17_2 from '../../assets/images/csr/2.jpg';
import Event_17_3 from '../../assets/images/csr/3.jpg';
import Event_17_4 from '../../assets/images/csr/4.jpg';
import Event_17_5 from '../../assets/images/csr/5.jpg';
import Event_17_6 from '../../assets/images/csr/6.jpg';
import Event_17_7 from '../../assets/images/csr/7.jpg';
import Event_17_8 from '../../assets/images/csr/8.jpg';


import Event_18_1 from '../../assets/images/art-mania/1.jpg';
import Event_18_2 from '../../assets/images/art-mania/2.jpg';
import Event_18_3 from '../../assets/images/art-mania/3.jpg';
import Event_18_4 from '../../assets/images/art-mania/4.jpg';
import Event_18_5 from '../../assets/images/art-mania/5.jpg';
import Event_18_6 from '../../assets/images/art-mania/6.jpg';
import Event_18_7 from '../../assets/images/art-mania/7.jpg';
import Event_18_8 from '../../assets/images/art-mania/8.jpg';
import Event_18_9 from '../../assets/images/art-mania/9.jpg';
import Event_18_10 from '../../assets/images/art-mania/10.jpg';

import Event_19_1 from '../../assets/images/sports-day/1.jpg';
import Event_19_2 from '../../assets/images/sports-day/2.jpg';
import Event_19_3 from '../../assets/images/sports-day/3.jpg';
import Event_19_4 from '../../assets/images/sports-day/4.jpg';
import Event_19_5 from '../../assets/images/sports-day/5.jpg';
import Event_19_6 from '../../assets/images/sports-day/6.jpg';
import Event_19_7 from '../../assets/images/sports-day/7.jpg';
import Event_19_8 from '../../assets/images/sports-day/8.jpg';
import Event_19_9 from '../../assets/images/sports-day/9.jpg';

import Event_20_1 from '../../assets/images/field-trip/1.jpg';
import Event_20_2 from '../../assets/images/field-trip/2.jpg';
import Event_20_3 from '../../assets/images/field-trip/3.jpg';
import Event_20_4 from '../../assets/images/field-trip/4.jpg';
import Event_20_5 from '../../assets/images/field-trip/5.jpg';
import Event_20_6 from '../../assets/images/field-trip/6.jpg';
import Event_20_7 from '../../assets/images/field-trip/7.jpg';
import Event_20_8 from '../../assets/images/field-trip/8.jpg';
import Event_20_9 from '../../assets/images/field-trip/9.jpg';
import Event_20_10 from '../../assets/images/field-trip/10.jpg';
import Event_20_11 from '../../assets/images/field-trip/11.jpg';
import Event_20_12 from '../../assets/images/field-trip/12.jpg';


import Carousel from 'react-bootstrap/Carousel'

const Events = () => {
    const [galleryToggle, setGalleryToggle] = useState("WelcomeDay");
    const [activeState, setActiveState] = useState("WelcomeDay");
    const EventGalleryClickHandler = (DataId) => {
        setGalleryToggle(DataId);
        setActiveState(DataId);
    }
    return (
        <Fragment>

            <div className="">
                <div className="container custom_spacing text-center">
                    <h3 className="text-center subheadingM mgBtmZero textPinkColor">Events</h3>
                </div>
                <div className="container custom_spacing custom_spacing_top_zero">
                    <div className="row eventCarousel">

                        <Carousel interval={null} variant="dark" className="mobileHide">
                            <Carousel.Item>
                                <button className="events_button" id={activeState == "WelcomeDay" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('WelcomeDay')}>Welcome Day 1st April 2019</button>
                                <button className="events_button" id={activeState == "Farewell" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('Farewell')}>Farewell 2018-19</button>
                                <button className="events_button" id={activeState == "Republic" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('Republic')}>Republic day 2018-19</button>
                                <button className="events_button" id={activeState == "Sports" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('Sports')}>Sports day 2018-19</button>
                            </Carousel.Item>
                            <Carousel.Item>
                                <button className="events_button" id={activeState == "Christmas" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('Christmas')}>Christmas Celebration 2018-19</button>
                                <button className="events_button" id={activeState == "Concert" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('Concert')}>Concert 2018-19</button>
                                <button className="events_button" id={activeState == "Manthan" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('Manthan')}>Manthan Exhibition</button>
                                <button className="events_button" id={activeState == "Music" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('Music')}>Music studio 2018-19</button>
                            </Carousel.Item>
                            <Carousel.Item>
                                <button className="events_button" id={activeState == "Parent" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('Parent')}>Parent Partnership Programme</button>
                                <button className="events_button" id={activeState == "Swar" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('Swar')}>Swar Shankar Competition</button>
                                <button className="events_button" id={activeState == "Foundation" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('Foundation')}>Foundation Day Celebrations</button>
                                <button className="events_button" id={activeState == "Independence" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('Independence')}>Independence Day Celebrations</button>
                            </Carousel.Item>
                            <Carousel.Item>
                                <button className="events_button" id={activeState == "Guru" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('Guru')}>Guru Pournima Celebrations</button>
                                <button className="events_button" id={activeState == "Investiture" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('Investiture')}>Investiture Ceremony</button>
                                <button className="events_button" id={activeState == "Yoga" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('Yoga')}>Yoga Day Celebrations</button>
                                <button className="events_button" id={activeState == "Care" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('Care')}>Care Club</button>
                            </Carousel.Item>
                            <Carousel.Item>
                                <button className="events_button" id={activeState == "CSR" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('CSR')}>CSR - Toy Collection Drive</button>
                                <button className="events_button" id={activeState == "Art" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('Art')}>Art Mania (Std. IV to VI)</button>
                                <button className="events_button" id={activeState == "SportsDay" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('SportsDay')}>Sports Day (Std. I to III)</button>
                                <button className="events_button" id={activeState == "Field" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('Field')}>Field Trips</button>
                            </Carousel.Item>

                        </Carousel>
                        <Carousel interval={null} variant="dark" className="desktopHide">
                            <Carousel.Item>
                                <div className="displayFlexMobile">
                                    <button className="events_button" id={activeState == "WelcomeDay" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('WelcomeDay')}>Welcome Day 1st April 2019</button>
                                    <button className="events_button" id={activeState == "Farewell" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('Farewell')}>Farewell 2018-19</button>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="displayFlexMobile">
                                    <button className="events_button" id={activeState == "Republic" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('Republic')}>Republic day 2018-19</button>
                                    <button className="events_button" id={activeState == "Sports" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('Sports')}>Sports day 2018-19</button>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="displayFlexMobile">
                                    <button className="events_button" id={activeState == "Christmas" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('Christmas')}>Christmas Celebration 2018-19</button>
                                    <button className="events_button" id={activeState == "Concert" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('Concert')}>Concert 2018-19</button>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="displayFlexMobile">
                                    <button className="events_button" id={activeState == "Manthan" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('Manthan')}>Manthan Exhibition</button>
                                    <button className="events_button" id={activeState == "Music" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('Music')}>Music studio 2018-19</button>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="displayFlexMobile">
                                    <button className="events_button" id={activeState == "Parent" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('Parent')}>Parent Partnership Programme</button>
                                    <button className="events_button" id={activeState == "Swar" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('Swar')}>Swar Shankar Competition</button>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="displayFlexMobile">
                                    <button className="events_button" id={activeState == "Foundation" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('Foundation')}>Foundation Day Celebrations</button>
                                    <button className="events_button" id={activeState == "Independence" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('Independence')}>Independence Day Celebrations</button>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="displayFlexMobile">
                                    <button className="events_button" id={activeState == "Yoga" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('Yoga')}>Yoga Day Celebrations</button>
                                    <button className="events_button" id={activeState == "Care" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('Care')}>Care Club</button>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="displayFlexMobile">
                                    <button className="events_button" id={activeState == "Guru" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('Guru')}>Guru Pournima Celebrations</button>
                                    <button className="events_button" id={activeState == "Investiture" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('Investiture')}>Investiture Ceremony</button>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="displayFlexMobile">
                                    <button className="events_button" id={activeState == "CSR" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('CSR')}>CSR - Toy Collection Drive</button>
                                    <button className="events_button" id={activeState == "Art" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('Art')}>Art Mania (Std. IV to VI)</button>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="displayFlexMobile">
                                    <button className="events_button" id={activeState == "SportsDay" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('SportsDay')}>Sports Day (Std. I to III)</button>
                                    <button className="events_button" id={activeState == "Field" ? "active_event_button" : ""} onClick={() => EventGalleryClickHandler('Field')}>Field Trips</button>
                                </div>
                            </Carousel.Item>

                        </Carousel>

                    </div>
                </div>
                {galleryToggle == "WelcomeDay" &&
                    <div className="container custom_spacing custom_spacing_top_zero">
                        <div className="row">
                            <Carousel interval={2000} variant="dark">
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_01_1} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_01_2} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_01_3} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_01_4} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_01_5} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_01_6} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_01_7} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_01_8} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_01_9} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_01_10} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_01_11} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_01_12} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_01_13} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_01_14} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_01_15} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                
                            </Carousel>
                        </div>
                    </div>
                }

                {galleryToggle == "Farewell" &&
                    <div className="container custom_spacing custom_spacing_top_zero">

                        <div className="row">
                            <Carousel interval={2000} variant="dark">
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_02_1} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_02_2} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_02_3} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_02_4} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_02_5} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_02_6} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_02_7} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_02_8} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_02_9} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_02_10} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_02_11} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                }
                {galleryToggle == "Republic" &&
                    <div className="container custom_spacing custom_spacing_top_zero">

                        <div className="row">
                            <Carousel interval={2000} variant="dark">
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_03_1} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_03_2} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_03_3} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_03_4} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_03_5} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_03_6} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_03_7} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                              
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_03_9} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                }
                {galleryToggle == "Sports" &&
                    <div className="container custom_spacing custom_spacing_top_zero">

                        <div className="row">
                            <Carousel interval={2000} variant="dark">
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_04_1} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_04_2} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_04_3} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_04_4} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_04_5} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_04_6} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_04_7} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_04_8} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_04_9} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_04_10} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_04_11} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_04_12} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_04_13} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_04_14} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_04_15} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_04_16} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_04_17} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                }
                {galleryToggle == "Christmas" &&
                    <div className="container custom_spacing custom_spacing_top_zero">

                        <div className="row">
                            <Carousel interval={2000} variant="dark">
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_05_1} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_05_2} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_05_3} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_05_4} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_05_5} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_05_6} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_05_7} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_05_8} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_05_9} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_05_10} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_05_11} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_05_12} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                }
                {galleryToggle == "Concert" &&
                    <div className="container custom_spacing custom_spacing_top_zero">

                        <div className="row">
                            <Carousel interval={2000} variant="dark">
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_06_1} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_06_2} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_06_3} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_06_4} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_06_5} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_06_5} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_06_6} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_06_7} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_06_8} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_06_9} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_06_10} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_06_11} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_06_12} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_06_13} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_06_14} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_06_15} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                }
                {galleryToggle == "Manthan" &&
                    <div className="container custom_spacing custom_spacing_top_zero">

                        <div className="row">
                            <Carousel interval={2000} variant="dark">
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_07_1} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_07_2} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_07_3} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_07_4} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_07_5} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_07_6} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_07_7} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_07_8} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_07_9} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_07_10} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_07_11} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_07_12} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_07_13} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_07_14} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_07_15} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                }
                {galleryToggle == "Music" &&
                    <div className="container custom_spacing custom_spacing_top_zero">

                        <div className="row">
                            <Carousel interval={2000} variant="dark">
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_08_1} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_08_2} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_08_3} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_08_4} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_08_5} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_08_6} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_08_7} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_08_8} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_08_9} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_08_10} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_08_11} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_08_12} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_08_13} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_08_14} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_08_15} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                }
                {galleryToggle == "Parent" &&
                    <div className="container custom_spacing custom_spacing_top_zero">

                        <div className="row">
                            <Carousel interval={2000} variant="dark">
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_09_1} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_09_2} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_09_3} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_09_4} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_09_5} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_09_6} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_09_7} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_09_8} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_09_9} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_09_10} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_09_11} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_09_12} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_09_13} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_09_14} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_09_15} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_09_16} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_09_17} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_09_18} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_09_19} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_09_20} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                }
                {galleryToggle == "Swar" &&
                    <div className="container custom_spacing custom_spacing_top_zero">

                        <div className="row">
                            <Carousel interval={2000} variant="dark">
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_10_1} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_10_2} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_10_3} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_10_4} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_10_5} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_10_6} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_10_7} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_10_8} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_10_9} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_10_10} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_10_11} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_10_12} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_10_13} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_10_14} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_10_15} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                }
                {galleryToggle == "Foundation" &&
                    <div className="container custom_spacing custom_spacing_top_zero">

                        <div className="row">
                            <Carousel interval={2000} variant="dark">
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_11_1} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_11_2} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_11_3} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_11_4} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_11_5} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_11_6} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_11_7} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_11_8} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_11_9} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_11_10} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_11_11} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_11_12} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_11_13} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_11_14} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_11_15} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                }
                {galleryToggle == "Independence" &&
                    <div className="container custom_spacing custom_spacing_top_zero">

                        <div className="row">
                            <Carousel interval={2000} variant="dark">
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_12_1} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_12_2} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_12_3} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_12_4} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_12_5} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_12_6} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_12_7} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_12_8} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_12_9} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_12_10} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_12_11} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                
                            </Carousel>
                        </div>
                    </div>
                }
                {galleryToggle == "Guru" &&
                    <div className="container custom_spacing custom_spacing_top_zero">

                        <div className="row">
                            <Carousel interval={2000} variant="dark">
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_13_1} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_13_2} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_13_3} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_13_4} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_13_5} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_13_6} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_13_7} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                }
                {galleryToggle == "Investiture" &&
                    <div className="container custom_spacing custom_spacing_top_zero">

                        <div className="row">
                            <Carousel interval={2000} variant="dark">
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_14_1} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_14_2} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_14_3} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_14_4} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_14_5} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_14_6} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_14_7} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                }
                {galleryToggle == "Yoga" &&
                    <div className="container custom_spacing custom_spacing_top_zero">

                        <div className="row">
                            <Carousel interval={2000} variant="dark">
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_15_1} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_15_2} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_15_3} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_15_4} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_15_5} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_15_6} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_15_7} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_15_8} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_15_9} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                }
                {galleryToggle == "Care" &&
                    <div className="container custom_spacing custom_spacing_top_zero">

                        <div className="row">
                            <Carousel interval={2000} variant="dark">
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_16_1} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_16_2} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_16_3} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_16_4} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_16_5} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                }
                {galleryToggle == "CSR" &&
                    <div className="container custom_spacing custom_spacing_top_zero">

                        <div className="row">
                            <Carousel interval={2000} variant="dark">
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_17_1} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_17_2} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_17_3} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_17_4} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_17_5} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_17_6} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_17_7} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_17_8} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                }
                {galleryToggle == "Art" &&
                    <div className="container custom_spacing custom_spacing_top_zero">

                        <div className="row">
                            <Carousel interval={2000} variant="dark">
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_18_1} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_18_2} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_18_3} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_18_4} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_18_5} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_18_6} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_18_7} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_18_8} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_18_9} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_18_10} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                }
                {galleryToggle == "SportsDay" &&
                    <div className="container custom_spacing custom_spacing_top_zero">

                        <div className="row">
                            <Carousel interval={2000} variant="dark">
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_19_1} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_19_2} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_19_3} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_19_4} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_19_5} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_19_6} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_19_7} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_19_8} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_19_9} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                }
                {galleryToggle == "Field" &&
                    <div className="container custom_spacing custom_spacing_top_zero">

                        <div className="row">
                            <Carousel interval={2000} variant="dark">
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_20_1} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_20_2} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_20_3} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_20_4} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_20_5} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_20_6} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_20_7} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_20_8} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_20_9} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_20_10} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_20_11} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-md-offset-2 eventsImage">
                                            <img src={Event_20_12} className='img_res' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                
                            </Carousel>
                        </div>
                    </div>
                }
            </div>
        </Fragment>
    )
}
export default Events