export default function Page() {
  return (
    <main className='m-[40px]'>
      <div className="flex items-center mb-5">
        <h1 className='text-3xl mr-[15px]'>shareYourLIFEとは</h1>
        <a href="http://syl.kei-apps.com" target="_blank">
          <button className="bg-[#4F58D3] text-white w-[150px] h-[40px] border-none">アプリはこちら</button>
        </a>
      </div>
      <span>
        shareYourLIFEとは、寝た時間、起きた時間、朝ごはんを共有して、より良い生活を目指すアプリです。
      </span>
      <h1 className='text-3xl mr-[15px] my-5'>使い方</h1>
      <span>
        投稿するためにはアカウントを作成します。（閲覧のみであれば、アカウント作成は必要ありません。）
        <br />
        「みんなの朝ごはん」では、朝ごはんの写真、タイトル、説明を入力すると投稿できます。
        <br />
        「みんなの早寝」、「みんなの早起き」では、時間が早い順にランキングが表示されます。
        <br />
        &#8251;目標時間を入力し、その時間との差を元にランキングを表示するように改良中です。
      </span>
      <br />
      <div className='mt-5'>
        <span>
          ご不明な点や、バグなどの報告は、以下のフォームに送信お願いします。
        </span>
        <br />
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScY7yA9YTvtbiXNoUnphjiWATnTnMPCEPdEtq2Wl1aR50RZBw/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#4F58D3] text-white w-[140px] h-[30px] border-none" style={{ marginTop: "10px" }}>
            フォームはこちら
          </button>
        </a>
      </div>
    </main>
  );
}