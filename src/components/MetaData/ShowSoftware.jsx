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
