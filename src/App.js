import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'



function App() {
  const data = [
    {
      scheme_name:"FREE",
      price:0,
      users:"Single User",
      stroage:"5GB Storage",
      public_projects:"Unlimited Public Projects",
      public_projects_status:1,
      community_access:"Community Access",
      community_access_status:1,
      private_projects:"Unlimited Private Projects",
      private_projects_status:1,
      phone_support:"Dedicated Phone Support",
      phone_support_status:1,
      subdomain:"Free Subdomain",
      subdomain_status:1,
      status_reports:1

    },
    {
      scheme_name:"PLUS",
      price:9,
      users:"5 Users",
      stroage:"50GB Storage",
      public_projects:"Unlimited Public Projects",
      public_projects_status:0,
      community_access:"Community Access",
      community_access_status:0,
      private_projects:"Unlimited Private Projects",
      private_projects_status:0,
      phone_support:"Dedicated Phone Support",
      phone_support_status:0,
      subdomain:"Free Subdomain",
      subdomain_status:0,
      status_reports:1
    },
    {
      scheme_name:"PRO",
      price:49,
      users:"Unlimited Users",
      stroage:"150GB Storage",
      public_projects:"Unlimited Public Projects",
      public_projects_status:0,
      community_access:"Community Access",
      community_access_status:0,
      private_projects:"Unlimited Private Projects",
      private_projects_status:0,
      phone_support:"Dedicated Phone Support",
      phone_support_status:0,
      subdomain:"Unlimited Free Subdomain",
      subdomain_status:0,
      status_reports:0
    }
  ];

  
  return (
    
    <div className="App">
      <section class="pricing py-5">
      <div className="container">
        <div className="row">

        {data.map((schemes, index) => (
        <Schemes
          key={index}
          prod={schemes} 
        />
      ))}

        
                 
      </div>
    </div>
    </section>
    </div> 
  );
}

export default App;

// create a new component



function Schemes({prod}) { 
  return (
    <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{prod.scheme_name}</h5>
            <h6 className="card-price text-center">{prod.price}<span className="period">/month</span></h6>
            <hr/>
            
            <ul>
              <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>{prod.users}</strong>
              </li>
              <li><FontAwesomeIcon icon="fa-solid fa-check" />{prod.stroage}</li>
              <li className={prod.public_projects_status ? 'text-muted':''}><span className="fa-li"><i className="fas fa-check"></i></span>{prod.public_projects}</li>
              <li className={prod.community_access_status ? 'text-muted':''}><span className="fa-li"><i className="fas fa-check"></i></span>{prod.community_access}</li>
              <li className={prod.private_projects_status ? 'text-muted':''}><span className="fa-li"><i className="fas fa-check"></i></span>{prod.private_projects}</li>
              <li className={prod.phone_support_status ? 'text-muted':''}><span className="fa-li"><i className="fas fa-check"></i></span>{prod.phone_support}</li>
              <li className={prod.subdomain_status ? 'text-muted':''}><span className="fa-li"><i className="fas fa-check"></i></span>{prod.subdomain}</li>
              <li className={prod.status_reports ? 'text-muted':''}><span className="fa-li"><i className="fas fa-check"></i></span>Monthly Status
                Reports</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
  );
}

