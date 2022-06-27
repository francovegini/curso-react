import React from "react";
import { MdDelete } from "react-icons/md";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";

function Reservas() {

  const dispatch = useDispatch();
  const reserves = useSelector(state => state.reserve);

  function handleRemove(id) {
    dispatch({
      type: "REMOVE_RESERVE",
      id
    });
  }

  return (
    <div>
      <h1 className="title">Você solicitou {reserves.length} {reserves.length === 1 ? "reserva" : "reservas"}</h1>

      {reserves.map(reserve => {
        return (
          <div className="reservas" key={reserve.id}>
            <img src={reserve.image}
                 alt={reserve.title} />
            <strong>{reserve.title}</strong>
            <span>Quantidade: {reserve.amount}</span>
            <button
              type="button"
              onClick={() => handleRemove(reserve.id)}>
              <MdDelete size={20} color="#191919" />
            </button>
          </div>
        );
      })}

      <footer>
        <button
          type="button">Solicitar reservas
        </button>
      </footer>

    </div>
  );
}

export default Reservas;
