import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const LinkBlue = styled.a`
  color: #5f4b3e;

  & > svg {
    margin-right: 15px;
  }
`;

const AboutList = styled.ul`
  list-style-type: none;
`;

const InnerList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const About = () => {
  return (
    <>
      <AboutList>
        <li>
          <div>
            <h2>Andrii Doroshenko</h2>
            <h1>Junior Frontend Developer</h1>
          </div>
        </li>
        <li>
          <h3>Summary</h3>
          <p>
            I am an experienced and passionate Front-End developer with
            knowledge of HTML, CSS, JavaScript and React. I have a proven track
            record of utilizing the Agile/Scrum methodology to successfully
            deliver projects on time, within budget, and with a focus on
            user-friendliness. I thrive in challenging and dynamic environments
            where I can help make a positive difference in both everyday life
            and business with my creative problem-solving skills. I am a fast
            learner, responsible, and always up for a challenge.
          </p>
        </li>

        <li>
          <h3>Project experience</h3>
          <InnerList>
            <li>
              <LinkBlue href="http://kancler-boom.com/" target="blank">
                <FaGithub fontSize={'24'} />
                Barbershop <span>[HTML, SASS, JS, Parcel]</span>
              </LinkBlue>
              <p>
                A website with a responsive layout. Role: Team Lead, developer.
                Build project on GitHub, check for build errors, and live page
                performance.
              </p>
            </li>
            <li>
              <LinkBlue href="http://kancler-boom.com/" target="blank">
                <FaGithub fontSize={'24'} />
                Barbershop <span>[HTML, SASS, JS, Parcel]</span>
              </LinkBlue>

              <p>
                A website with a responsive layout. Role: Team Lead, developer.
                Build project on GitHub, check for build errors, and live page
                performance.
              </p>
            </li>
          </InnerList>
        </li>

        <li>
          <h3>Work Experience</h3>
          <InnerList>
            <li>
              <b>Travel agency owner</b>
              <p>Best travel | Feb 2018 - Nov 2021</p>
              <ul>
                <li>
                  <p>Website programming: HTML, CSS, JS</p>
                </li>
                <li>
                  <p>Photoshop design</p>
                </li>
                <li>
                  <p>Analytics & automation</p>
                </li>
                <li>
                  <p>Tour guide & routes</p>
                </li>
                <li>
                  <p>Create team build & coach SMM & target ads</p>
                </li>
              </ul>
            </li>
          </InnerList>
        </li>

        <li>
          <h3>Education</h3>
          <InnerList>
            <li>
              <b>IT School GoIT</b>
              <p>2020 - 2021</p>
              <p>Fullstack Developer</p>
            </li>
            <li>
              <b>Taras Shevchenko National University of Kyiv</b>
              <p>2001 - 2006</p>
              <p>Chemistry, Master's degree in Analytical Chemistry</p>
            </li>
          </InnerList>
        </li>
      </AboutList>
    </>
  );
};

export default About;
