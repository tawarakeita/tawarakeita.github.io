export const metadata = {
  title: 'もったいない！ - 賞味期限管理アプリ',
  description: 'もったいない！は、賞味期限を管理できる便利なアプリです。',
};

export default function Page() {
  return (
    <main className='m-[40px]'>
      <div className="flex items-center mb-5">
        <h1 className='text-3xl mr-[15px]'>もったいない！とは</h1>
        <a href="https://mottainai.kei-apps.com" target="_blank">
          <button className="bg-[#4F58D3] text-white w-[150px] h-[40px] border-none">アプリはこちら</button>
        </a>
      </div>
      <span>
        もったいない！とは、食品の情報を登録し賞味期限を管理できる便利なアプリです。便利に使用できる機能がたくさんあります。
      </span>
      <h1 className='text-3xl mr-[15px] my-5'>使い方</h1>
      <span>
        アプリを使用するためにはアカウントを作成する必要があります。（メールアドレスとパスワードを入力するとアカウントを作成できます。）
        <br />
        「一覧」では、登録した食品が表として表示されます。
        <br />
        「実績」では、月毎に賞味期限内にどのくらい使い切れているかがグラフで表示されます。
        <br />
        「クックパッドでレシピを検索」では、使いたい食品を選択し、外部サイト（クックパッド）でレシピを検索できます。
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