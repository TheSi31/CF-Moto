'use client';

import { useState } from "react";
import ModalRoute from "@/components/Modal/ModalRoute/ModalRoute";
import RouteContent from "./RouteContent/RouteContent";
import type { RouteProps } from "@/types/Route";

const Route = (props: RouteProps) => {

  const [active, setActive] = useState(false);

  return (
    <>
      <RouteContent {...props} onDetailsClick={() => setActive(true)} />
      <ModalRoute active={active} setActive={setActive} route={props} />
    </>
  );
};

export default Route;
