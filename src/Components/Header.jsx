import React, { useState } from 'react';
import Sidebar from './Sidebar';
import CreateContestPopUp from './Widgets/CreateContestPopUp';
import { useNavigate } from 'react-router-dom';

const Header = ({isSessionActive}) => {
    const [dropdownOpen, setDropdownOpen] = useState(null);
	const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenDD, setIsOpenDD] = useState(false)
    const userName = localStorage.getItem("userName");
	const navigate = useNavigate();
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleMouseEnter = (item) => {
        setDropdownOpen(item);
    };

    const handleMouseLeave = () => {
    };

    const handleFindClick = () => {
    navigate("view_contest")
    };
    const handleLogout = async () => {
        try {
          const response = await fetch(`${process.env.REACT_APP_API_URL}/logout`, {
            method: 'GET',
            credentials: 'include', // To send cookies with the request
          });
    
          if (response.ok) {
            console.log('Logout successful');
            // Optionally handle any UI updates or redirects after logout
            navigate('/'); // Redirect to login or another page
          } else {
            console.error('Failed to log out:', response.statusText);
          }
        } catch (error) {
          console.error('Error during logout:', error);
        }
      };
    
    return (
		<div>
        <header className="bg-gray-900 fixed top-0 w-full z-50 shadow-md">
            <div className="flex justify-between items-center   py-3 max-w-screen-xl" style={{ margin: "0 5%" }}>
                {/* Logo Section */}
                <div className="flex ml-2 items-center cursor-pointer" onClick={()=> navigate('/')}>
                    <img 
                        className="mr-2" 
                        src="https://superbowlpoolsite.com/img/logos/sbps_light_100px.png" 
                        width="47" 
                        alt="SBPS Logo" 
                    />
                    <span className="text-white text-2xl font-bold">SBPS</span>
                </div>
                <div className="block md:hidden">
                    <button onClick={toggleSidebar} className="text-white">
                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>

                {/* Navigation Section */}
                <nav className="relative md:block hidden" onMouseLeave={handleMouseLeave}>
                    <ul className=" flex space-x-6">
                        {['NFL', 'NCAA FB', 'NBA', 'MLB', 'Sizes', 'Sports', 'Find'].map((item) => (
                            <li key={item} className="relative" style={{color:'white'}}>
                                {item === 'Find' ? (
                                    <span
                                        onClick={handleFindClick}
										
                                        className=" cursor-pointer hover:text-[#6366f1]"
										
                                    >
                                        {item}
                                    </span>
                                ) : (
                                    <span
                                        onMouseEnter={() => handleMouseEnter(item)}
                                        className={` cursor-pointer hover:text-[#6366f1]`}
                                    >
                                        {item}
                                        <span className="inline-block ml-1">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-md  text-token-text-tertiary">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L12 14.5858L17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289C19.0976 9.68342 19.0976 10.3166 18.7071 10.7071L12.7071 16.7071C12.5196 16.8946 12.2652 17 12 17C11.7348 17 11.4804 16.8946 11.2929 16.7071L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289Z" fill="currentColor"></path>
                                            </svg>
                                        </span>
                                    </span>
                                )}
                                {dropdownOpen === item && (
                                    <ul  onMouseLeave={()=>  setDropdownOpen(null)} style={{width:'fit-content'}} className="absolute left-0 mt-1 bg-gray-800 rounded shadow-lg">
                                        {/* Different options for each navigation item */}
                                        {item === 'NFL' && (
                                            <>
                                <div style={{width:'60vw'}} className="absolute left-0 mt-2 bg-gray-800 rounded shadow-lg p-4">
								<div className="py-1 grid md:grid-cols-4 grid-cols-1 gap-4">
        {/* Popular Contests */}
        <div>
            <h4 className="text-light text-white px-3 mb-2">Popular Contests</h4>
            <ul className="list-unstyled text-[yellow]">
                <li><a className="block  px-3 py-1" href="/super-bowl-squares-contest-online">2025 Super Bowl</a></li>
                <li><a className="block  px-3 py-1" href="/thx">Thanksgiving Squares</a></li>
                <li><a className="block  px-3 py-1" href="/christmas-squares-fundraiser-online">Christmas Squares</a></li>
                <li><a className="block  px-3 py-1" href="/mnf">Monday Night Squares</a></li>
            </ul>
        </div>

        {/* Team List 1 */}
        <div>
            <ul className="list-unstyled">
                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/89/arizona-cardinals-schedule">Arizona Cardinals</a></li>
                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/85/atlanta-falcons-schedule">Atlanta Falcons</a></li>
                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/65/baltimore-ravens-schedule">Baltimore Ravens</a></li>
                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/61/buffalo-bills-schedule">Buffalo Bills</a></li>


        
                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/86/carolina-panthers-schedule">Carolina Panthers</a></li>
                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/81/chicago-bears-schedule">Chicago Bears</a></li>
                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/66/cincinnati-bengals-schedule">Cincinnati Bengals</a></li>
                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/67/cleveland-browns-schedule">Cleveland Browns</a></li>

                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/77/dallas-cowboys-schedule">Dallas Cowboys</a></li>
                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/73/denver-broncos-schedule">Denver Broncos</a></li>
                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/82/detroit-lions-schedule">Detroit Lions</a></li>
				
            </ul>
        </div>

        {/* Additional Teams */}
        <div>
            
            <ul className="list-unstyled">
			<li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/83/green-bay-packers-schedule">Green Bay Packers</a></li>

                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/69/houston-texans-schedule">Houston Texans</a></li>
                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/70/indianapolis-colts-schedule">Indianapolis Colts</a></li>
                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/71/jacksonville-jaguars-schedule">Jacksonville Jaguars</a></li>
                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/74/kansas-city-chiefs-schedule">Kansas City Chiefs</a></li>
				<li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/82/las-vegas-raiders-schedule">Las Vegas Raiders</a></li>
				<li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/82/los-angeles-charger-schedule">Los Angeles Charger</a></li>
				<li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/82/los-angeles-rams-schedule">Los Angeles Rams</a></li>
				<li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/82/miami-dolphins-schedule">Miami Dolphins</a></li>
				<li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/82/minnesota-viking-schedule">Minnesota Vikings</a></li>
				<li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/82/new-england-patriots-schedule">New England Patriots</a></li>



		    </ul>
        </div>
		  {/* Additional Teams */}
		  <div>
            
            <ul className="list-unstyled">
			<li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/83/new-orleans-saints-schedule">New Orleans Saints</a></li>

                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/69/new-york-giants">New York Giants</a></li>
                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/70/new-york-jets-schedule">New York Jets</a></li>
                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/71/philadelphia-eagles-schedule">Philadelphia Eagles</a></li>
                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/74/Pittsburgh-steelers-schedule">Pittsburgh Steelers</a></li>
				<li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/82/san-franscisco-49ers-schedule">San Franscisco 49ers</a></li>
				<li><a className="block thite hover:bg-gray-700 px-3 py-1" href="/team/82/seattle-seahawks-schedule">Seattle Seahawks</a></li>
				<li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/82/tampa-bay-buccane-schedule">Tampa Bay Buccane</a></li>
				<li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/82/tennessee-titans-schedule">Tennessee Titans</a></li>
				<li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="/team/82/washington-commander-schedule">Washington Commander</a></li>



		    </ul>
        </div>
    </div>
</div>

                                            </>
                                        )}
                                        {item === 'NCAA FB' && (
                                            <>
                                                <div style={{ width: '40vw' }} className="absolute left-0 mt-2 bg-gray-800 rounded shadow-lg p-4">
                                                    <div className="py-1 grid md:grid-cols-3 grid-col-1 gap-4">
                                                        {/* NCAA FB Teams */}
                                                        <div>
                                                            <ul className="list-unstyled">
                                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Alabama</a></li>
                                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Arizona State</a></li>
                                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Arizona</a></li>
                                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Auburn</a></li>
                                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Clemson</a></li>
                                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Colorado</a></li>
                                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Duke</a></li>
                                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Florida</a></li>
                                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Florida State</a></li>
                                                              <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Georgia</a></li>
                                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Iowa</a></li>
                                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Kansas</a></li>
                                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Kansas State</a></li>
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <ul className="list-unstyled">
                                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Kentucky</a></li>
                                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">LSU</a></li>
                                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Maryland</a></li>
                                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Michigan State</a></li>
                                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Michigan</a></li>
                                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Missouri</a></li>
                                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Nebraska</a></li>
                                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">North Carolina</a></li>
                                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Notre Dame</a></li>
                                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Ohio State</a></li>
                                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Oklahoma</a></li>
                                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Oklahoma State</a></li>
																<li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Ole Miss</a></li>

                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <ul className="list-unstyled">
                                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Oregon</a></li>
                                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Penn State</a></li>
                                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Tennessee</a></li>
                                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Texas</a></li>
                                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Texas A&M</a></li>
                                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">USC</a></li>
                                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Utah</a></li>
                                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Vanderbilt</a></li>
                                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Virginia</a></li>
                                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Virginia Tech</a></li>
                                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Washington</a></li>
                                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Wisconsin</a></li>
															
                                                                <li><a className="block text-[yellow]  px-3 py-1" href="#">All Other Teams</a></li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </>
                                        )}
                                        {item === 'NBA' && (
                                            <>
                                                 <ul className="absolute w-[50vw] bg-gray-800 shadow-lg p-4">
                                    <div className="grid md:grid-cols-3 grid-col-1 gap-2">
                                        <div>
                                            <ul className="list-unstyled">
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Atlanta Hawks</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Boston Celtics</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Brooklyn Nets</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Charlotte Hornets</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Chicago Bulls</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Cleveland Cavaliers</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Dallas Mavericks</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Denver Nuggets</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Detroit Pistons</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Golden State Warriors</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul className="list-unstyled">
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Houston Rockets</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Indiana Pacers</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">LA Clippers</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Los Angeles Lakers</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Memphis Grizzlies</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Miami Heat</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Milwaukee Bucks</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Minnesota Timberwolves</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">New Orleans Pelicans</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">New York Knicks</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul className="list-unstyled">
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Oklahoma City Thunder</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Orlando Magic</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Philadelphia 76ers</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Phoenix Suns</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Portland Trail Blazers</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Sacramento Kings</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">San Antonio Spurs</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Toronto Raptors</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Utah Jazz</a></li>
                                                <li><a className="block  text-white hover:bg-gray-700 px-3 py-1" href="#">Washington Wizards</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </ul>
                        
                                            </>
                                        )}
                                        {item === 'MLB' && (
                                            <>
<ul className="absolute w-[50vw] bg-gray-800 shadow-lg p-4">
                                    <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                                        <div>
                                            <ul className="list-unstyled">
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Arizona Diamondbacks</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Atlanta Braves</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Baltimore Orioles</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Boston Red Sox</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Chicago Cubs</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Chicago White Sox</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Cincinnati Reds</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Cleveland Guardians</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Colorado Rockies</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Detroit Tigers</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul className="list-unstyled">
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Houston Astros</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Kansas City Royals</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Los Angeles Angels</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Los Angeles Dodgers</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Miami Marlins</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Milwaukee Brewers</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Minnesota Twins</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">New York Mets</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">New York Yankees</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Oakland Athletics</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul className="list-unstyled">
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Philadelphia Phillies</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Pittsburgh Pirates</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">San Diego Padres</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">San Francisco Giants</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Seattle Mariners</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">St. Louis Cardinals</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Tampa Bay Rays</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Texas Rangers</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Toronto Blue Jays</a></li>
                                                <li><a className="block text-white hover:bg-gray-700 px-3 py-1" href="#">Washington Nationals</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </ul>				
                                            </>
                                        )}
                                        {item === 'Sizes' && (
                                            <>
											<ul className="absolute w-[15vw] text-center bg-gray-800 shadow-lg">
                                                <li><a className="block px-4 py-2 text-white hover:bg-gray-700" href="#">100 Squares</a></li>
                                                <li><a className="block px-4 py-2 text-white hover:bg-gray-700" href="#">50 Squares</a></li>
												<li><a className="block px-4 py-2 text-white hover:bg-gray-700" href="#">25 Squares</a></li>
                                                <li><a className="block px-4 py-2 text-white hover:bg-gray-700" href="#">Custom Sizes</a></li>
</ul>
                                            </>
                                        )}
                                        {item === 'Sports' && (
                                            <>
	<ul className="absolute w-[15vw] text-center bg-gray-800 shadow-lg">
            <li><a className='block px-4 py-2 text-white hover:bg-gray-700' href="/super-bowl-squares-contest-online">Super Bowl Squares</a></li>
            <li><a className="block px-4 py-2 text-white hover:bg-gray-700" href="/thx">Thanksgiving Squares</a></li>
            <li><a className="block px-4 py-2 text-white hover:bg-gray-700" href="/christmas-squares-fundraiser-online">Christmas Squares</a></li>
            <li><a className="block px-4 py-2 text-white hover:bg-gray-700" href="/mnf">MNF Squares</a></li>
            <li><a className="block px-4 py-2 text-white hover:bg-gray-700" href="/tnf">TNF Squares</a></li>
            <li><a className="block px-4 py-2 text-white hover:bg-gray-700" href="/snf">SNF Squares</a></li>
            <li><a className="block px-4 py- 2 text-white hover:bg-gray-700" href="/allTeams">Team Schedules</a></li>
            <li><a className="block px-4 py-2 text-white hover:bg-gray-700" href="/customsquares">Custom Contest</a></li>
            <li><a className="block px-4 py-2 text-white hover:bg-gray-700" href="/world-series-pool">World Series Squares</a></li>
            <li><a className="" href="/march-madness-squares-board">March Madness Squares</a></li>
        </ul>
                                            </>
                                        )}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Buttons Section */}
                <div className="md:flex hidden space-x-2 ml-8 relative"> {/* Added relative for absolute positioning */}
  <span 
    className="bg-green-500 text-white py-2 px-4 rounded cursor-pointer" 
    onClick={() => setIsOpen(true)}
  >
    + {isSessionActive} Create
  </span>

  <span 
    style={{ backgroundColor: 'rgb(99, 102, 241)', display: isSessionActive ? "none" : '' }}
    className="hover:bg-blue-700 text-white py-2 px-4 rounded cursor-pointer" 
    onClick={() => navigate('/login')}
  >
    Sign In
  </span>

  <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-none d-lg-inline-flex">
    <li className="nav-item dropdown">
      <button 
        className="btn btn-sm btn-primary px-4 py-2 fs-sm rounded" 
        style={{  display: isSessionActive ? "" : 'none' }}
        onClick={() => setIsOpenDD(!isOpenDD)} // Toggle dropdown on button click
      >
        <i className="bx bx-user fs-5 lh-1 me-1"></i> Hi, {userName}
      </button>
      
      {isOpenDD && (
        <ul className="absolute left-0 mt-1 bg-gray-800 text-white rounded text-center px-2 py-2 shadow-lg" 
            data-bs-popper="static" 
        >
          <li><a href="/view_contest" className="block px-4 py-2 hover:bg-gray-700">My Contests</a></li>
          <li><a href="" className="block px-4 py-2 hover:bg-gray-700" onClick={handleLogout}>Logout</a></li>
        </ul>
      )}
    </li>
  </ul>
</div>


            </div>
			{sidebarOpen &&<div className='md:hidden block'> <Sidebar closeSidebar={toggleSidebar} /> </div>}
        </header>
		<CreateContestPopUp isOpen={isOpen} setIsOpen={setIsOpen} number={"100"} />
		</div>
    );
};

export default Header;
