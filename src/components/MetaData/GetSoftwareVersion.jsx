import { getVersion } from '@tauri-apps/api/app';
import { useState } from 'react';

export default function GetSoftwareVersion() {
  const [version, setVersion] = useState('');
  const getSoftwareVersion = async () => {
    const version = await getVersion();
    setVersion(version);
  }
  return (
    <div>
      <button onClick={getSoftwareVersion}>获取软件版本</button>
      <p>软件版本：{version}</p>
    </div>
  )
}
