import React from "react";
import styled from "styled-components";

import Skeleton from "./Skeleton";

export default { title: "Skeleton" };

export const basic = () => <Skeleton />;

export const circle = () => <Skeleton circle width={250} />;

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
