import './App.css';
import { Route, Routes } from 'react-router-dom';
import AuthLayout from './Page/AuthLayout';
import AdminLayout from './Page/AdminLayout';
import Home from './Page/Home/Home';
import View1Main from './Page/View1/View1Main';
import View2Main from './Page/View2/View2Main';
import View3Main from './Page/View3/View3Main';
import Login from './Page/View4/Login';
import SignIn from './Page/View4/SignIn';
import Admin from './Page/View5/Admin';
import NavBar from './Component/NavBar/NavBar'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signin' element={<SignIn />} />
        </Route>
        <Route element={<AdminLayout />}>
          <Route path='/admin' element={<Admin />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path='/view1' element={<View1Main />} />
          <Route path='/view2' element={<View2Main />} />
          <Route path='/view3' element={<View3Main />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
