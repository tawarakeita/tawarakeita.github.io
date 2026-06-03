import Link from "next/link";

export const metadata = {
  title: 'もったいない！ - 賞味期限管理アプリ',
  description: 'もったいない！は、賞味期限を管理できる便利なアプリです。',
};

export default function Page() {
  return (
    <main className='min-h-screen flex items-center justify-center p-6'>
      <div className="w-full max-w-3xl bg-gray-600 backdrop-blur-md rounded-xl shadow-xl p-8">
        <div className="space-y-3 text-white text-lg">
          <p className="text-3xl font-semibold">もったいない！</p>
          <p>開発開始: 2023年</p>
          <p>使用フレームワーク: Rails</p>
          <p>食品の情報を登録し賞味期限を管理できる便利なアプリです。グラフとして表示される機能や、レシピ投稿サイトと連携してを検索できる機能などの機能があります。</p>
          <p className="text-2xl font-semibold">使い方</p>
          <p>アプリを使用するためにはアカウントを作成する必要があります。（メールアドレスとパスワードでアカウントを作成できます。）</p>
          <p>「一覧」では、登録した食品が表として表示されます。</p>
          <p>「実績」では、月毎に賞味期限内にどのくらい使い切れているかがグラフで表示されます。</p>
          <p>「レシピを検索」では、使いたい食品を選択し、レシピ投稿サイトでレシピを検索できます。</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/services" className="inline-block px-4 py-2 rounded-md text-sm border text-white border-gray-200">サービス一覧に戻る</Link>
          <a href="https://mottainai.kei-apps.com" className="inline-block px-4 py-2 rounded-md text-sm border text-white border-gray-200" target="_blank" rel="noopener noreferrer">アプリはこちら</a>
        </div>
      </div>
    </main>
  );
}