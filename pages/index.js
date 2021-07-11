import BlogOverview from '../components/BlogOverview/BlogOverview';
import Button from '../components/Button/Button';
import SectionLayout from '../components/Layout/Section/SectionLayout';
import Services from '../components/Services/Services';
import SocialLinks from '../components/SocialLinks/SocialLinks';
import classes from '../styles/Home.module.scss';

const Home = () => {
  return (
    <>
      <div className={classes.header}>
        <div>
          <p className={[classes.paragraph, classes.greet].join(' ')}>
            Hello!
          </p>
          <h1 className={classes.name}>
            I'm Juan Dela Cruz
          </h1>
          <p className={classes.paragraph}>
            Software Engineer
          </p>
          <p className={classes.info}>
            Team Leader. Web Designer. <br/>
            Writer. Volunteer Speaker.
          </p>

          <div className={classes.knowMore}>
            <Button
              type="button"
              classes={['primary']}
              clicked={() => console.log('test')}
            >
              Know More
            </Button>
          </div>

          <SocialLinks color="ECECEC" />
        </div>
      </div>

      <SectionLayout
        title="Blogs"
        bgColor="#1C2127"
      >
        {[1, 2, 3].map((item, index) => (
          <BlogOverview key={index} />
        ))}

        <div className={classes.moreBlogs}>
          <Button
            type="button"
            classes={['primary']}
            clicked={() => console.log('test')}
          >
            See more blogs
          </Button>
        </div>
      </SectionLayout>

      <SectionLayout
        title="What I Can Offer"
      >
        <Services />
      </SectionLayout>
    </>
  )
}

export default Home;
