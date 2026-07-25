import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-gray-600 backdrop-blur-md rounded-xl shadow-xl p-8">
        <h1 className="text-3xl font-semibold text-white">受賞歴</h1>
        <div className="mt-6 space-y-3 text-white text-lg">
          <ul className="list-disc list-inside">
            <li>2026年2月 - 島根未来共創チャレンジ 2025 U-18 AWARD</li>
            <li>2025年11月 - 中高生Rubyプログラミングコンテスト 2025 審査員特別賞</li>
            <li>2025年2月 - 早寝早起き朝ごはんアプリコンテスト 開発部門 最優秀賞（文部科学大臣賞）</li>
            <li>2024年3月 - 2023年度 全国選抜小学生プログラミング大会 審査員特別賞</li>
            <li>2023年11月 - 2023年度 島根県小学生プログラミング大会 最優秀賞</li>
            <li>2023年3月 - 2022年度 全国選抜小学生プログラミング大会 みんなのみらい賞</li>
            <li>2022年11月 - 2022年度 島根県小学生プログラミング大会 最優秀賞</li>
          </ul>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/profile" className="inline-block px-4 py-2 rounded-md text-sm border text-white border-gray-200">プロフィールへ戻る</Link>
        </div>
      </div>
    </main>
  );
}