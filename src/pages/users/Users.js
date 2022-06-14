import { deleteDoc, doc, getFirestore } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import ContentWrapper from "../../layout/ContentWrapper";

export default function Users() {
  // const navigate = useNavigate();
  const { usersData } = useAuth();
  const [usersState, setUsersState] = useState(usersData);

  const db = getFirestore();

  // const createUserRedirect = () => {
  //   navigate("/users/createuser");
  // };

  const deleteUser = async (id) => {
    await deleteDoc(doc(db, "users", id));
    const usersUpdate = usersState.filter((user) => user.id !== id);
    setUsersState(usersUpdate);
  };

  return (
    <ContentWrapper>
      <div className="w-100">
        <div className="w-100 d-flex justify-content-between my-3">
          <h1>Users</h1>
          <div>
            {/* <button
              className="btn btn-success btn-sm"
              onClick={createUserRedirect}
            >
              Create user
            </button> */}
          </div>
        </div>
        <div>
          <div className="table-responsive">
            <table className="table table-hover table-dark mb-4">
              <thead>
                <tr>
                  <th>User Id</th>
                  <th>Name</th>
                  {/* <th>Date</th>
                    <th>Sale</th>
                    <th className="text-center">Status</th> */}
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {usersState.map((user, index) => (
                  <tr key={index}>
                    <td width="40%">{user.id}</td>
                    <td>{user.username}</td>
                    <td width="15%" className="text-center">
                      <Link
                        to={`/users/${user.id}`}
                        className="btn btn-success btn-sm"
                      >
                        <i className="fas fa-eye mr-2"></i>
                      </Link>
                      <button
                        onClick={() => deleteUser(user.id)}
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
