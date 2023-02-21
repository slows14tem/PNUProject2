import './App.css';
import { Route, Routes } from 'react-router-dom';
// import React, { useState, useEffect } from "react";
import View1Main from './Page/View1/View1Main';
import View2Main from './Page/View2/View2Main';
import View3Main from './Page/View3/View3Main';
import Login from './Page/ViewMember/Login';

//라우터 구조, 순서 생각할 필요 있음
//1. 기본화면 '/' 어떤 view로 잡을 건지
//2. 페이지가 실행되면 기본이 로그인화면인지 아니면 1에서 설정한 기본화면인지

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/view1' element={<View1Main />} />
      <Route path='/view2' element={<View2Main />} />      
      <Route path='/view3' element={<View3Main />} />      
    </Routes>

    </>
  );
}

export default App;
