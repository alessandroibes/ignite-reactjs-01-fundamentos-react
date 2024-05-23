import { Post } from './Post';
import { Header } from './components/Header';

import './styles.css';

export function App() {
  return (
    <div>
      <Header />

      <Post
        author="Alessandro Oliveira"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolore quo iure soluta facilis eveniet qui nihil necessitatibus velit error fuga quae, voluptatem, quisquam quibusdam ipsum exercitationem sequi, nesciunt temporibus."
      />
      <Post author="Outro Autor" content="Um novo post melhor que o anterior" />
    </div>
  );
}
