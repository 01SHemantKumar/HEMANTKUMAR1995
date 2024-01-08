import { Button } from "bootstrap";
import React from "react";
import { ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div>Login</div>
      <ButtonGroup>
        <Link to="/">Back</Link>
      </ButtonGroup>
    </>
  );
}
