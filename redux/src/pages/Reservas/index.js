import React from "react";
import {MdAddCircle, MdDelete, MdRemoveCircle} from "react-icons/md";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import {removeReserve, updateAmountRequest } from "../../store/modules/reserve/actions";

function Reservas() {

  const dispatch = useDispatch();
  const reserves = useSelector(state => state.reserve);

  function handleRemove(id) {
    dispatch(removeReserve(id));
  }

  function decrementAmount(trip) {
      dispatch(updateAmountRequest(trip.id, trip.amount - 1));
  }

  function incrementAmount(trip) {
      dispatch(updateAmountRequest(trip.id, trip.amount + 1));
  }

  return (
    <div>
      <h1 className="title">Você solicitou {reserves.length} {reserves.length === 1 ? "reserva" : "reservas"}</h1>

      {reserves.map(reserve => {
        return (
            <div className="reservas" key={reserve.id}>
                <img src={reserve.image}
                     alt={reserve.title}/>
                <strong>{reserve.title}</strong>

                <div id="amount">
                    <button type="button" onClick={() => decrementAmount(reserve)}>
                        <MdRemoveCircle size={25} color="#191919"/>
                    </button>
                    <input type="text" readOnly value={reserve.amount}/>
                    <button type="button" onClick={() => incrementAmount(reserve)}>
                        <MdAddCircle size={25} color="#191919"/>
                    </button>
                </div>

                <button
                    type="button"
                    onClick={() => handleRemove(reserve.id)}>
                    <MdDelete size={20} color="#191919"/>
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
