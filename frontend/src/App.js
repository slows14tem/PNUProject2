import './App.css';
import { Route, Routes } from 'react-router-dom';
import View1Main from './Page/View1/View1Main';
import View2Main from './Page/View2/View2Main';
import View3Main from './Page/View3/View3Main';

function App() {
  return (
    <>
    <Routes>
      <Route path='/view1' element={<View1Main />} />
      <Route path='/view2' element={<View2Main />} />      
      <Route path='/view3' element={<View3Main />} />      
    </Routes>
    </>
  );
}

export default App;
