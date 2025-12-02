import { Routes, Route } from 'react-router-dom';
import About from '@pages/About';
import Site from '@pages/Site';
import Introduce from '@pages/Introduce';
import Section from '@pages/Section';
import Undefined from '@pages/Undefined';

export default function App(): JSX.Element {
  return (
    <div className="App">
      <div className='pt-16 pb-32'>
        <Routes>
          <Route path="/" element={<Section />} />
          <Route path="/About" element={<About />} />
          <Route path="/Site" element={<Site />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/*" element={<Undefined />} />
        </Routes>
      </div>
    </div>
  )
}