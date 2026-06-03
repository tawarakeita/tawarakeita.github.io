import Link from "next/link";

export const metadata = {
  title: 'shareYourLIFE - 日々のルーティーンを楽しく',
  description: 'shareYourLIFEは、寝た時間・起きた時間・朝ごはんを共有して、より良い生活を目指すアプリです。',
};

export default function Page() {
  return (
    <main className='min-h-screen flex sm:items-center justify-center mt-20 sm:mt-0 p-6'>
      <div className="w-full max-w-3xl bg-gray-600 backdrop-blur-md rounded-xl shadow-xl p-8">
        <div className="space-y-3 text-white text-lg">
          <p className="text-3xl font-semibold">shareYourLIFE</p>
          <p>開発開始: 2024年</p>
          <p>使用フレームワーク: Rails</p>
          <p>寝た時間・起きた時間・朝ごはんを共有して、より良い生活を目指すアプリです。</p>
          <p className="text-2xl font-semibold">使い方</p>
          <p>投稿するためにはアカウントを作成します。閲覧のみであれば、アカウント作成は必要ありません。（メールアドレスとパスワードでアカウントを作成できます。）</p>
          <p>「みんなの朝ごはん」では、朝ごはんの写真、タイトル、説明を入力すると投稿できます。</p>
          <p>「みんなの早寝」、「みんなの早起き」では、時間が早い順にランキングが表示されます。</p>
          <p>
            「レシピを検索」では、使いたい食品を選択し、レシピ投稿サイトでレシピを検索できます。
            <br />&#8251;目標時間を入力し、その時間との差を元にランキングを表示するように改良中です。
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/services" className="inline-block px-4 py-2 rounded-md text-sm border text-white border-gray-200">サービス一覧に戻る</Link>
          <a href="https://syl.kei-apps.com" className="inline-block px-4 py-2 rounded-md text-sm border text-white border-gray-200" target="_blank" rel="noopener noreferrer">アプリはこちら</a>
        </div>
      </div>
    </main>
  );
}