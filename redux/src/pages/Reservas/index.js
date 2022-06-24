import React from "react";
import { MdDelete } from "react-icons/md";
import "./style.css"

function Reservas() {
  return (
    <div>
      <h1>Você solicitou 1 reserva</h1>

      <div className="reservas">
        <img src="https://sujeitoprogramador.com/wp-content/uploads/2019/12/maceio.jpg" alt="Maceio" />
        <strong>Viagem Maceio - 7 dias</strong>
        <span>Quantidade: 2</span>
        <button
          type="button"
          onClick={() => {
          }}>
          <MdDelete size={20} color="#191919" />
        </button>
      </div>

      <footer>
        <button
          type="button">Solicitar reservas
        </button>
      </footer>

    </div>
  );
}

export default Reservas;
