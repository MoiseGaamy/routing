import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from "./Home"
import About from './About';
import Services from "./Services";
import Contact from "./Contact";
import Nav from './Nav';
import ServiceDetails from './ServiceDetails';

export default function Router() {
    return (
        
      <BrowserRouter>
          <div>
            <Nav />
                <Route exact path="/" component={Home} />
                <Route       path="/about" component={About} />
                <Route path="/service" component={Services} />
                <Route path="/service/:id" component={ServiceDetails}/>
                <Route path="/contact" component={Contact} />
          </div>
     </BrowserRouter>
        
    )
}
