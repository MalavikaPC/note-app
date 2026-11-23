import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-between min-h-screen p-5 m-5">
      <div className="md:grid grid-cols-2 items-center gap-10">
        <div>
<h1 className="text-blue-700 font-bold text-4xl">Note Hub</h1>
<h1 className="text-blue-500 text-2xl font-bold mt-4">Capture Your Thoughts</h1>
<p className="text-gray-500 my-5 text-justify text-lg">
  A note app is designed to help users capture ideas, reminders, and information quickly and efficiently. Unlike traditional paper notebooks, note apps often include features such as text formatting, checklists, attachments, audio recording, and cloud synchronization, making it easy to access your notes from multiple devices 
Apple
Apple
+1
. They are widely used by students, professionals, and anyone who wants to organize personal or work-related information.
</p>
<Link href={'/login'} className='bg-blue-700 text-white p-2 rounded'>LET'S START</Link>
        </div>
        <div>
          <Image height={200} width={200} alt="image" src={'https://media0.giphy.com/media/QxwAkFFuYKkO8nydLT/giphy.gif'}/>
        </div>
      </div>
      
    </div>
  );
}
