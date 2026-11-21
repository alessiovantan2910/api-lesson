import { useState } from 'react'

import './App.css'

type MessageResponse= {
  message: string
}

function App() {
  
  const [message, setMessage] = useState("まだ習得していません");
  const [loading, setLoading] = useState(false);

  const getMessage = async () => {
    setLoading(true);
    try{
      const response = await fetch('http://localhost:3000/api/message');
      if (!response.ok) {
        throw new Error('サーバーからの応答が不正です');
      }
      const data: MessageResponse = await response.json();

      setMessage(data.message);

    }catch {
      setMessage('サーバーからの応答が不正です。サーバーが起動しているか確認してください。');
    }finally{
      setLoading(false);
    }
  
  }
  return (
   <main>
   <h1>API通信の練習</h1>

   <button onClick={getMessage} disabled={loading}>
    {loading ? '読み込み中...' : 'サーバーにアクセス'}
   </button>

   <p>{message}</p>
   </main>
  )
}

export default App
