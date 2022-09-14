import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Layout from '../../components/Layout'
import Link from 'next/link';

const Feature: NextPage = () => {
  const { locale, query } = useRouter()
  const { t } = useTranslation()

  return (
    <Layout>
      <h1>{query.feature}</h1>
      <h2>{locale}</h2>
      <h2>{t('h1')}</h2>
      <Link href="/">
        <div className="btn">Home</div>
      </Link>
    </Layout>
  )
}

interface ServerProps {
  locale: string,
  query: {
    feature: string
  }
}

export async function getServerSideProps({ locale, query }: ServerProps) {
  console.log('Get query from server', query)

  return {
    props: {
      ...await serverSideTranslations(locale, ['common']),
    },
  }
}

  
export default Feature
