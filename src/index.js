import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// import Library from "./chapter_03/Library";
// import Clock from "./chapter_04/Clock";
// import CommentList from "./chapter_05/CommentList";
// import NotificationList from "./chapter_06/NotificationList";
// import Accommodate from "./chapter_07/Accommodate";
// import ConfirmButton from "./chapter_08/ConfirmButton";
// import LandingPage from "./chapter_09/LandingPage";
// import AttendanceBook from "./chapter_10/AttendanceBook";
import SignUp from "./chapter_11/SignUp";

// chapter 11
ReactDOM.render(
    <React.StrictMode>
        <SignUp />
    </React.StrictMode>,
    document.getElementById('root')
);

// chapter 10
// ReactDOM.render(
//     <React.StrictMode>
//         <AttendanceBook />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// chapter 09
// ReactDOM.render(
//     <React.StrictMode>
//         <LandingPage />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// chapter 08
// ReactDOM.render(
//     <React.StrictMode>
//         <ConfirmButton />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// chapter 07
// ReactDOM.render(
//     <React.StrictMode>
//         <Accommodate />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// chapter 06
// ReactDOM.render(
//     <React.StrictMode>
//         <NotificationList />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// chapter 05
// ReactDOM.render(
//     <React.StrictMode>
//         <CommentList />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// chapter 04
// setInterval(() => {
//     ReactDOM.render(
//         <React.StrictMode>
//             <Clock />
//         </React.StrictMode>,
//         document.getElementById('root')
//     )
// }, 1000);

// chapter 03
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Library />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
