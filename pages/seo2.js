import Head from 'next/head';
import styles from 'components/HowChatGPTCanHelpSEO.module.css';

const SEO = () => (
  <div className={styles.container}>
    <Head>
      <title>How ChatGPT can Help with SEO | Netlify</title>
      <meta name="description" content="ChatGPT can assist in optimizing your website's content for search engines, improving visibility and attracting more organic traffic." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="https://www.netlify.com/favicon.ico" />
    </Head>
    <header className={styles.header}>
      <img src="https://www.netlify.com/img/global/icons/netlify-color-bg.svg" alt="Netlify Logo" />
      <h1 className={styles.title}>How ChatGPT can Help with SEO</h1>
    </header>
    <main className={styles.main}>
      <p>
        ChatGPT can assist in optimizing your website's content for search engines, improving visibility and attracting more organic traffic.
      </p>
    </main>
    <footer className={styles.footer}>
      <p>&copy; 2022 Netlify</p>
    </footer>
  </div>
);

export default SEO;
