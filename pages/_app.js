
import { useRouter } from 'next/router'
import AdminLayout from '../components/Layout/Admin/AdminLayout';
import MainLayout from '../components/Layout/Main/MainLayout'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      {router.pathname.includes('admin') ? (
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
      ) : (
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      )}
    </>
  )
}

export default MyApp
