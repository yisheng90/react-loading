import React from "react";
import styled from "styled-components";

import Skeleton from "./Skeleton";

export default { title: "Skeleton" };

export const basic = () => <Skeleton />;

export const circle = () => <Skeleton circle height={50} width={50} />;

export const height = () => <Skeleton height={30} />;

export const width = () => <Skeleton width={300} rows={6} />;

export const multiRow = () => <Skeleton rows={5} />;
