import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Users from "./pages/users/Users";
import Dashboard from "./pages/Dashboard";
import Habits from "./pages/Habits";
import Sessions from "./pages/sessions/Sessions";
import Login from "./pages/Login";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import CreateUser from "./pages/users/CreateUser";
import UserShow from "./pages/users/UserShow";
import SessionShow from "./pages/sessions/SessionShow";
import CreateSession from "./pages/sessions/CreateSession";
import SessionEdit from "./pages/sessions/SessionEdit";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/users/:id"
            element={
              <ProtectedRoute>
                <UserShow />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <Users />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sessions/:id"
            element={
              <ProtectedRoute>
                <SessionShow />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sessions/:id/edit"
            element={
              <ProtectedRoute>
                <SessionEdit />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sessions/createsession"
            element={
              <ProtectedRoute>
                <CreateSession />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sessions"
            element={
              <ProtectedRoute>
                <Sessions />
              </ProtectedRoute>
            }
          />
          <Route
            path="/habits"
            element={
              <ProtectedRoute>
                <Habits />
              </ProtectedRoute>
            }
          />
          <Route
            path="users/createuser"
            element={
              <ProtectedRoute>
                <CreateUser />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
