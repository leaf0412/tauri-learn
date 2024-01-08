import ReadText from './readText';
import WriteText from './writeText';
import './index.css';

const Clipboard = () => {
  return (
    <div>
      <h1>读写到系统剪贴板</h1>
      <div className='clipboard'>
        <ReadText />
        <WriteText />
      </div>
    </div>
  );
};

export default Clipboard;
