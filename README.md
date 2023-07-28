## tauri api dialog 使用

对应的代码仓库：https://github.com/leaf0412/tauri-learn/tree/dialog

### dialog 函数
Tauri API中的dialog模块提供了在Tauri应用中弹出对话框的能力。主要有以下几个函数:

-   ask - 弹出一个显示带有“是”和“否”按钮的问题对话框
    ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6582f1fcf96949a6bf9675aee7dc5c98~tplv-k3u1fbpfcp-watermark.image?)   

-   confirm - 弹出一个显示带有“确定”和“取消”按钮的问题对话框

    ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/24ad9307cdb941c48832b46334115bd2~tplv-k3u1fbpfcp-watermark.image?)

-   message - 显示带有 “确定” 按钮的消息对话框。
    
    ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/84f4d41bb68f417e80f3c1cef6f88b60~tplv-k3u1fbpfcp-watermark.image?)

-   open - 弹出一个打开文件或者文件夹的对话框,返回用户选择的文件路径
-   save - 弹出一个保存文件对话框,让用户选择保存路径并命名。


### 函数使用方式
#### 注意事项
使用 dialog API 必须添加到 `tauri.conf.json` 中的`tauri.allowlist.dialog` 中

```json
{  
    "tauri": {  
        "allowlist": {  
            "dialog": {  
            "all": true,  
            "ask": true,  
            "confirm": true,
            "message": true,
            "open": true,  
            "save": true  
            }  
        }  
    }  
}
```

#### dialog 提示相关属性

title: 对话框的标题，默认为应用程序名称

type: `"info"` | `"warning"` | `"error"` 默认 `info`

okLabel: 确认按钮文本

cancelLabel: 取消按钮文本


#### ask 弹窗函数
使用方式：创建 ask.jsx 文件
```jsx
import { ask } from '@tauri-apps/api/dialog';

function AskComponent() {
  async function askDialog() {
    const yes = await ask('此操作无法恢复。 你确定吗？', {
      title: '提示',
      type: 'warning',
      okLabel: '是',
      cancelLabel: '否',
    });
    console.log(yes);
  }

  return (
    <button className='btn' onClick={askDialog}>
      ask 弹窗
    </button>
  );
}

export default AskComponent;

```

#### confirm 弹窗函数
使用方式：创建 confirm.jsx 文件
```jsx
import { confirm } from '@tauri-apps/api/dialog';

function ConfirmComponent() {
  async function confirmDialog() {
    const confirmed = await confirm('此操作无法恢复。 你确定吗？', {
      title: '提示',
      type: 'warning',
      okLabel: '确认',
      cancelLabel: '取消',
    });
    console.log(confirmed);
  }

  return (
    <button className='btn' onClick={confirmDialog}>
      confirm 弹窗
    </button>
  );
}

export default ConfirmComponent;
```

#### message 弹窗函数
使用方式：创建 message.jsx 文件
```jsx
import { message } from '@tauri-apps/api/dialog';

function MessageComponent() {
  async function messageDialog() {
    await message('文件不存在', { title: '提示', type: 'error' });
  }

  return (
    <button className='btn' onClick={messageDialog}>
      message 弹窗
    </button>
  );
}

export default MessageComponent;
```

#### dialog 打开或者保存相关属性

filter: 文件对话框的扩展过滤器

filter.extensions: `string[]` 例如:图片后缀 `['svg', 'png']`

filter.name: `string` 例如: `'Image'`

#### open 弹窗函数
使用方式：创建 open.jsx 文件
```jsx
import { open } from '@tauri-apps/api/dialog';

function OpenComponent() {
  async function openImageDialog() {
    const filePath = await open({
      multiple: false,
      filters: [
        {
          name: 'Image',
          extensions: ['png', 'svg', 'jpeg', 'jpg'],
        },
      ],
    });
    console.log(filePath);
  }

  async function openDirDialog() {
    const dirPath = await open({
      directory: true,
    });
    console.log(dirPath);
  }

  async function openDialog() {
    const filePath = await open({});
    console.log(filePath);
  }

  return (
    <div>
      <button className='btn' onClick={openImageDialog}>
        打开图片弹窗
      </button>
      <button className='btn' onClick={openDirDialog}>
        打开文件夹弹窗
      </button>
      <button className='btn' onClick={openDialog}>
        open 弹窗
      </button>
    </div>
  );
}

export default OpenComponent;
```
#### save 弹窗函数
使用方式：创建 save.jsx 文件
```jsx
import { save } from '@tauri-apps/api/dialog';

function SaveComponent() {
  async function saveImageDialog() {
    const filePath = await save({
      filters: [
        {
          name: 'Image',
          extensions: ['png', 'svg', 'webp', 'jpeg'],
        },
      ],
    });
    console.log(filePath);
  }

  async function saveDialog() {
    const dirPath = await save({
      filters: [
        {
          name: 'All',
          extensions: ['*'],
        },
      ],
    });
    console.log(dirPath);
  }

  return (
    <div className='dialog'>
      <button className='btn' onClick={saveDialog}>
        save 弹窗
      </button>
      <button className='btn' onClick={saveImageDialog}>
        save 图片弹窗
      </button>
    </div>
  );
}

export default SaveComponent;
```