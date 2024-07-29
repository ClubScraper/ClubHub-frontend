import React from 'react';

const Mainpage = () => (
    <div className="main-page">
        <header className="header">
            <img src="assets/images/logo.png" alt="Logo" className="logo" />
            <nav className="nav">
                <button className="nav-button">events</button>
                <button className="nav-button">hiring</button>
                <button className="nav-button"><a href="/clublogin">login</a></button>
                <button className="nav-button">☰</button>
            </nav>
        </header>
        <div className="content">
            <h1 className="title">UofT ClubHUB</h1>
            <input type="text" placeholder="Search for club..." className="search-bar" />
            <button className="discover-button">Discover new clubs</button>
            <div className="container2">
                <div className="card2">
                    <span></span>
                    <div className="prBox" data-title="Scarborough">
                        <img src="assets/images/utsc.jpg" alt="latte" data-aos="fade-right" />
                    </div>
                    <div className="content2">
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida, urna at interdum vestibulum, 
                                nulla erat euismod magna, eget tincidunt nisi tortor id ipsum. Cras gravida neque nec ipsum sagittis posuere.</p>
                            <button className='description'>Click me!</button>
                        </div>
                    </div>
                </div>

                <div className="card2">
                    <span></span>
                    <div className="prBox" data-title="St. George">
                        <img src="assets/images/utsg.jpg" alt="cappucino" data-aos="fade-right" />
                    </div>
                    <div className="content2">
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida, urna at interdum vestibulum, 
                                nulla erat euismod magna, eget tincidunt nisi tortor id ipsum. Cras gravida neque nec ipsum sagittis posuere.</p>
                            <button className='description'>Click me!</button>
                        </div>
                    </div>
                </div>

                <div className="card2">
                    <span></span>
                    <div className="prBox" data-title="Mississauga">
                        <img src="assets/images/utm.jpg" alt="Espresso" data-aos="fade-right" />
                    </div>
                    <div className="content2">
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida, urna at interdum vestibulum, 
                                nulla erat euismod magna, eget tincidunt nisi tortor id ipsum. Cras gravida neque nec ipsum sagittis posuere.</p>
                            <button className='description'>Click me!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Mainpage;
