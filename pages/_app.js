
import { useRouter } from 'next/router'
import { Provider } from 'react-redux';
import AdminLayout from '../components/Layout/Admin/AdminLayout';
import MainLayout from '../components/Layout/Main/MainLayout'
import { store } from '../store';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      {router.pathname.includes('admin') ? (
        <Provider store={store}>
          <AdminLayout>
            <Component {...pageProps} />
          </AdminLayout>
        </Provider>
      ) : (
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      )}
    </>
  )
}

export default MyApp
