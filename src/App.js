import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route } from 'react-router-dom';

import Home from './pages/Home/Home';

import IndiraNationalSchool from './pages/indira_national_school/IndiraNationalSchool';
import ChairpersonMessage from './pages/chairpersons-message/ChairpersonMessage';
import PrincipalsMessage from './pages/principals_message/PrincipalsMessage';
import VisionMission from './pages/vision-mission/VisionMission';

import PrePrimary from './pages/pre-primary/PrePrimary';
import Primary from './pages/primary/Primary';
import MiddleSchool from './pages/middle-school/MiddleSchool';
import SecondarySchool from './pages/secondary-school/SecondarySchool';
import SeniorSecondarySchool from './pages/senior-secondary-school/SeniorSecondarySchool';
import SchoolAlmanac from './pages/school-almanac/SchoolAlmanac';
import YearPlans from './pages/year-plans/YearPlans';
import HolidayCalendar from './pages/holiday-calendar/HolidayCalendar';
import ExamCalendar from './pages/exam-calendar/ExamCalendar';

import SchoolManagementCommitteeMembers from './pages/management-committee/SchoolManagementCommitteeMembers';
import SchoolManagementDevelopmentCommittee from './pages/school-management-development-committee/SchoolManagementDevelopmentCommittee';
import ExecutiveCommitteeOfPTA from './pages/executive-committee-of-PTA/ExecutiveCommitteeOfPTA';
import TransportCommittee from './pages/transport-committee/TransportCommittee';
import GrievanceRedressalCommittee from './pages/grievance-redressal-committee/GrievanceRedressalCommittee';
import PreventionOfSexualHarassmentCommittee from './pages/prevention-of-sexual-harassment-committee/PreventionOfSexualHarassmentCommittee';
import AntiBullyingCommittee from './pages/anti-bullying-committee/AntiBullyingCommittee';
import ChildSafetyCommittee from './pages/child-safety-committee/ChildSafetyCommittee';
import CulturalCommittee from './pages/cultural-committee/CulturalCommittee';
import StudentCouncil from './pages/student-council/StudentCouncil';

import AdmissionProcess from './pages/admission-process/AdmissionProcess';
import AdmissionForm from './pages/admission-form/AdmissionForm';
import Fees from './pages/fees/Fees';
import AdmissionProcedureI from './pages/AdmissionProcedureI/admission-procedure-I';
import AdmissionProcedureIV from './pages/admission-procedureIV/Admission-Procedure-IV';
import ApplyOnline from './pages/applyOnline/ApplyOnline';
import AcademicPrograms from './pages/academic-program/AcademicPrograms';

import Career from './pages/career/Career';

import Events from './pages/events/Events';

import Infrastructure from './pages/infrastructure/Infrastructure';

import Circulars from './pages/circulars/Circulars';

import Contact from './pages/contact-us/Contact';
import NewsLetter from './pages/newsletter/NewsLetter';
import AdmissionProcessXI from './pages/admission-procedureXI/AdmissionProcessXI';
import AcademicCommittee from './pages/academic-committee/AcademicCommittee';
import TransportationCommittee from './pages/vision-mission/TransportationCommittee';
import Infographics from './pages/infographics/Infographics';
//import { HashRouter } from 'react-router-dom';
function App() {
  return (
    <>
      <Header></Header>
      {/* <HashRouter> */}
      <Route path="/" exact>
        <Home></Home>
      </Route>
      <Route path="/home">
        <Home></Home>
      </Route>

      <Route path="/about-indira-national-school">
        <IndiraNationalSchool></IndiraNationalSchool>
      </Route>
      <Route path="/chairperson-message">
        <ChairpersonMessage></ChairpersonMessage>
      </Route>
      <Route path="/principals-message">
        <PrincipalsMessage></PrincipalsMessage>
      </Route>
      <Route path="/vision-mission">
        <VisionMission></VisionMission>
      </Route>

      <Route path="/career">
        <Career></Career>
      </Route>

      <Route path="/pre-primary">
        <PrePrimary></PrePrimary>
      </Route>
      <Route path="/primary">
        <Primary></Primary>
      </Route>
      <Route path="/middle-school">
        <MiddleSchool></MiddleSchool>
      </Route>
      <Route path="/secondary-school">
        <SecondarySchool></SecondarySchool>
      </Route>
      <Route path="/senior-secondary-school">
        <SeniorSecondarySchool></SeniorSecondarySchool>
      </Route>
      <Route path="/school-almanac">
        <SchoolAlmanac></SchoolAlmanac>
      </Route>
      <Route path="/year-plans">
        <YearPlans></YearPlans>
      </Route>
      <Route path="/holiday-calendar">
        <HolidayCalendar></HolidayCalendar>
      </Route>
      <Route path="/exam-calendar">
        <ExamCalendar></ExamCalendar>
      </Route>
      <Route path="/academic-program">
        <AcademicPrograms></AcademicPrograms>
      </Route>


      <Route path="/school-management-committee-members">
        <SchoolManagementCommitteeMembers></SchoolManagementCommitteeMembers>
      </Route>
      <Route path="/school-management-development-committee">
        <SchoolManagementDevelopmentCommittee></SchoolManagementDevelopmentCommittee>
      </Route>
      <Route path="/executive-committee-of-pta">
        <ExecutiveCommitteeOfPTA></ExecutiveCommitteeOfPTA>
      </Route>
      <Route path="/transport-committee">
        <TransportCommittee></TransportCommittee>
      </Route>
      <Route path="/grievance-redressal-committee">
        <GrievanceRedressalCommittee></GrievanceRedressalCommittee>
      </Route>
      <Route path="/prevention-of-sexual-harassment-committee">
        <PreventionOfSexualHarassmentCommittee></PreventionOfSexualHarassmentCommittee>
      </Route>
      <Route path="/anti-bullying-committee">
        <AntiBullyingCommittee></AntiBullyingCommittee>
      </Route>
      <Route path="/child-safety-committee">
        <ChildSafetyCommittee></ChildSafetyCommittee>
      </Route>

      <Route path="/cultural-committee">
        <CulturalCommittee></CulturalCommittee>
      </Route>
      <Route path="/student-council">
        <StudentCouncil></StudentCouncil>
      </Route>


      <Route path="/admission-process">
        <AdmissionProcess></AdmissionProcess>
      </Route>
      <Route path="/admission-form">
        <AdmissionForm></AdmissionForm>
      </Route>
      <Route path="/fees">
        <Fees></Fees>
      </Route>
      <Route path="/admission-procedure-I">
        <AdmissionProcedureI></AdmissionProcedureI>
      </Route>
      <Route path="/admission-procedure-IV">
        <AdmissionProcedureIV></AdmissionProcedureIV>
      </Route>
      <Route path="/applyOnline">
        <ApplyOnline ></ApplyOnline >
      </Route>

      <Route path="/admission-procedureXI">
        <AdmissionProcessXI></AdmissionProcessXI>
      </Route>

      <Route path="/events">
        <Events></Events>
      </Route>

      <Route path="/transportation-committee">
        <TransportationCommittee></TransportationCommittee>
      </Route>


      <Route path="/infrastructure">
        <Infrastructure></Infrastructure>
      </Route>

      <Route path="/academic-committee">
        <AcademicCommittee></AcademicCommittee>
      </Route>
      <Route path="/contact-us">
        <Contact></Contact>
      </Route>
      <Route path="/newsletter">
        <NewsLetter></NewsLetter>
      </Route>

      <Route path="/circulars">
        <Circulars></Circulars>
      </Route>

      <Route path="/infographics">
    <Infographics></Infographics>
    </Route>

      {/* </HashRouter> */}
      <Footer></Footer>
    </>
  );
}

export default App;
