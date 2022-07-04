import './nba.css';
import img1 from './NBA.jpg'

function nba() {
  return (
    <div className="Nba">
      <h1>Watching NBA</h1>
      <img class="nbaLogo"src={img1} alt='nba logo' />
    </div>
  );
  }

export default nba;