import { useEffect } from 'react';
import SectionLayout from '../../components/Layout/Section/SectionLayout';
import Seo from '../../components/Seo/Seo';
import Skills from '../../components/Skills/Skills';
import WhatIDo from '../../components/WhatIDo/WhatIDo';
import { getAboutMe } from '../../firebase';
import classes from './About.module.scss';

const About = (props) => {
  const { aboutMe } = props;
  
  useEffect(() => {
    document.body.style.backgroundColor = '#1C2127';

    return () => {
      document.body.style.backgroundColor = '#222831';
    }
  }, []);

  const getSeoData = () => {
    return {
      title: 'About - Juan Dela Cruz',
      description: 'Software Engineer. Team Leader. Web Designer. Writer. Volunteer Speaker.',
      image: '/assets/images/profile-pic.png'
    }
  }

  return (
    <>
      <Seo data={getSeoData()} />
      <div className={classes.header}>
        <div className={classes.headerContent}>
          <div className={classes.headerText}>
            <h1>Juan Dela Cruz</h1>
            <p>
              I’m a Software Engineer. Far far away, behind the word mountains, 
              far from the countries Vokalia and Consonantia,  there live the blind texts. 
              Separated they live in Bookmarksgrove right at the coast of the Semantics, 
              a large language ocean.
            </p>
          </div>

          <div
            className={classes.profilePic}
            style={{
              backgroundImage: 'url(/assets/images/profile-pic.png)'
            }}
          />
        </div>
      </div>

      <div>
        <SectionLayout
          title="What I Do?"
          bgColor="#222831"
          paddingBottom="185px"
        >
          <p className={classes.whatIDoInfo}>
            Far far away, behind the word mountains, far from the countries Vokalia 
            and Consonantia, there live the blind texts. Separated they live in 
            Bookmarksgrove right at the coast of the 
          </p>
        </SectionLayout>
        <div className={classes.whatIDoWrapper}>
          {aboutMe.whatIDo.map((whatIDo, index) => (
            <WhatIDo
              key={index}
              whatIDo={whatIDo}
            />
          ))}
        </div>
      </div>

      <SectionLayout
        title="Skills"
        bgColor="#222831"
      >
        <Skills skills={aboutMe.skills} />
      </SectionLayout>
    </>
  );
}

export async function getStaticProps() {
  const res = await getAboutMe();
  const aboutMeData = await res.json();

  return {
    props: {
      aboutMe: aboutMeData
    }
  }
}

export default About;
