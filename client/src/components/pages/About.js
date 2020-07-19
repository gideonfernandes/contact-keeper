import React, { Fragment } from 'react';

const About = () => {
  return (
    <Fragment>
      <h1>Página Sobre</h1>
      <p className="my-1">
        This project is a Full Stack MERN Application that an user register an
        account and will be able to create and keep contacts with some
        informations like name, email, phone number, personal or professional contact
        and also filter, update or delete them. It was developed with the aim
        of studying the React JS library during the React Front To Back course,
        taught by Brad Traversy.
      </p>
      <p className="bg-dark p">
        <strong>Versão:</strong> 1.0.0
      </p>
    </Fragment>
  )
};

export default About;
