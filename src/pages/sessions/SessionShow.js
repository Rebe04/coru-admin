import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SessionsData from "../../components/SessionsData";
import ContentWrapper from "../../layout/ContentWrapper";

export default function SessionShow() {
  const { id } = useParams();
  useEffect(() => {
    try {
      firebaseBuscarDoc();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [questions, setQuestions] = useState([]);

  const [session, setSession] = useState({
    name: "",
    category: "",
    section: "",
    data: [],
    type: "",
  });

  const fireStore = getFirestore();

  const firebaseBuscarDoc = async () => {
    let consulta = doc(fireStore, "sessions", id);
    let resultado = await getDoc(consulta);
    setSession(resultado.data());
    setQuestions(resultado.data().data);
  };
  return (
    <ContentWrapper>
      <h1>Session | {session.name}</h1>
      <div className="account-settings-container layout-top-spacing">
        <div className="account-content">
          <div
            className="scrollspy-example"
            data-spy="scroll"
            data-target="#account-settings-scroll"
            data-offset="-100"
          >
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 layout-spacing">
                <form id="general-info" className="section general-info">
                  <div className="info">
                    <h5>General Information</h5>
                    <div className="row">
                      <div className="col-lg-11 mx-auto">
                        <div className="row">
                          <div className="col-xl-10 col-lg-12 col-md-8 mt-md-0 mt-4">
                            <div className="table-responsive p-3">
                              <table className="table table-hover table-dark mb-4">
                                <thead>
                                  <tr>
                                    <th>Category</th>
                                    <th>Section</th>
                                    <th>Subsection</th>
                                    <th>N° Questions</th>
                                    <th>Type</th>
                                    <th>Xp Generated</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>{session.category}</td>
                                    <td>{session.section}</td>
                                    <td>{session.subsection}</td>
                                    <td>{session.data.length}</td>
                                    <td>{session.type}</td>
                                    <td>{session.xp}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="col-xl-2 col-lg-12 col-md-4">
                            <h3 className="text-success">Duration</h3>
                            <p style={{ fontSize: "60px" }}>
                              {session.duration} min
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div className="col-xl-12 col-lg-12 col-md-12 bio layout-spacing">
                <div className="widget-content widget-content-area">
                  <h5 style={{ fontSize: "20px", color: "#e7f7ff" }}>
                    Screens
                  </h5>
                  <div className="bio-skill-box">
                    <SessionsData sessionData={session.data} />
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
