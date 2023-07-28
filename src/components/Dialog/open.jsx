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
