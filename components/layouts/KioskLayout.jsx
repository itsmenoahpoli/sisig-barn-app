import React from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";

export const KioskLayout = (props) => {
  const { children } = props;

  return (
    <>
      <Head>
        <title>SISIG BARN CRISPY SISIG &mdash; KIOSK</title>
      </Head>

      <Container fluid className="kiosk-layout">
        <Container fluid className="body">
          {children}
        </Container>
      </Container>
    </>
  );
};
