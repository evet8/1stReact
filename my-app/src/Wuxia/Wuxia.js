import './wuxia.css';
import img2 from './wuxia.jpg'

function wuxia() {
  return (
    <div className="wuxia">
      <h1>Reading Wuxia</h1>
      <img class="wuxiaLogo"src={img2} alt='wuxia logo' />
      <p className='wuxiaDesc'>Wuxia, which literally means "martial heroes", is a genre of Chinese fiction concerning the adventures of martial artists in ancient China.</p>
    </div>
  );
}

export default wuxia;