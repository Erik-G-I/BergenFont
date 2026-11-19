
import LogoButton from './components/LogoButton';


export default function Home() {

  return (
    <main className="h-screen --color-background p-2 md:p-2 ">
      <div className="h-full place-content-evenly mx-auto max-w-5xl">
        <LogoButton />
      </div>
    </main>
  );
}