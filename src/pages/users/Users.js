import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import ContentWrapper from "../../layout/ContentWrapper";

export default function Users() {
  const navigate = useNavigate();
  const { usersData, habitsData, exersicesData, getDataFirebase } = useAuth();

  const createUserRedirect = () => {
    navigate("/users/createuser");
  };

  return (
    <ContentWrapper>
      <div className="w-100">
        <div className="w-100 d-flex justify-content-between my-3">
          <h1>Users</h1>
          <div>
            <button
              className="btn btn-success btn-sm"
              onClick={createUserRedirect}
            >
              Create user
            </button>
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
                {usersData.map((user) => (
                  <tr>
                    <td width="40%">{user.id}</td>
                    <td>{user.username}</td>
                    <td wi dth="15%" className="text-center">
                      <Link
                        to={`/users/${user.id}`}
                        className="btn btn-success btn-sm"
                      >
                        <i className="fas fa-eye mr-2"></i>
                      </Link>
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
