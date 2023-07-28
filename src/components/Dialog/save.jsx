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
