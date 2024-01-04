import GetSoftwareName from './GetSoftwareName';
import GetTauriVersion from './GetTauriVersion';

import './index.css';

const MetaData = () => {
  return (
    <div>
      <h1>获取应用程序元数据</h1>
      <div className='metadata'>
        <GetSoftwareName />
        <GetTauriVersion />
      </div>
    </div>
  );
};

export default MetaData;
