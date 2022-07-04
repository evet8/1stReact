import './roadtrip.css'
import img3 from './roadtrip.jpg'

function roadtrip() {
  return (
    <div className="roadtrip">
      <h1>Going on Roadtrips</h1>
      <img class="roadTripLogo"src={img3} alt='roadtrip logo' />
      <p className='roadTripDesc'>A road trip, sometimes spelled roadtrip, is a long-distance journey on the road. Typically, road trips are long distances travelled by automobile.</p>
    </div>
  );
}

export default roadtrip;