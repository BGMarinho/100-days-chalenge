import type { NextPage } from 'next'
import Head from 'next/head'
import * as S from '../src/index/styles.ts'

const Home: NextPage = () => {
  return (
    <S.Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.Main>
        <S.Title>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </S.Title>

        <S.Description>
          Get started by editing{' '}
          <S.Code>pages/index.tsx</S.Code>
        </S.Description>
      </S.Main>

      <S.Footer></S.Footer>
    </S.Container>
  )
}

export default Home
