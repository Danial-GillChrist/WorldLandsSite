import { Route, Routes } from 'react-router'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Country from './pages/Country'
import Contact from './pages/Contact'
import ErrorPage from './pages/ErrorPage'
import CountryDetails from './pages/CountryDetails'

function App() {
//    const users = [
//         {
//             id: 1,
//             title: "Mr.",
//             name: "John Doe",
//             role: "Frontend Developer",
//             email: "john.doe@example.com"
//         },
//         {
//             id: 2,
//             title: "Ms.",
//             name: "Jane Smith",
//             role: "UI/UX Designer",
//             email: "jane.smith@example.com"
//         },
//         {
//             id: 3,
//             title: "Dr.",
//             name: "Michael Brown",
//             role: "Project Manager",
//             email: "michael.brown@example.com"
//         },
//         {
//             id: 4,
//             title: "Mrs.",
//             name: "Emily Johnson",
//             role: "Backend Developer",
//             email: "emily.johnson@example.com"
//         },
//         {
//             id: 5,
//             title: "Mr.",
//             name: "David Wilson",
//             role: "QA Engineer",
//             email: "david.wilson@example.com"
//         },
//         {
//             id: 6,
//             title: "Ms.",
//             name: "Sophia Martinez",
//             role: "Business Analyst",
//             email: "sophia.martinez@example.com"
//         },
//         {
//             id: 7,
//             title: "Mr.",
//             name: "Daniel Anderson",
//             role: "DevOps Engineer",
//             email: "daniel.anderson@example.com"
//         },
//         {
//             id: 8,
//             title: "Mrs.",
//             name: "Olivia Thomas",
//             role: "Product Owner",
//             email: "olivia.thomas@example.com"
//         },
//         {
//             id: 9,
//             title: "Mr.",
//             name: "James Taylor",
//             role: "Full Stack Developer",
//             email: "james.taylor@example.com"
//         },
//         {
//             id: 10,
//             title: "Ms.",
//             name: "Ava Lee",
//             role: "Content Strategist",
//             email: "ava.lee@example.com"
//         }
//     ];


//   let arr = [1,2,3,4,5,6,7,8,9,10];
//   const numbers = [1, 3, 2, 2, 4, 4, 5];
//   let uniqValues = [...new Set(numbers)]
//   console.log(uniqValues);
//   let sort = uniqValues.sort((a, b) => b - a);
//    const secondMax =  sort[1];

//    console.log('Second Max', secondMax);

//   const numbers = [5, 12, 8, 130, 44];
//   let max = Math.max(...numbers);
//   let min = Math.min(...numbers);

//   console.log(max, min);
  
//   const evenNumber = arr.filter((item) => item % 2 === 0);
//   const oddNumber = arr.filter((item) => item % 2 !== 0);

//  type user = {
//     name:string;
//     email:string;
//     role:string;
//  }

//   let obg:user = {name:'user', email:'test@gmial.com', role:'dev'}
//   console.log(evenNumber, oddNumber);

    return (
      <Routes>
      <Route path='/' element={<Layout/>}>
         {/* Child routes */}
         <Route index element={<Home />} />
         <Route path="about" element={<About />} />
         <Route path="country" element={<Country />} />
         <Route path="country/:id" element={<CountryDetails />} />
         <Route path="contact" element={<Contact />} />
           {/* Add more child routes here */}
         <Route path="*" element={<ErrorPage />} />
      </Route>
      </Routes>
    )
}

export default App
