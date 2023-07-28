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
