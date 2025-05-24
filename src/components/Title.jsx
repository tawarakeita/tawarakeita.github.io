export default function Title({ mainText = "", subText = "" }) {
  return (
      <div className="mt-12 mb-4 flex flex-col items-center">
          <h2 className="text-3xl">{mainText}</h2>
          <h3 className='mt-1'>{subText}</h3>
      </div>
  );
}
