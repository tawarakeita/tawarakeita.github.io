import Link from 'next/link'
import Title from "../../components/Title";

export default function Page() {
  return (
      <main>
        <Title mainText = "制作アプリ" subText = "Apps" />
        <div>
          <Link href="/apps/shareyourlife">
            <span>shareYourLIFE</span>
          </Link>
        </div>
      </main>
  );
}
