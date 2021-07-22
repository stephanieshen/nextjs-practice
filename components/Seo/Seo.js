import PropTypes from 'prop-types';
import Head from 'next/head';

const Seo = (props) => {
  const { data } = props;

  return (
    <Head>
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:image" content={data.image} />
      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" content={data.description} />
      <meta name="twitter:image" content={data.image} />
    </Head>
  );
}

Seo.propTypes = {
  data: PropTypes.object
}

export default Seo;
