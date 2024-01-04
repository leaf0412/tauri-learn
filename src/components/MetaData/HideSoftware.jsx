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
