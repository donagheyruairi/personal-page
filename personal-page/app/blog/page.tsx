import albums from '@/components/albumList';
import Image from 'next/image';

import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({ subsets: ['latin'] });

export default function Blog() {
  return (
    <main>
      <section className="p-4 border-b">
        <h1 className="bg-inherit text-center">Blog</h1>
      </section>
      <section className="p-4 text-justify lg:inline-block lg:w-1/2 align-top">
        <p>I&apos;m going to use this space to start blogging/writing. Currently unsure if in a substack way or a twitter way, likely both. You&apos;ll find below my top albums from aoty, and below that any writing I&apos;ve done. Maybe I&apos;ll subdivide this page in future, when theres more content on it, who knows?</p>
      </section>
      <section className={'bg-[#202225] text-[#DCDDDE] w-[calc(100%-16px)] lg:w-[calc(50%-16px)] lg:h-[calc(100dvh-189px)] overflow-y-scroll m-2 px-3.75 xs:px-5 inline-block ' + openSans.className}>
        <div className="py-3.75 flex items-center gap-2 h-22">
          <a
            href="https://www.albumoftheyear.org/"
            target="blank_"
          >
            <Image
              src="https://www.albumoftheyear.org/images/title-dark.png"
              alt=""
              width={461}
              height={179}
              className="w-21 h-7.5"
            />
          </a>
          <a
            href="https://www.albumoftheyear.org/user/shayrd2305/"
            target="blank_"
          >
            <Image
              src="https://cdn.albumoftheyear.org/user/thumbs/shayrd2305_1737509752.jpg"
              alt=""
              width={150}
              height={150}
              className="border rounded-[50%] w-10 h-10"
            />
          </a>
          <a
            href="https://www.albumoftheyear.org/user/shayrd2305/"
            target="blank_"
          >
            <div className="text-sm hover:underline font-bold">Shayrd2305</div>
          </a>
        </div>
        {
          albums.map(album => (
            <div key={album.id} className="w-1/3 px-[3%] pt-2.5 pb-3.75 mb-3.75 lg:w-1/6 lg:px-[1%] inline-block">
              <a
                href={'https://www.albumoftheyear.org/album/' + album.id + '.php'}
                target="blank_"
              >
                <Image
                  src={'https://cdn2.albumoftheyear.org/400x0/album/' + (album.photoId ? album.photoId : album.id) + '.jpg'}
                  alt=""
                  width={200}
                  height={200}
                  className="w-full border border-[#2F3136] mb-1.25"
                />
              </a>
              <a
                href={'https://www.albumoftheyear.org/artist/' + album.artistId + '/'}
                className="text-xs text-[#A9A9A9] hover:underline"
                target="blank_"
              >
                <div className="overflow-hidden whitespace-nowrap text-ellipsis">{album.artistName}</div>
              </a>
              <a
                href={'https://www.albumoftheyear.org/album/' + album.id + '.php'}
                className="text-xs hover:underline font-bold"
                target="blank_"
              >
                <div className="overflow-hidden whitespace-nowrap text-ellipsis">{album.name}</div>
              </a>
              <div className="text-[11px] text-[#808080] pt-0.75 overflow-hidden whitespace-nowrap text-ellipsis">{album.typeFunctions}</div>
              <div className="border-t border-[#36393F] border-dotted mt-2 flex items-center">
                <div className="w-10 py-1.25 pr-2.5 items-center flex flex-col">
                  <div className="text-sm mt-0.75 mb-0.5 w-fit">{album.rating}</div>
                  <div className="bg-[#72767D] w-7.5 h-1">
                    <div className="bg-[#85CE73] h-full" style={{ width: `${album.rating}%` }} />
                  </div>
                </div>
                <div className="text-[11px] text-[#72767D]">{album.date}</div>
              </div>
            </div>
          ),
          )
        }
      </section>
    </main>
  );
}
