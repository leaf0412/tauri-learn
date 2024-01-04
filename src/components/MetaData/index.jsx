import GetSoftwareName from './GetSoftwareName';
import GetTauriVersion from './GetTauriVersion';
import GetSoftwareVersion from './GetSoftwareVersion';
import HideSoftware from './HideSoftware';
import ShowSoftware from './ShowSoftware';

import './index.css';

const MetaData = () => {
  return (
    <div>
      <h1>获取应用程序元数据</h1>
      <div className='metadata'>
        <GetSoftwareName />
        <GetTauriVersion />
        <GetSoftwareVersion />
        <HideSoftware />
        <ShowSoftware />
      </div>
    </div>
  );
};

export default MetaData;
