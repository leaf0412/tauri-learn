## tauri api clipboard 使用
对应的代码仓库：https://github.com/leaf0412/tauri-learn/tree/clipboard

### clipboard 函数
Tauri API中的 clipboard 模块提供了读取并写入系统剪贴板。主要有以下几个函数:

- readText --> 以纯文本形式获取剪贴板内容
- writeText --> 将纯文本写入剪贴板

### 函数使用方式
#### 注意事项
使用 app API 中的 hide 和 show 函数， 必须要将权限添加到 tauri.conf.json 中的tauri.allowlist.clipboard 中

```json
{  
    "tauri": {  
        "allowlist": {  
            "clipboard": {
                "all": true,
                "writeText": true,
                "readText": true
          }
        }  
    }  
}
```

#### readText  以纯文本形式获取剪贴板内容
使用方式：创建 readText.jsx 文件

```jsx
import { readText } from '@tauri-apps/api/clipboard';
import { useState } from 'react';

export default function ReadText() {
  const [text, setText] = useState('');
  const handleReadText = async () => {
    const text = await readText();
    setText(text);
  };

  return (
    <div>
      <button onClick={handleReadText}>读取剪切板文本</button>
      <p>剪切板文本：{text}</p>
    </div>
  );
}


```

#### writeText  将纯文本写入剪贴板
使用方式：创建 writeText.jsx 文件

```jsx
import { writeText } from '@tauri-apps/api/clipboard';
import { useState, useCallback } from 'react';

export default function WriteText() {
  const [text, setText] = useState('');
  const handleWriteText = useCallback(async () => {
    await writeText(text);
  }, [text]);

  const handleChange = e => {
    setText(e.target.value);
  };

  return (
    <div>
      <input
        type='text'
        value={text}
        onChange={handleChange}
        placeholder='请输入文本'
      />
      <button onClick={handleWriteText}>写入剪切板文本</button>
    </div>
  );
}

```