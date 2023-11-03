
import { About, Banner, Community, Faq, Footer, Header, Join, Pricing, Workouts } from './sections';



const App = () => {
  // aos initialization
  return (
    <div className='max-w-[1440px] mx-auto bg-page overflow-hidden relative'>
      <Header />
      <Banner />
      <About />
      <Workouts />
      <Pricing />
      <Community />
      <Faq />
      <Join />
      <Footer />
      <div className='h-[4000px]'></div>
    </div>
  );
};

export default App;
