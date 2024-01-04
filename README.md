## tauri api app 使用

对应的代码仓库：https://github.com/leaf0412/tauri-learn/tree/app-meta-data-learn

### app 函数
Tauri API中的 app 模块提供了获取应用程序元数据。主要有以下几个函数:

-  getName -->  获取应用程序名称
-  getTauriVersion -->  获取 Tauri 版本
-  getVersion -->  获取应用程序版本
-  hide -->  在 MacOS 上隐藏应用程序
-  show -->  在 MacOS 上显示应用程序

### 函数使用方式
#### 注意事项
使用 app API 中的 hide 和 show 函数， 必须要将权限添加到 `tauri.conf.json` 中的`tauri.allowlist.app` 中

```json
{  
    "tauri": {  
        "allowlist": {  
            "app": {
              "all": true, 
              "show": true,
              "hide": true
            }
        }  
    }  
}
```

#### getName  获取应用程序名称
使用方式：创建 GetSoftwareName.jsx 文件
```jsx
import { getName } from '@tauri-apps/api/app';
import { useState } from 'react';

export default function GetSoftwareName() {
  const [AppName, setAppName] = useState('');
  const getAppName = async () => {
    const name = await getName();
    setAppName(name);
  }
  return (
    <div>
      <button onClick={getAppName}>获取软件名称</button>
      <p>软件名称：{AppName}</p>
    </div>
  )
}

```

#### getTauriVersion 获取 Tauri 版本
使用方式：创建 GetTauriVersion.jsx 文件
```jsx
import { getTauriVersion } from '@tauri-apps/api/app';
import { useState } from 'react';

export default function GetTauriVersion() {
  const [version, setVersion] = useState('');
  const getVersion = async () => {
    const version = await getTauriVersion();
    setVersion(version);
  }
  return (
    <div>
      <button onClick={getVersion}>获取 Tauri 版本</button>
      <p>Tauri 版本：{version}</p>
    </div>
  )
}

```

#### getVersion 获取应用程序版本
使用方式：创建 GetSoftwareVersion.jsx 文件
```jsx
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

```

#### hide  在 MacOS 上隐藏应用程序
使用方式：创建 HideSoftware.jsx 文件
```jsx
import { hide } from '@tauri-apps/api/app';

export default function HideSoftware() {
  const handleHide = async () => {
    await hide();
  }
  return (
    <div>
      <button onClick={handleHide}>隐藏软件</button>
    </div>
  )
}

```

#### show 在 MacOS 上显示应用程序
使用方式：创建 HideSoftware.jsx 文件
```jsx
import { show } from '@tauri-apps/api/app';

export default function ShowSoftware() {
  const handleShow = async () => {
    await show();
  }
  return (
    <div>
      <button onClick={handleShow}>显示软件</button>
    </div>
  )
}

```
