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
