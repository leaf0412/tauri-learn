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
