import Image from 'next/image';

const photos = [
  [
    {
      name: 'a',
      width: '100',
      height: '100',
      alt: '',
    },
    {
      name: 'b',
      width: '100',
      height: '100',
      alt: '',
    },
    {
      name: 'c',
      width: '100',
      height: '100',
      alt: '',
    },
    {
      name: 'd',
      width: '100',
      height: '100',
      alt: '',
    },
  ],
  [
    {
      name: 'e',
      width: '100',
      height: '100',
      alt: '',
    },
    {
      name: 'f',
      width: '100',
      height: '100',
      alt: '',
    },
    {
      name: 'g',
      width: '100',
      height: '100',
      alt: '',
    },
    {
      name: 'h',
      width: '100',
      height: '100',
      alt: '',
    },
  ],
  [
    {
      name: 'i',
      width: '100',
      height: '100',
      alt: '',
    },
    {
      name: 'j',
      width: '100',
      height: '100',
      alt: '',
    },
    {
      name: 'k',
      width: '100',
      height: '100',
      alt: '',
    },
    {
      name: 'l',
      width: '100',
      height: '100',
      alt: '',
    },
  ],
  [
    {
      name: 'm',
      width: '100',
      height: '100',
      alt: '',
    },
    {
      name: 'n',
      width: '100',
      height: '100',
      alt: '',
    },
    {
      name: 'o',
      width: '100',
      height: '100',
      alt: '',
    },
    {
      name: 'p',
      width: '100',
      height: '100',
      alt: '',
    },
  ],
  [
    {
      name: 'q',
      width: '100',
      height: '100',
      alt: '',
    },
    {
      name: 'r',
      width: '100',
      height: '100',
      alt: '',
    },
    {
      name: 'c',
      width: '100',
      height: '100',
      alt: '',
    },
    {
      name: 'd',
      width: '100',
      height: '100',
      alt: '',
    },
  ],
  [
    {
      name: 'a',
      width: '100',
      height: '100',
      alt: '',
    },
    {
      name: 'b',
      width: '100',
      height: '100',
      alt: '',
    },
    {
      name: 'c',
      width: '100',
      height: '100',
      alt: '',
    },
    {
      name: 'd',
      width: '100',
      height: '100',
      alt: '',
    },
  ],
  [
    {
      name: 'a',
      width: '100',
      height: '100',
      alt: '',
    },
    {
      name: 'b',
      width: '100',
      height: '100',
      alt: '',
    },
    {
      name: 'c',
      width: '100',
      height: '100',
      alt: '',
    },
    {
      name: 'd',
      width: '100',
      height: '100',
      alt: '',
    },
  ],
  [
    {
      name: 'a',
      width: '100',
      height: '100',
      alt: '',
    },
    {
      name: 'b',
      width: '100',
      height: '100',
      alt: '',
    },
    {
      name: 'c',
      width: '100',
      height: '100',
      alt: '',
    },
    {
      name: 'd',
      width: '100',
      height: '100',
      alt: '',
    },
  ],
];

export default function Home() {
  return (
    <main className="home">
      <section className="relative flex flex-col justify-center h-[calc(100svh-80px)] overflow-hidden">
        <div className="absolute top-0 w-full flex justify-around p-1 -z-1">
          {
            photos.map((photo, i) => (
              <div key={'photo-group-' + i} className="w-1/8 flex flex-col justify-around grow">
                <Image src={'/photos/' + photo[0].name + '.jpg'} width={Number(photo[0].width)} height={Number(photo[0].height)} alt={photo[0].alt} />
                <Image src={'/photos/' + photo[1].name + '.jpg'} width={Number(photo[1].width)} height={Number(photo[1].height)} alt={photo[1].alt} />
                <Image src={'/photos/' + photo[2].name + '.jpg'} width={Number(photo[2].width)} height={Number(photo[2].height)} alt={photo[2].alt} />
                <Image src={'/photos/' + photo[3].name + '.jpg'} width={Number(photo[3].width)} height={Number(photo[3].height)} alt={photo[3].alt} />
                <Image src={'/photos/' + photo[0].name + '.jpg'} width={Number(photo[0].width)} height={Number(photo[0].height)} alt={photo[0].alt} />
                <Image src={'/photos/' + photo[1].name + '.jpg'} width={Number(photo[1].width)} height={Number(photo[1].height)} alt={photo[1].alt} />
                <Image src={'/photos/' + photo[2].name + '.jpg'} width={Number(photo[2].width)} height={Number(photo[2].height)} alt={photo[2].alt} />
                <Image src={'/photos/' + photo[3].name + '.jpg'} width={Number(photo[3].width)} height={Number(photo[3].height)} alt={photo[3].alt} />
              </div>
            ))
          }
        </div>
        <h1 className="sticky top-24 text-center rounded z-1 backdrop-blur-[2px] backdrop-hue-rotate-25 backdrop-brightness-50 bg-black/25 text-white">My name is Ruairí Donaghey.</h1>
        {/* <div className="w-full h-full z-1 backdrop-saturate-200">
          <h1 className="sticky top-24 text-center rounded z-1 bg-black/25 backdrop-blur-lg">My name is Ruairí Donaghey.</h1>
          <p className="md:absolute top-2/3 md:right-4 text-center rounded">I am a recent Computer Science graduate from Trinity College Dublin.</p>
        </div> */}
      </section>
      <section className="p-4">
        <p>
          Find me here on&nbsp;
          <a
            href="https://www.linkedin.com/in/ruairi-donaghey-55a813267"
            rel="noopener noreferrer"
            target="_blank"
            className="hover:animate-pulse"
          >
            LinkedIn
          </a>
        </p>
      </section>
    </main>
  );
}
