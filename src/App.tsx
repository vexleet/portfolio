import './App.css';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import SectionLayout from './layouts/SectionLayout';
import AboutMe from './components/AboutMe/AboutMe';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <SectionLayout title="About me" subTitle="Get to know me" id="aboutme">
        <AboutMe />
      </SectionLayout>
      <SectionLayout title="Get in touch" subTitle="Feel free to contact me anytime" id="contact">
        <ContactForm />
      </SectionLayout>
      <Footer />
    </>
  );
}

export default App;
