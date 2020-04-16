import React from "react";
import styled from "styled-components";

import Skeleton from "./Skeleton";

export default { title: "Skeleton" };

export const basic = () => <Skeleton />;

export const circle = () => (
  <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: "flex-end"}}>
    <Skeleton circle width={35} />
    <Skeleton circle width={55} />
    <Skeleton circle width={75} />
    <Skeleton circle width={95} />
    <Skeleton circle width={115} />
  </div>
);

export const height = () => (
  <>
    <Skeleton height={25} />
    <Skeleton height="25px" />
    <Skeleton height="3rem" />
  </>
);

export const width = () => (
  <>
    <Skeleton width={250} />
    <Skeleton width="250px" />
    <Skeleton width="5rem" />
  </>
);

export const multiRow = () => <Skeleton width={250} rows={6} />;

export const color = () => (
  <>
  <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
    <Skeleton color="pink" circle width={35}/>
    <Skeleton color="#F8B195" circle width={35}/>
    <Skeleton color="#2A363B" circle width={35}/>
    <Skeleton color="rgb(25,67,89)" circle width={35}/>
    <Skeleton color="rgba(25,67,89, 0.3)" circle width={35}/>
  </div>

    <div style={{marginTop: '50px'}}>
    <Skeleton color="pink"  />
    <Skeleton color="#F8B195" />
    <Skeleton color="#2A363B"  />
    <Skeleton color="rgb(25,67,89)" />
    <Skeleton color="rgba(25,67,89, 0.3)" />
  </div>
  </>
);

export const translucent = () => (
  <>
    <div style={{display: 'flex', justifyContent: 'center', background: '#E84A5F', padding: '20px'}}>
      <Skeleton color="black" width={250} height={30} translucent/>
    </div>
  </>
);

