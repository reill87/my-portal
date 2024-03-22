import Image from 'next/image';
import styles from './RandomBackground.module.css';

function RandomBackground() {
  const id = Math.floor(Math.random() * 1000);
  const width = 1920;
  const height = 1080;
  const seed = `https://picsum.photos/seed/${id}/${width}/${height}`;

  return (
    <div className={styles.background}>
      <Image
        src={seed}
        alt='random background'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
      />
    </div>
  );
}

export default RandomBackground;
