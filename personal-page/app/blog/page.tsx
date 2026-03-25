import albumData from '@/components/AlbumList';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({ subsets: ['latin'] });

// const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
// const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

// const accessTokenRes = await fetch('https://accounts.spotify.com/api/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded',
//   },
//   body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET,
//   next: { revalidate: 3600 },
// });

// const { access_token } = await accessTokenRes.json();

const albums = await Promise.all(albumData.map(async (album) => {
//   const res = await fetch(`https://api.spotify.com/v1/search?type=album&limit=1&q=${encodeURIComponent(album.name)}%2B${encodeURIComponent(album.artist)}`, {
//     headers: {
//       Authorization: `Bearer ${access_token}`,
//     },
//   });

  // const resJson: {
  //   albums: {
  //     items: {
  //       name: string
  //       release_date: string
  //       artists: { name: string }[]
  //       images: { url: string }[]
  //       external_urls: { spotify: string }
  //     }[]
  //   }
  // } = await res.json();

  // return {
  //   name: resJson.albums.items[0].name || ,
  //   artist: resJson.albums.items[0].artists[0].name,
  //   release_date: resJson.albums.items[0].release_date,
  //   image: resJson.albums.items[0].images[0].url,
  //   rating: album.rating,
  //   date: album.date,
  //   aotyAlbumID: album.aotyAlbumID,
  //   aotyArtistID: album.aotyArtistID,
  //   url: resJson.albums.items[0].external_urls.spotify,
  // };

  return {
    name: album.name,
    artist: album.artist,
    release_date: '',
    image: '',
    rating: album.rating,
    date: album.date,
    aotyAlbumID: album.aotyAlbumID,
    aotyArtistID: album.aotyArtistID,
    url: '',
  };
}));

export default async function Blog() {
  return (
    <main>
      <section className="p-4 border-b">
        <h1 className="text-center">Blog</h1>
      </section>
      <section className="p-4 text-justify lg:inline-block lg:w-1/2 align-top">
        <p>I&apos;m going to use this space to start blogging/writing. Currently unsure if in a substack way or a twitter way, likely both. You&apos;ll find below my top albums from aoty, and below that any writing I&apos;ve done. Maybe I&apos;ll subdivide this page in future, when theres more content on it, who knows?</p>
      </section>
      <section className={'bg-[#202225] text-[#DCDDDE] w-[calc(100%-16px)] lg:w-[calc(50%-16px)] lg:h-[calc(100dvh-189px)] overflow-y-scroll m-2 inline-block ' + openSans.className}>
        <h2 className="pt-4">Some of my top albums</h2>
        <p className="px-3.75 xs:px-5">I&apos;m a big fan of these albums. Click on them to see their AOTY page and my review, or use the Spotify button to listen to them yourself. (No album artwork or Spotify links for the moment. Fighting with Spotify API limiting.)</p>
        <div className="my-3.75 flex h-8 md:h-10 justify-evenly">
          <a
            href="https://open.spotify.com/"
            target="blank_"
            rel="noopener noreferrer"
            className="h-full aspect-300/82"
          >
            <img
              src="/blog/music-widget/spotify-full.svg"
              width={300}
              height={82}
              alt="Spotify Logo"
              className="min-w-[70px] h-full object-contain"
            />
          </a>
          <a
            href="https://www.albumoftheyear.org/"
            target="blank_"
            rel="noopener noreferrer"
            className="h-full aspect-461/179"
          >
            <img
              src="/blog/music-widget/aoty-title-dark.png"
              alt=""
              width={461}
              height={179}
              className=""
            />
          </a>
          <div className="flex h-full items-center gap-2">
            <a
              href="https://www.albumoftheyear.org/user/shayrd2305/"
              target="blank_"
              rel="noopener noreferrer"
              className="h-full aspect-square"
            >
              <img
                src="/blog/music-widget/profile-icon.jpg"
                alt=""
                width={150}
                height={150}
                className="rounded-[50%] object-contain"
              />
            </a>
            <a
              href="https://www.albumoftheyear.org/user/shayrd2305/"
              target="blank_"
              rel="noopener noreferrer"
              className="max-[375px]:hidden"
            >
              <div className="text-sm hover:underline font-bold">Shayrd2305</div>
            </a>
          </div>
        </div>
        {
          albums.map(album => (
            <div key={album.aotyAlbumID} className="w-1/3 px-[3%] pt-2.5 pb-3.75 mb-3.75 lg:w-1/6 lg:px-[1%] inline-block">
              <a
                href={'https://www.albumoftheyear.org/album/' + album.aotyAlbumID + '.php'}
                target="blank_"
                rel="noopener noreferrer"
              >
                <img
                  src={album.image}
                  alt=""
                  width={640}
                  height={640}
                  className="w-full rounded-sm lg:rounded-lg mb-1.25"
                />
              </a>
              <a
                href={'https://www.albumoftheyear.org/artist/' + album.aotyArtistID + '/'}
                target="blank_"
                rel="noopener noreferrer"
                className="text-xs hover:underline"
              >
                <div className="overflow-hidden whitespace-nowrap text-ellipsis">{album.artist}</div>
              </a>
              <a
                href={'https://www.albumoftheyear.org/album/' + album.aotyAlbumID + '.php'}
                target="blank_"
                rel="noopener noreferrer"
                className="text-xs hover:underline font-semibold"
              >
                <div className="overflow-hidden whitespace-nowrap text-ellipsis">{album.name}</div>
              </a>
              <div className="flex justify-between mt-1 items-center">
                <div className="text-xs text-[#808080] h-min overflow-hidden whitespace-nowrap text-ellipsis">{album.release_date.split('-')[0]}</div>
                <a
                  href={album.url ? album.url : undefined}
                  target="blank_"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/blog/music-widget/spotify-small.svg"
                    width={157}
                    height={150}
                    className="w-[21px]"
                    alt="The Spotify Logo"
                  />
                </a>
              </div>
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
