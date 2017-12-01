import multipleRender from 'react-multiple-render';
import Header from './components/header/header';
import Footer from './components/footer';
import Slider from './components/carousel';

multipleRender(Header, '.header-container', true);
multipleRender(Footer, '.footer-container', true);
multipleRender(Slider, '.slider-container', true);
