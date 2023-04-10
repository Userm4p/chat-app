import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useChatApp } from './hooks/useChatApp'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { handleChange,error,handleClick,isConnected,message,messages, handleChangeUsername, username  }  = useChatApp();
  return (
    <>
      <Head>
        <title>Chat App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={inter.className}>Chat App</h1>
        <input value={username} className={styles.input} onChange={handleChangeUsername} style={{
          width: '300px',
          padding:'8px'
        }} placeholder="Username" />

        <div
          className={styles.form}
        >
          <div className={styles.messages_container}>
            {
              messages.map((message, index) => {
                return (
                  <div key={index} className={styles.message}>
                    <p>{message}</p>
                  </div>
                )
              })
            }
          </div>
          <div className={styles.input_container } >
            <input value={message} onChange={handleChange} className={styles.input} />
            <button onClick={
              handleClick
            } className={styles.button}>{"->"}</button>
          </div>
          {error && <p className={styles.error}>{error}</p>}
        </div>
        <p className={inter.className}>Welcome to Chat App</p>
      </main>
    </>
  )
}
