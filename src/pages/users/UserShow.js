import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContentWrapper from "../../layout/ContentWrapper";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import LogUsers from "../../components/LogUsers";
import SessionDataUser from "../../components/SessionDataUser";

export default function UserShow() {
  const { id } = useParams();

  const [user, setUser] = useState({
    userName: "",
    habits: [],
    favorites: [],
    memories: "",
    logs: [],
  });
  useEffect(() => {
    try {
      firebaseBuscarDoc();
    } catch (error) {
      console.log(error);
    }
  }, [user]);

  const [logs, setLogs] = useState([]);
  const fireStore = getFirestore();

  const firebaseBuscarDoc = async () => {
    let consulta = doc(fireStore, "users", id);
    let resultado = await getDoc(consulta);
    setUser(resultado.data());
    setLogs(resultado.data().logs);
  };

  return (
    <ContentWrapper>
      <div className="sidebar-noneoverflow">
        <div className="w-100 d-flex justify-content-between my-3"></div>
        <div className="row layout-spacing">
          {/* <!-- Content --> */}
          <div className="col-xl-4 col-lg-6 col-md-5 col-sm-12 layout-top-spacing">
            <div className="user-profile layout-spacing">
              <div className="widget-content widget-content-area">
                <div className="d-flex h-4 justify-content-between">
                  <h4 className="text-success">Info</h4>
                  <div className="h-1"></div>
                </div>
                <div className="text-center user-info">
                  <h2>User | {user.username} </h2>
                </div>
                <div className="user-info-list">
                  <div className="">
                    <ul className="contacts-block list-unstyled">
                      <li className="contacts-block__item">
                        <i
                          style={{ fontSize: "16px" }}
                          className="fas fa-mug-hot mr-2"
                        ></i>
                        {user.habits.length} habits
                      </li>
                      <li className="contacts-block__item">
                        <i
                          style={{ fontSize: "16px" }}
                          className="fas fa-star mr-2"
                        ></i>
                        {user.favorites.length} favorites
                      </li>
                      <li className="contacts-block__item">
                        <i
                          style={{ fontSize: "16px" }}
                          className="fas fa-book mr-2"
                        ></i>
                        {user.memories.length} memories created
                      </li>
                      <li className="contacts-block__item">
                        <i
                          style={{ fontSize: "16px" }}
                          className="fas fa-envelope mr-2"
                        ></i>
                        {user.coreo ? user.coreo : "---"}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="education layout-spacing ">
              <div className="widget-content widget-content-area">
                <h4 className="text-success">Log</h4>
                <div className="timeline-alter">
                  {logs.map((log, index) => (
                    <LogUsers
                      logInfo={log.logInfo}
                      timestamp={log.timestamp}
                      key={"log-" + index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-8 col-lg-6 col-md-7 col-sm-12 layout-top-spacing">
            <div className="skills layout-spacing ">
              <div className="widget-content widget-content-area">
                <h2 className="text-success">Experience</h2>
                <div className="progress br-30">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    // style={{ width: `${user.experience % 500}%` }}
                    aria-valuenow={user.experience % 500}
                    aria-valuemin="0"
                    aria-valuemax="500"
                  >
                    <div className="progress-title">
                      <span className="mr-2">XP {user.experience}</span>
                      <span>{(user.experience * 100) / 500}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bio layout-spacing ">
              <div className="widget-content widget-content-area">
                <h2 className="text-success">Sessions Completed</h2>
                <p>The following are the sessions completed by the user</p>
                <div className="bio-skill-box">
                  <div className="row">
                    {logs.map((log, index) => (
                      <SessionDataUser logInfo={log.logInfo} key={index} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}
