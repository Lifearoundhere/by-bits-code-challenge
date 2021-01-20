import React, { useRef, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios"
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { render } from "@testing-library/react";

export default function Notes() {

  const [content, setContent] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const access_token = "MuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0zX3JkdldSMGs"

  useEffect(() => {
    function loadPolicy() {
      return axios.get('https://api.bybits.co.uk/policys/details', {
        headers: {
          'environment': 'mock',
          'Authorization': `Bearer ${access_token}`,
          'Content-type': 'application/json'
        }
      });
    }

    async function onLoad() {
      try {
        const policy = await loadPolicy()
        setContent(policy.data);
        setIsLoading(false)
        console.log(policy)
      } catch (e) {
        console.log(e);
      }
    }

    onLoad();
  }, []);

  // const { policy, proposer, vehicle, usage, versions, additional, pricing } = content.data
  return (
    <div className="Policy">
      {isLoading && <p>Wait I'm Loading comments for you</p>}
      {!isLoading &&
        <Accordion defaultActiveKey="0" >
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              {/* Policy{content.policy} */}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body></Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion >

      }

    //     <Card>
        //       <Accordion.Toggle as={Card.Header} eventKey="1">
          //         Proposer
    // </Accordion.Toggle>
    //       <Accordion.Collapse eventKey="1">
          //         <Card.Body>Build out sub card</Card.Body>
    //       </Accordion.Collapse>
    //     </Card>
    //     <Card>
        //       <Accordion.Toggle as={Card.Header} eventKey="2">
          //         Vehicle
    // </Accordion.Toggle>
    //       <Accordion.Collapse eventKey="2">
          //         <Card.Body>Build out sub card</Card.Body>
    //       </Accordion.Collapse>
    //     </Card>
    //     <Card>
        //       <Accordion.Toggle as={Card.Header} eventKey="3">
          //         Usage
    // </Accordion.Toggle>
    //       <Accordion.Collapse eventKey="3">
          //         <Card.Body>Build out sub card</Card.Body>
    //       </Accordion.Collapse>
    //     </Card>
    //     <Card>
        //       <Accordion.Toggle as={Card.Header} eventKey="4">
          //         Versions
    // </Accordion.Toggle>
    //       <Accordion.Collapse eventKey="4">
          //         <Card.Body>Build out sub card</Card.Body>
    //       </Accordion.Collapse>
    //     </Card>
    //     <Card>
        //       <Accordion.Toggle as={Card.Header} eventKey="5">
          //         Additional Drivers
    // </Accordion.Toggle>
    //       <Accordion.Collapse eventKey="5">
          //         <Card.Body>Build out sub card</Card.Body>
    //       </Accordion.Collapse>
    //     </Card>
    //     <Card>
        //       <Accordion.Toggle as={Card.Header} eventKey="6">
          //         Pricing
    // </Accordion.Toggle>
    //       <Accordion.Collapse eventKey="6">
          //         <Card.Body>Build out sub card</Card.Body>
    //       </Accordion.Collapse>
    //     </Card>


    </div >
  );
}
