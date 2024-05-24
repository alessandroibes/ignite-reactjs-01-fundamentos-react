import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Alessandro Oliveira"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolore quo iure soluta facilis eveniet qui nihil necessitatibus velit error fuga quae, voluptatem, quisquam quibusdam ipsum exercitationem sequi, nesciunt temporibus."
          />
          <Post
            author="Outro Autor"
            content="Um novo post melhor que o anterior"
          />
        </main>
      </div>
    </div>
  );
}
