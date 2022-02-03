import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
import Toast from "./Toast";
import { GLOBALTYPES } from "../../redux/actions/globalTypes";

function Alert() {
  const { alert } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      {alert.loading && <Loading />}
      {alert.error && (
        <Toast
          bgColor="bg-danger"
          msg={{ title: "Error", body: alert.error }}
          handleShow={() => dispatch({ type: GLOBALTYPES.ALERT, payload: {} })}
        />
      )}
      {alert.success && (
        <Toast
          bgColor="bg-success"
          msg={{ title: "Success", body: alert.success }}
          handleShow={() => dispatch({ type: GLOBALTYPES.ALERT, payload: {} })}
        />
      )}
    </div>
  );
}

export default Alert;
