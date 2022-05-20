import React, { useState, useEffect } from "react";
import Message from "../../components/sessions/Message";
import Presentation from "../../components/sessions/Presentation";
import Question from "../../components/sessions/Question";
import Range from "../../components/sessions/Range";
import ContentWrapper from "../../layout/ContentWrapper";
import { v4 as uuidv4 } from "uuid";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { app } from "../../firebase/credenciales";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function SessionEdit() {
  const { id } = useParams();
  useEffect(() => {
    try {
      firebaseBuscarDoc();
      const initialValues = {
        name: session.name,
        category: session.category,
        duration: session.duration,
        section: session.section,
        subsection: session.subsection,
        type: session.type,
        file: "",
        xp: session.xp,
      };
    } catch (error) {
      console.log(error);
    }
  }, []);
  const [screen, setScreen] = useState("choose");
  const [viewScreenNew, setViewScreenNew] = useState(false);
  const [data, setData] = useState([]);
  const [fileUrl, setFileUrl] = useState(null);

  const navigate = useNavigate();
  const fireStore = getFirestore();

  const [session, setSession] = useState({});

  const firebaseBuscarDoc = async () => {
    let consulta = doc(fireStore, "sessions", id);
    let resultado = await getDoc(consulta);
    setSession(resultado.data());
    setData(resultado.data().data);
  };

  const photo = {
    data: {
      description: " You just made an important step on your journey.",
      title: "Congratulations",
    },
    type: "photo",
  };

  const calification = {
    data: {
      question: "Do you think that this session was helpful for you?",
    },
    type: "calification",
  };

  const feedback = {
    data: {
      description:
        "Do you want to share any thoughts on what we can do better?",
      posibilities: [
        "not feeling it today",
        "too long",
        "unclear instructions",
        "made me feel uncomfortable",
      ],
      question: "What went wrong?",
    },
    type: "feedback",
  };

  const firebaseCrear = (coleccion, objeto) => {
    objeto.id = uuidv4();
    let referencia = doc(getFirestore(), coleccion, objeto.id);
    setDoc(referencia, objeto);
  };

  const changeComponent = (e) => {
    const option = e.target.value;
    setScreen(option);
  };

  const newScreen = (e) => {
    e.preventDefault();
    setViewScreenNew(!viewScreenNew);
  };

  const createNewScreen = (dataNew) => {
    setData([
      ...data,
      {
        data: dataNew,
        type: screen,
      },
    ]);
  };

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.lastModified + file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const createNewSession = (dataSession) => {
    let object = Object.assign(dataSession);
    setData([...data, photo, calification, feedback]);
    object.data = data;
    object.source = fileUrl;
    setSession(object);
    firebaseCrear("sessions", session);
    setScreen("choose");
    setViewScreenNew(false);
    setData([]);
    setSession([]);
    setFileUrl("");
    navigate("/sessions");
  };

  return (
    <ContentWrapper>
      <div className="mb-6 w-100">
        <h1>Edit Session | {session.name}</h1>
      </div>
      <div className="row align-content-center mx-xl-5 w-100 mb-5">
        <Formik
          initialValues={{
            name: session.name,
            category: session.category,
            duration: session.duration,
            section: session.section,
            subsection: session.subsection,
            type: session.type,
            file: "",
            xp: session.xp,
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().max(255).required("Session name id required"),
            category: Yup.string()
              .max(255)
              .required("Session category id required"),
            duration: Yup.number().required("Session duration is required"),
            xp: Yup.number().required("Session duration is required"),
            section: Yup.string().max(255).required("Section is required"),
            subsection: Yup.string()
              .max(255)
              .required("Subsection is required"),
            type: Yup.string().max(255).required("Type is required"),
          })}
          onSubmit={createNewSession}
          enableReinitialize
        >
          {({ errors, touched, values }) => (
            <Form className="w-100">
              <div className="col-lg-12 layout-spacing layout-top-spacing widget-content-area">
                <div className="statbox widget box box-shadow ">
                  <div className="widget-content">
                    <h4 className="mb-4">General data</h4>
                    <div className="form-row mb-lg-4">
                      <div className="form-group col-md-6">
                        <label htmlFor="name">Name</label>
                        <Field
                          id="name"
                          name="name"
                          type="text"
                          value={values.name}
                          className="form-control"
                          placeholder="Session name"
                        />
                        {touched.name && errors.name && (
                          <div className="text-danger">{errors.name}</div>
                        )}
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="category">Category</label>
                        <Field
                          as="select"
                          id="category"
                          name="category"
                          value={values.category}
                          className="form-control"
                        >
                          <option value="choose">Choose...</option>
                          <option value="Actitude">Actitude</option>
                          <option value="Breathwork">Breathwork</option>
                          <option value="Journal">Journal</option>
                        </Field>
                        {touched.category && errors.category && (
                          <div className="text-danger">{errors.category}</div>
                        )}
                      </div>
                    </div>
                    <div className="form-row mb-lg-4">
                      <div className="form-group col-md-6">
                        <label htmlFor="section">Section</label>
                        <Field
                          as="select"
                          id="section"
                          name="section"
                          value={values.section}
                          className="form-control"
                        >
                          <option value="choose">Choose...</option>
                          <option value="short meditation">
                            Short Meditation
                          </option>
                          <option value="breaking state">Breaking State</option>
                          <option value="anchoring">Anchoring</option>
                          <option value="breathing">Breathing</option>
                        </Field>
                        {touched.section && errors.section && (
                          <div className="text-danger">{errors.section}</div>
                        )}
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="subsection">Subsection</label>
                        <Field
                          as="select"
                          id="subsection"
                          name="subsection"
                          value={values.subsection}
                          className="form-control"
                        >
                          <option value="choose">Choose...</option>
                          <option value="Frustation In Comunication">
                            Frustation In Comunication
                          </option>
                          <option value="Frustation In a Relationship">
                            Frustation In a Relationship
                          </option>
                        </Field>
                        {touched.subsection && errors.subsection && (
                          <div className="text-danger">{errors.subsection}</div>
                        )}
                      </div>
                    </div>
                    <div className="form-row mb-lg-4">
                      <div className="form-group col-md-6">
                        <label htmlFor="type">Type</label>
                        <Field
                          as="select"
                          id="type"
                          name="type"
                          value={values.type}
                          className="form-control"
                        >
                          <option value="choose">Choose...</option>
                          <option value="exercise">Exercise</option>
                          <option value="habit">Habit</option>
                        </Field>
                        {touched.type && errors.type && (
                          <div className="text-danger">{errors.type}</div>
                        )}
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="duration">Duration</label>
                        <Field
                          id="duration"
                          name="duration"
                          type="number"
                          value={values.duration}
                          className="form-control"
                          placeholder="Session duration"
                        />
                        {touched.duration && errors.duration && (
                          <div className="text-danger">{errors.duration}</div>
                        )}
                      </div>
                    </div>
                    <div className="form-row mb-6">
                      <div className="form-group col-md-6">
                        <label htmlFor="duration">XP for this Session</label>
                        <Field
                          id="xp"
                          name="xp"
                          type="number"
                          value={values.xp}
                          className="form-control"
                          placeholder="Session XP"
                        />
                        {touched.xp && errors.xp && (
                          <div className="text-danger">{errors.xp}</div>
                        )}
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="file">Session image</label>
                        <Field
                          type="file"
                          name="file"
                          value={values.file}
                          className="form-control-file"
                          onChange={onFileChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-success mt-5">
                      Save Session
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
        <div className="w-100 d-flex justify-content-end pr-3">
          {viewScreenNew ? (
            <button
              type="button"
              onClick={newScreen}
              className="btn btn-secondary mt-5"
            >
              Cancel
            </button>
          ) : (
            <button
              type="button"
              onClick={newScreen}
              className="btn btn-success mt-5"
            >
              New Screen
            </button>
          )}
        </div>
        {viewScreenNew === true ? (
          <div className="col-lg-12 layout-spacing layout-top-spacing widget-content-area">
            <div className="statbox widget box box-shadow">
              <div className="widget-content">
                <div className="form-group col-md-6 mb-5">
                  <label htmlFor="inputState">Screen Type</label>
                  <select
                    id="selectState"
                    name="selectState"
                    className="form-control"
                    onClick={changeComponent}
                  >
                    <option value="choose">Choose...</option>
                    <option value="message">Message</option>
                    <option value="presentation">Presentation</option>
                    <option value="question">Question</option>
                    <option value="range">Range</option>
                  </select>
                </div>
                {screen === "presentation" ? (
                  <Presentation callBack={createNewScreen} />
                ) : null}
                {screen === "question" ? (
                  <Question callBack={createNewScreen} />
                ) : null}
                {screen === "range" ? (
                  <Range callBack={createNewScreen} />
                ) : null}
                {screen === "message" ? (
                  <Message callBack={createNewScreen} />
                ) : null}
                {screen === "choose" ? <div>Select a option</div> : null}
              </div>
            </div>
          </div>
        ) : null}
        <div className="col-lg-12 layout-spacing layout-top-spacing widget-content-area">
          <div className="statbox widget box box-shadow">
            <div className="widget-content">
              <h4 className="mb-4">Screen | Created</h4>
              {data.map((screen, index) => (
                <div key={index}>
                  {screen.type === "photo" ||
                  screen.type === "calification" ||
                  screen.type === "feedback" ? null : (
                    <div className="col-lg-12 layout-spacing layout-top-spacing widget-content-area my-5 rounded-lg">
                      <div className="statbox widget box box-shadow">
                        <div className="widget-content">
                          {screen.type === "presentation" ? (
                            <div clasName="d-flex justify-content-between">
                              <h5>{screen.data.title}</h5>
                              <p>{screen.data.description}</p>
                              <div>Screen type: {screen.type}</div>
                            </div>
                          ) : null}
                          {screen.type === "question" ? (
                            <div>
                              <h5>{screen.data.question}</h5>
                              <p>{screen.data.description}</p>
                              <div>Screen type: {screen.type}</div>
                            </div>
                          ) : null}
                          {screen.type === "range" ? (
                            <div>
                              <h5>{screen.data.question}</h5>
                              <div className="d-flex justify-content-around pt-3">
                                <div clasName="w-25">
                                  <p>{screen.data.min}</p>
                                </div>
                                <div clasName="w-50">
                                  <input type="range" />
                                </div>
                                <div clasName="w-25">
                                  <p>{screen.data.max}</p>
                                </div>
                              </div>
                              <div>Screen type: {screen.type}</div>
                            </div>
                          ) : null}
                          {screen.type === "message" ? (
                            <div>
                              <h5>{screen.data.message}</h5>
                              <div>Screen type: {screen.type}</div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}
