import { getName } from '@tauri-apps/api/app';
import { useState } from 'react';

export default function GetSoftwareName() {
  const [AppName, setAppName] = useState('');
  const getAppName = async () => {
    const name = await getName();
    // console.log(name);
    setAppName(name);
  }
  return (
    <div>
      <button onClick={getAppName}>获取软件名称</button>
      <p>软件名称：{AppName}</p>
    </div>
  )
}
