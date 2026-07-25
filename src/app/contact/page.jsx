export default function Page() {
  return (
    <div className='h-full flex sm:items-center justify-center mt-20 sm:mt-0 p-6'>
      <div className="w-full h-[75vh] max-w-3xl border-2 border-gray-600 rounded-xl shadow-xl">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScY7yA9YTvtbiXNoUnphjiWATnTnMPCEPdEtq2Wl1aR50RZBw/viewform?embedded=true"
          title="お問い合わせフォーム"
          className="w-full h-full"
        >読み込み中</iframe>
      </div>
    </div>
  );
}