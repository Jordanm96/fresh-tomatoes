import React from 'react';
import { Switch, Route } from 'react-router-dom';

const MainContainer = () => {
  
  return (
    <div>
      
      <Route path= '/movies'>
          
          </Route> 
          <Route path= '/movies/:id'>
          
          </Route>
          <Route path= '/movies/create'>
          
          </Route>
          <Route path='/movies/:id/edit'>
          
          </Route>
          <Route path= '/movies/:id/review'>
          
          </Route>
    </div>
  );
};

export default MainContainer;