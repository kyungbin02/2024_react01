import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Courseitem from './components/course/Courseitem';
import CourseListCard from './components/course/CourseListCard';

// function Header() {
//   return(
//     <header>
//        <h2>Header</h2>
//     </header>    
//   );
// }
// function Footer() {
//   return(
//     <footer>
//        <h2>Footer</h2>
//     </footer>    
//   );
// }

// function Main() {
//   return(
//     <main>
//        <Counter />
//     </main>    
//   );
// }


// // 파스칼 케이스 사용해야 된다,
// function Counter() {
//   return(
//     <button>Counter</button>
//   );
// }


// 리액트에서는 class는 예약어이기 때문에 사용 못하고,
// class 대신 className 이라고 사용한다.
 function App() {
   return (
    <main>
       {/* <Header />
       <Main />
       <Footer /> */}

		<CourseListCard />
 </main>
   );
 }

export default App;