import GetSoftwareName from './GetSoftwareName';

import './index.css';

const MetaData = () => {
  return (
    <div>
      <h1>获取应用程序元数据</h1>
      <div className='metadata'>
        <GetSoftwareName />
      </div>
    </div>
  );
};

export default MetaData;
