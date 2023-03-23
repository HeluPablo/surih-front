import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>¡Suscríbete para recibir nuestras novedades!</h3>
            <form>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Ingresa tu correo electrónico" />
              </div>
              <button type="submit" className="btn btn-primary">Suscribirse</button>
            </form>
          </div>
          <div className="col-md-3">
            <h3>Enlaces rápidos</h3>
            <ul className="list-unstyled">
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Acerca de</a></li>
              <li><a href="#">Servicios</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Síguenos</h3>
            <ul className="list-inline">
              <li><a href="#"><FaFacebook /></a></li>
              <li><a href="#"><FaTwitter /></a></li>
              <li><a href="#"><FaInstagram /></a></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <p className="text-center">© 2023 Mi Empresa - Todos los derechos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
