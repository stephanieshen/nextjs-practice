import { useRouter } from 'next/dist/client/router';
import BlogOverview from '../components/BlogOverview/BlogOverview';
import Button from '../components/Button/Button';
import SectionLayout from '../components/Layout/Section/SectionLayout';
import Seo from '../components/Seo/Seo';
import Services from '../components/Services/Services';
import SocialLinks from '../components/SocialLinks/SocialLinks';
import { getBlogs } from '../firebase';
import classes from '../styles/Home.module.scss';

const Home = (props) => {
  const { blogs } = props;
  const router = useRouter();

  const goTo = (path) => {
    router.push(path);
  }

  const getSeoData = () => {
    return {
      title: 'Home - Juan Dela Cruz',
      description: 'Software Engineer. Team Leader. Web Designer. Writer. Volunteer Speaker.',
      image: '/assets/images/profile-pic.png'
    }
  }

  return (
    <>
      <Seo data={getSeoData()} />
      <div className={classes.header}>
        <div>
          <p className={[classes.paragraph, classes.greet].join(' ')}>
            Hello!
          </p>
          <h1 className={classes.name}>
            I &apos;m Juan Dela Cruz
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
              clicked={() => goTo('/about')}
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
        {blogs.map((blog, index) => (
          <BlogOverview blog={blog} key={index} />
        ))}

        <div className={classes.moreBlogs}>
          <Button
            type="button"
            classes={['primary']}
            clicked={() => goTo('/blogs')}
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

export async function getStaticProps() {
  const res = await getBlogs();
  const blogs = await res.json();

  return {
    props: {
      blogs: blogs.splice(0, 3)
    }
  }
}

export default Home;
