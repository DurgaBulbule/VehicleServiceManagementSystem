import { BrowserRouter, Route, Routes } from "react-router-dom";
//react router DOM-->for web application
//react-router-native--->mobile application
//BrowserRouter-->used for doing client side routing with URL SEGMENTS
//Route -->
//Routes-->

import RegistrationPage from "./component/RegistrationPage";

// import "bootstrap/dist/css/bootstrap.min.css";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./component/HomePage";
import LoginPage from "./component/LoginPage";
import AdminPage from "./component/AdminFun/AdminPage";
import ErrorPage from "./component/ErrorPage";
import CustomerPage from "./component/CustomerFun/CustomerPage";
import MechanicPage from "./component/MechanicFun/MechanicPage";
import ServiceAdvisorPage from "./component/ServiceAdvisorFun/ServiceAdvisorPage";
import AboutUs from "./component/AboutUs";
import ContactUs from "./component/ContactUs";
import NavbarDash from "./component/NavbarDash";
import ProfilePage from "./component/ProfilePage";
import ProtectedRoute from "./component/ProtectedRoute/ProtectedRoute";
import UpdatePage from "./component/UpdatePage";
import MakeEnquiry from "./component/CustomerFun/MakeEnquiry";
import CustProtected from "./component/ProtectedRoute/CustomerProtectedRoute";
import EnquiryStatus from "./component/CustomerFun/EnquiryStatus";
import MakeServiceRequest from "./component/CustomerFun/MakeServiceRequest";
import ServiceRequestStatus from "./component/CustomerFun/ServiceRequestStatus";
import VehicleServiceStatus from "./component/CustomerFun/VehicleServiceStatus";
import AdvisorProtected from "./component/ProtectedRoute/AdvisorProtectedRoute";
import JobCard from "./component/ServiceAdvisorFun/AddNewJobCard";
import JobCardRecords from "./component/ServiceAdvisorFun/JobCardRecords";

import MechanicProtectedRoute from "./component/ProtectedRoute/MechanicProtectedRoute";
import AssignedJobCards from "./component/MechanicFun/AssignedJobCards";

import AdminProtected from "./component/ProtectedRoute/AdminProtectedRoute";
import ServiceRecords from "./component/AdminFun/ServiceRecords";
import Approval from "./component/AdminFun/Approval";
import ViewCustEnquiries from "./component/AdminFun/ViewCustEnquiries";
import ViewCustServiceRequest from "./component/AdminFun/ViewCustServiceReq";
import CustomerDetails from "./component/AdminFun/CustomersDetails";
import ServiceAdvisorsDetails from "./component/AdminFun/ServiceAdvisorsDetails";
import MechanicDetails from "./component/AdminFun/MechanicsDetails";
import InvoiceForm from "./component/MechanicFun/CreateInvoice";
import ShowInvoice from "./component/ShowInvoice";
import ForgotPassword from "./component/ForgotPassword";
import ChangePassword from "./component/ChangePassword";
function App() {
  return (
    <BrowserRouter>
     <NavbarDash/>
          <Routes>
            
            <Route exact path="/" element={<HomePage/>} />

            <Route path="about" element={<AboutUs/>} />

            <Route path="contact" element={<ContactUs/>} />

            
            <Route path="profilepage" element={<ProtectedRoute Cmp={ProfilePage}/>}/>

            <Route path="update/:id" element={<ProtectedRoute Cmp={UpdatePage}/>}/>
            
            <Route exact path="register/:role" element={<RegistrationPage/>} />
            
            <Route path="loginpage" element={<LoginPage/>} />

            <Route path="forgot" element={<ForgotPassword/>} />

            <Route path="change/:email" element={<ChangePassword/>} />

            <Route path="adminpage" element={<AdminProtected Cmp={AdminPage}/>}/>

            <Route path="servicerecords" element={<AdminProtected Cmp={ServiceRecords}/>}/>

            <Route path="approveuser" element={<AdminProtected Cmp={Approval}/>}/>

            <Route path="getcustenquiries" element={<AdminProtected Cmp={ViewCustEnquiries}/>}/>

            <Route path="getcustrequest" element={<AdminProtected Cmp={ViewCustServiceRequest}/>}/>

            <Route path="custdetails" element={<AdminProtected Cmp={CustomerDetails}/>}/>

            <Route path="advisordetails" element={<AdminProtected Cmp={ServiceAdvisorsDetails}/>}/>

            <Route path="mechdetails" element={<AdminProtected Cmp={MechanicDetails}/>}/>
            
            <Route path="customerpage" element={<CustProtected Cmp={CustomerPage}/>}/>
   

            <Route path="enquiry" element={<CustProtected Cmp={MakeEnquiry}/>}/>

            <Route path="enquirystatus" element={<CustProtected Cmp={EnquiryStatus}/>}/>

            <Route path="servicereq" element={<CustProtected Cmp={MakeServiceRequest}/>}/>

            <Route path="requeststatus" element={<CustProtected Cmp={ServiceRequestStatus}/>}/>

            <Route path="vehiclestatus" element={<CustProtected Cmp={VehicleServiceStatus}/>}/>

            <Route path="showbill/:id" element={<CustProtected Cmp={ShowInvoice}/>}/>


            <Route path="mechanicpage" element={<MechanicProtectedRoute Cmp={MechanicPage}/>}/>

            <Route path="assignedjobcard" element={<MechanicProtectedRoute Cmp={AssignedJobCards}/>}/>

            <Route path="bill" element={<MechanicProtectedRoute Cmp={InvoiceForm}/>}/>


            <Route path="serviceadvisorpage" element={<AdvisorProtected Cmp={ServiceAdvisorPage}/>}/>

            <Route path="addjobcard" element={<AdvisorProtected Cmp={JobCard}/>}/>

            <Route path="records" element={<AdvisorProtected Cmp={JobCardRecords}/>}/>

            <Route path="errorpage" element={<ErrorPage/>} />

            
          </Routes>
       
    </BrowserRouter>
  );
}

export default App;
