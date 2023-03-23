import './CTA.css'
import myBackgroundImage from '../../../public/images/4a3e7969a6ef4835a842c6931de437e0.jpg'
export default function CTA() {
  return (
    <div>
      <div style={{ 
      backgroundImage: `url(${myBackgroundImage})`,
      backgroundSize: 'cover',
      height: '100vh'
    }}></div>
      <div class="cta">
        <h2>Únete a nuestra comunidad</h2>
        <p>Regístrate hoy mismo y recibe acceso a contenido exclusivo</p>
        <a href="#" class="button">
          Regístrate
        </a>
      </div>
    </div>
  );
}
