import './content.css';

import hotel1 from '../pict/hotel01.jfif';
import hotel2 from '../pict/hotel02.jfif';
import hotel3 from '../pict/hotel03.jfif';

import char1 from '../pict/winnie.webp';
import char2 from '../pict/tigger.webp';
import char3 from '../pict/piglet.webp';
import char4 from '../pict/eeyore.webp';
import char5 from '../pict/roo.webp';
import char6 from '../pict/cr.webp';

function content() {
    return (
        <div id="isi" className="d-flex">
			<SideNav />
			<div>
                <Header />
				<div id="review" className="p-5 d-flex">
					<LeftCard />
					<RightCard />
				</div>
				<div id="book" className="bg-light text-center py-5">
					<h2 className="mb-3">BOOK YOURSELF A ROOM NOW</h2>
					<button className="border-0 py-3 px-5 text-light" href="#">BOOK NOW!</button>
				</div>
			</div>
		</div>
    );
}

export default content;

//----------------------------------------------------------------------------------------------
function SideNav() {
    return(
        <div id="nav" className="w-75 d-flex">
			<a className="my-2 link-light text-decoration-none" href="#">Hotels</a>
			<a className="my-2 link-light text-decoration-none" href="#">Flights</a>
			<a className="my-2 link-light text-decoration-none" href="#">Car Rentals</a>
			<a className="my-2 link-light text-decoration-none" href="#">Tool</a>

            <p className='credit mt-auto text-light text-center'>&copy; 2022 by Maecyntha Irelynn</p>
            <p className='credit text-center text-light'>All Rights Reserved</p>
        </div>
    );
}

function Header() {
    return (
        <>
            <div className="d-flex justify-content-center">
				<div className="main-pict">
					<img src={hotel1} alt="" />
				</div>
				<div className="main-pict">
					<img src={hotel2} alt="" />
				</div>
				<div className="main-pict">
					<img src={hotel3} alt="" />
				</div>
			</div>
			<div className="bg-light d-flex align-items-center justify-content-between">
				<h3 className="bg-light pl-4">The Ritz-Carlton Hotel</h3>
				<div className="d-flex align-items-center justify-content-between">
					<a target="_blank" href="https://goo.gl/maps/4vrMrsXEZnBUJFwC7">Jakarta, Indonesia</a>
					<div className="rating ml-4 p-4 text-center text-white">
						<h4>9.6</h4>
						<p className='m-0'>420 votes</p>
					</div>
				</div>
			</div>
        </>
    );
}

function LeftCard() {
    return (
        <div className="card left p-4 mr-5 rounded bg-light">
			<p className="writing">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non est eu velit fermentum semper. 
				Proin lobortis dolor rhoncus elit cursus mollis.
			</p>
			<p className="writing">
				Praesent vel ultrices elit, sit amet mattis lectus. Quisque porttitor sit amet turpis vel efficitur. Nulla facilisi. 
			</p>
			<hr className="line"/>
			<div className="d-flex px-4">
				<div className="w-50">
					<ul className="writing list-unstyled">
						<li className="mb-1">Close to the beach</li>
						<li className="mb-1">Breakfast include</li>
						<li className="mb-1">Free Airport Shuttle</li>
						<li>Free wifi in all rooms</li>
					</ul>
				</div>
				<div>
					<ul className="writing list-unstyled">
						<li className="mb-1">Air conditioning and heating</li>
						<li className="mb-1">Pets allowed</li>
						<li className="mb-1">We speak all languages</li>
						<li>Perfect families</li>
					</ul>
				</div>
			</div>
			<hr className="line"/>
			<div className="row px-3">
				<div className="col-8">
					<p className="writing d-flex align-self-center">Pooh and 3 other friends recommended this hotel</p>
				</div>
				<div className="col-4">
					<div className="profile d-flex align-items-center justify-content-end">
						<img src={char1} alt="winnie" className="character rounded-circle mr-1" />
						<img src={char2} alt="tigger" className="character rounded-circle mr-1" />
						<img src={char3} alt="piglet" className="character rounded-circle mr-1" />
						<img src={char4} alt="eeyore" className="character rounded-circle mr-1" />
					</div>
				</div>
			</div>
		</div>
    );
}

function RightCard() {
    return (
        <div className="right">
			<div className="card p-4 rounded bg-light">
				<p className="writing">
					Quisque pellentesque finibus libero, ac volutpat tortor pulvinar eu. Ut ante elit, 
					pellentesque a auctor id, tempor sed nulla. Vestibulum et justo eros.
				</p>
				<div className="d-flex align-items-center">
					<div className="d-flex">
						<img src={char5} alt="kang & roo" className="character rounded-circle mr-5" />
						<div className="d-flex flex-column justify-content-center">
							<h5 className="reviewer fw-bold">Kanga & Roo</h5>
							<p className="writing">Feb 20, 2021</p>
						</div>
					</div>
					<div className="d-flex align-items-center justify-content-end">
						<h3 className="reviewer mr-3">9.6</h3>
					</div>
				</div>
			</div>
			<div className="card p-4 mt-5 rounded bg-light">
				<p className="writing">
				Morbi vulputate consectetur viverra. Nullam eleifend, ex quis euismod malesuada, 
				elit dolor eleifend ante, vitae rutrum quam est nec quam. 
				</p>
				<div className="d-flex align-items-center">
					<div className="d-flex">
						<img src={char6} alt="cr" className="character rounded-circle mr-5" />
						<div className="d-flex flex-column justify-content-center">
							<h5 className="reviewer fw-bold">Christopher Robin</h5>
							<p className="writing">Mar 25, 2021</p>
						</div>
					</div>
					<div className="d-flex align-items-center justify-content-end">
						<h3 className="reviewer mr-3">9.6</h3>
					</div>
				</div>
			</div>
			<div className="more text-center mt-4">
				<h5><a href="#">Read More -{'>'}</a></h5>
			</div>
		</div>
    );
}

