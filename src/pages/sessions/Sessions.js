import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import ContentWrapper from "../../layout/ContentWrapper";
import { deleteDoc, doc, getFirestore } from "firebase/firestore";

export default function Sessions() {
  const [sessionsState, setSessionsState] = useState([]);
  const navigate = useNavigate();
  const { sessions } = useAuth();
  useEffect(() => {
    setSessionsState(sessions);
  }, []);

  const db = getFirestore();

  const deleteSession = async (id) => {
    await deleteDoc(doc(db, "sessions", id));
    const sessionsUpdate = sessionsState.filter((session) => session.id !== id);
    setSessionsState(sessionsUpdate);
  };

  const createSessionRedirect = () => {
    navigate("/sessions/createsession");
  };

  return (
    <ContentWrapper>
      <div className="w-100">
        <div className="w-100 d-flex justify-content-between my-3">
          <h1>Sessions</h1>
          <div>
            <button
              className="btn btn-success btn-sm"
              onClick={createSessionRedirect}
            >
              Create session
            </button>
          </div>
        </div>
        <div>
          <div className="table-responsive">
            <table className="table table-hover table-dark mb-4">
              <thead>
                <tr>
                  <th>Session Id</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Section</th>
                  <th>N° Questions</th>
                  <th>Type</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {sessionsState.map((session, index) => (
                  <tr key={index}>
                    <td>{session.id}</td>
                    <td>{session.name}</td>
                    <td>{session.category}</td>
                    <td>{session.section}</td>
                    <td>{session.data.length}</td>
                    <td>{session.type}</td>
                    <td width="20%" className="text-center">
                      <Link
                        to={`/sessions/${session.id}`}
                        className="btn btn-success btn-sm"
                      >
                        <i className="fas fa-eye"></i>
                      </Link>
                      <Link
                        to={`/sessions/${session.id}/edit`}
                        className="btn btn-warning btn-sm ml-2"
                      >
                        <i className="fas fa-edit"></i>
                      </Link>
                      <button
                        onClick={() => deleteSession(session.id)}
                        className="btn btn-danger btn-sm ml-2"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}
