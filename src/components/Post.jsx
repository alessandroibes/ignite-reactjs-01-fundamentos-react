import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/alessandroibes.png"
          />
          <div className={styles.authorInfo}>
            <strong>Alessandro Oliveira</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="24 de Maio às 15:16h" dateTime="2024-05-24 15:16:00">
          Publicado há 1h
        </time>

        <div className={styles.content}>
          <p>Fala galeraa 👋</p>
          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
            🚀
          </p>
          <p>
            👉<a href="">jane.design/doctorcare</a>
          </p>
          <p>
            <a href="">#novoprojeto #nlw #rocketseat</a>
          </p>
        </div>
      </header>
    </article>
  );
}
