import { useState, useEffect } from 'react';
import styles from './wordanimation.module.css';

const WordAnimation = ({ char, id }: { char: string; id: any }) => {
  const density = '@abcdefghijklmnopqrstuvwxyz';
  const [hover, setHover] = useState(false);
  const [roll, setRoll] = useState(false);

  var [letter, setLetter] = useState(char);

  var ind = 0;

  useEffect(() => {
    setTimeout(HandleHover, id * 45);
  }, [id]);

  function HandleHover() {
    setHover(true);
    if (density[ind] === char) {
      setLetter(density[ind]);
      setRoll(false);
    }
    if (!roll && ind < density.length && density[ind] != char && char != ' ') {
      setLetter(density[ind]);
      ind++;
      setTimeout(HandleHover, 60);
      setRoll(true);
    }
  }

  function HandleAnimeitonEnd() {
    setHover(false);
  }

  return (
    <span
      onMouseOver={HandleHover}
      onAnimationEnd={HandleAnimeitonEnd}
      className={hover ? styles.letter : '' + 'letter-red'}
    >
      {letter}
    </span>
  );
};

export { WordAnimation };
