import './Form.css'
export default function Form(){
    return(
    <div>
        <form class="contact-form">
  <div class="form-group">
    <label for="name">Nombre</label>
    <input type="text" id="name" name="name" required/>
  </div>
  <div class="form-group">
    <label for="email">Correo electrónico</label>
    <input type="email" id="email" name="email" required/>
  </div>
  <div class="form-group">
    <label for="message">Mensaje</label>
    <textarea id="message" name="message" rows="5" required></textarea>
  </div>
  <button type="submit" class="button">Enviar</button>
</form>

        </div>
    )
}