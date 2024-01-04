import { getTauriVersion } from '@tauri-apps/api/app';
import { useState } from 'react';

export default function GetTauriVersion() {
  const [version, setVersion] = useState('');
  const getVersion = async () => {
    const version = await getTauriVersion();
    // console.log(name);
    setVersion(version);
  }
  return (
    <div>
      <button onClick={getVersion}>获取 Tauri 版本</button>
      <p>Tauri 版本：{version}</p>
    </div>
  )
}
