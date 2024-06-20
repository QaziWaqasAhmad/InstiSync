import React from "react";
import NavigationDrawer from "../../components/navigationDrawer/index";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Card from "@mui/material/Card";

import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import CardsChart from "../../components/CardsChart";
import ProductsChart from "../../components/ProductsChart";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";








const Home = () => {
  return ( 
    <>
      <NavigationDrawer>
        <div className="">
        <h1>Dashboard</h1>
        {/* <div className="top-section text-center pt-3 mb-5">
            <div className="container">
              <div className="row">
                <div className="col-md-12"> 
                  <div className=" d-flex align-items-center gap-1">
                    <HomeIcon />
                    <Link to="/" className="mt-1 text-primary">
                      Home /{" "}
                    </Link>
                    <span className=" fs-3">DASHBOARD</span>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <div className="card-container  d-flex align-items-center justify-content-center gap-5 flex-wrap">
            <Card className="card p-2 ">
              <div className="card-data ">
                <i>
                  <CalendarMonthIcon className="text-dark  mb-3 mt-2" />
                </i>
                <div className="card-content text-white d-flex align-items-center gap-2">
                  <h5 className="">Orders Volume</h5>
                  <p><TrendingUpIcon className=" bg-white text-dark rounded p-1 fs-4 fs-5"/></p>  
                </div>
                  <h1 className="text-light fw-bolder">-300</h1>
              </div>
            </Card>
            <Card className="card p-2 ">
              <div className="card-data ">
                <i>
                  <ProductionQuantityLimitsIcon className="text-dark mb-3 mt-2" />
                </i>
                <div className="card-content card-content text-white d-flex align-items-center gap-2 text-white">
                  <h4 className="">Production Volume</h4>
                  <p><TrendingUpIcon className="bg-white text-dark rounded p-1 fs-4"/></p>  
                </div>
                  <h1 className="text-light fw-bolder">-1700</h1>
              </div>
            </Card>
            <Card className="card p-2 ">
              <div className="card-data ">
                <i>
                  <TrendingDownIcon className="text-dark  mb-3 mt-2" />
                </i>
                <div className="card-content text-white card-content card-content text-white d-flex align-items-center gap-2 text-white">
                  <h5 className="">Sales Revenue</h5>
                  <p><TrendingUpIcon className=" bg-white text-dark rounded p-1 fs-4 fs-5"/></p>  
                </div>
                  <h1 className="text-light fw-bolder">-1200</h1>
              </div>
            </Card>
          </div>


          <div className="line-chart">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <CardsChart/>    
                    </div>
                    <div className="col-md-6">
                        <ProductsChart/>
                    </div>
                </div>
            </div>
            
          </div> */}


          
        </div>
      </NavigationDrawer>
    </>
  );
};

export default Home;
