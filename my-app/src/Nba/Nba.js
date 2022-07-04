import './nba.css';
import img1 from './NBA.jpg'

function nba() {
  return (
    <div className="Nba">
      <h1>Watching NBA</h1>
      <img class="nbaLogo"src={img1} alt='nba logo' />
      <p className='nbaDesc'>The National Basketball Association is a professional basketball league in North America. The league is composed of 30 teams and is one of the major professional sports leagues in the United States and Canada. It is the premier men's professional basketball league in the world.</p>
    </div>
  );
  }

export default nba;