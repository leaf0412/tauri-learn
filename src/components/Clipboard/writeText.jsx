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
