import './top.css';

import duck from '../pict/duck.jpg';
import car from '../pict/car.svg';
import ig from '../pict/ig.svg';

function top() {
    return (
        <div id="top" className="container-fluid mb-1 bg-light d-flex justify-content-between align-items-center px-4">
            <img className="duck rounded" src={duck} alt="profile"></img>
            <form className="align-self-center">
                <input className="text-center border-0 py-2" type="text" placeholder="Search Hotels" />
            </form>
            <div className="profile d-flex align-items-center">
                <img href="#" className="mr-sm-5 mr-1" src={car} alt="" />
                <img href="#" className="mr-sm-5 mr-1" src={ig} alt="" />
                <div href="#" className="d-flex align-items-center">
                    <img className="duck-prof rounded-circle mr-1" src={duck} alt="" />
                    <div>Mae</div>
                </div>
            </div>
        </div>
    )
}

export default top;