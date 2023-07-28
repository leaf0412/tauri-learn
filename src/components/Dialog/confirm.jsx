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
