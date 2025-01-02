import logo from './logo.svg';
import './App.css';
import LoginPage from './Pages/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomPage';
import Schedule from './Pages/Schedule';
import Announcements from './Pages/Announcement';
import Messages from './Pages/Messages';
import Profile from './Pages/Profile';
import EditProfile from './Pages/EditProfile';
import Settings from './Pages/Settings';
import ChangePassword from './Pages/ChangePassword';
import AppointmentSelectPage from './Pages/AppointmentSelectPage';
import MakeAppointment from './Pages/MakeAppointment';
import ListedAppointments from './Pages/ListedAppointments';
import WriteMessage from './Pages/WriteMessage';
import AppointAcceptPopUp from './Components/AppointAcceptPopUp';
import SignUpPage from './Pages/SignUpPage';




function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/"element={<LoginPage/>}></Route> {/*adding routes to login page*/}
          <Route path="/HomePage"element={<HomePage/>}></Route>{/*adding routes to  homepage*/}
          <Route path="/Schedule"element={<Schedule/>}></Route> {/*adding routes to  schedule*/}
          <Route path="/Announcements"element={<Announcements/>}></Route> {/*adding routes to  Announcements*/}
          <Route path="/Messages"element={<Messages/>}></Route> {/*adding routes to  Messages*/}
          <Route path="/Profile"element={<Profile/>}></Route> {/*adding routes to  Profile*/}
          <Route path="/EditProfile"element={<EditProfile/>}></Route> {/*adding routes to  EditProfile*/}
          <Route path="/Settings"element={<Settings/>}></Route> {/*adding routes to  Settings*/}
          <Route path="/ChangePassword"element={<ChangePassword/>}></Route> {/*adding routes to  ChangePassword*/}
          <Route path="/AppointmentSelectPage"element={<AppointmentSelectPage/>}></Route> {/*adding routes to  AppointmentSelectPage*/}
          <Route path="/MakeAppointment"element={<MakeAppointment/>}></Route> {/*adding routes to  MakeAppointment*/}
          <Route path="/ListedAppointments"element={<ListedAppointments/>}></Route> {/*adding routes to  ListedAppointments*/}
          <Route path="/WriteMessage"element={<WriteMessage/>}></Route> {/*adding routes to  WriteMessage*/}
          <Route path="/AppointAcceptPopUp"element={<AppointAcceptPopUp/>}></Route> {/*adding routes to  WriteMessage*/}
          <Route path="/SignUpPage"element={<SignUpPage/>}></Route> {/*adding routes to  WriteMessage*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
