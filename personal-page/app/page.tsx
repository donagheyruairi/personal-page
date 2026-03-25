let photos = [
  [
    {
      name: 'a1',
      width: '2880',
      height: '2160',
      alt: '',
    },
    {
      name: 'a2',
      width: '480',
      height: '640',
      alt: '',
    },
    {
      name: 'a3',
      width: '300',
      height: '225',
      alt: '',
    },
    {
      name: 'a4',
      width: '690',
      height: '1323',
      alt: '',
    },
  ],
  [
    {
      name: 'b1',
      width: '750',
      height: '1000',
      alt: '',
    },
    {
      name: 'b2',
      width: '586',
      height: '780',
      alt: '',
    },
    {
      name: 'b3',
      width: '750',
      height: '1000',
      alt: '',
    },
    {
      name: 'b4',
      width: '756',
      height: '568',
      alt: '',
    },
  ],
  [
    {
      name: 'c1',
      width: '3220',
      height: '3020',
      alt: '',
    },
    {
      name: 'c2',
      width: '2804',
      height: '4032',
      alt: '',
    },
    {
      name: 'c3',
      width: '4032',
      height: '2804',
      alt: '',
    },
    {
      name: 'c4',
      width: '3225',
      height: '3024',
      alt: '',
    },
  ],
  [
    {
      name: 'd1',
      width: '3024',
      height: '4032',
      alt: '',
    },
    {
      name: 'd2',
      width: '2903',
      height: '3024',
      alt: '',
    },
    {
      name: 'd3',
      width: '2903',
      height: '3024',
      alt: '',
    },
    {
      name: 'd4',
      width: '2302',
      height: '3070',
      alt: '',
    },
  ],
  [
    {
      name: 'e1',
      width: '4032',
      height: '3024',
      alt: '',
    },
    {
      name: 'e2',
      width: '450',
      height: '600',
      alt: '',
    },
    {
      name: 'e3',
      width: '3024',
      height: '4032',
      alt: '',
    },
    {
      name: 'e4',
      width: '1944',
      height: '2592',
      alt: '',
    },
  ],
  [
    {
      name: 'f1',
      width: '1656',
      height: '2208',
      alt: '',
    },
    {
      name: 'f2',
      width: '1036',
      height: '1381',
      alt: '',
    },
    {
      name: 'f3',
      width: '2592',
      height: '1944',
      alt: '',
    },
    {
      name: 'f4',
      width: '3024',
      height: '4032',
      alt: '',
    },
  ],
  [
    {
      name: 'g1',
      width: '3024',
      height: '4032',
      alt: '',
    },
    {
      name: 'g2',
      width: '4032',
      height: '3024',
      alt: '',
    },
    {
      name: 'g3',
      width: '2316',
      height: '3088',
      alt: '',
    },
    {
      name: 'g4',
      width: '3024',
      height: '4032',
      alt: '',
    },
  ],
  [
    {
      name: 'h1',
      width: '3024',
      height: '4032',
      alt: '',
    },
    {
      name: 'h2',
      width: '2003',
      height: '3840',
      alt: '',
    },
    {
      name: 'h3',
      width: '4032',
      height: '3024',
      alt: '',
    },
    {
      name: 'h4',
      width: '4032',
      height: '3024',
      alt: '',
    },
  ],
];

photos = [...photos, ...photos];

export default function Home() {
  return (
    <main className="home">
      <section className="relative flex flex-col justify-center h-[calc(100svh-80px)] overflow-hidden">
        <div className="absolute top-0 w-full flex flex-wrap justify-around p-0.5 lg:p-1 -z-1">
          {
            photos.map((photo, i) => (
              <div key={'photo-group-' + i} className="w-1/4 lg:w-1/8 flex flex-col justify-around grow">
                <picture>
                  <source
                    srcSet={'/home/768/' + photo[0].name + '.avif'}
                    type="image/avif"
                    media="(max-width:480px)"
                  />
                  <source
                    srcSet={'/home/768/' + photo[0].name + '.jpg'}
                    type="image/jpg"
                    media="(max-width:480px)"
                  />
                  <source
                    srcSet={'/home/1024/' + photo[0].name + '.avif'}
                    type="image/avif"
                    media="(min-width:480px)"
                  />
                  <img
                    src={'/home/1024/' + photo[0].name + '.jpg'}
                    alt={photo[0].alt}
                    width={photo[0].width}
                    height={photo[0].height}
                  />
                </picture>
                <picture>
                  <source
                    srcSet={'/home/768/' + photo[1].name + '.avif'}
                    type="image/avif"
                    media="(max-width:480px)"
                  />
                  <source
                    srcSet={'/home/768/' + photo[1].name + '.jpg'}
                    type="image/jpg"
                    media="(max-width:480px)"
                  />
                  <source
                    srcSet={'/home/1024/' + photo[1].name + '.avif'}
                    type="image/avif"
                    media="(min-width:480px)"
                  />
                  <img
                    src={'/home/1024/' + photo[1].name + '.jpg'}
                    alt={photo[1].alt}
                    width={photo[1].width}
                    height={photo[1].height}
                  />
                </picture>
                <picture>
                  <source
                    srcSet={'/home/768/' + photo[2].name + '.avif'}
                    type="image/avif"
                    media="(max-width:480px)"
                  />
                  <source
                    srcSet={'/home/768/' + photo[2].name + '.jpg'}
                    type="image/jpg"
                    media="(max-width:480px)"
                  />
                  <source
                    srcSet={'/home/1024/' + photo[2].name + '.avif'}
                    type="image/avif"
                    media="(min-width:480px)"
                  />
                  <img
                    src={'/home/1024/' + photo[2].name + '.jpg'}
                    alt={photo[2].alt}
                    width={photo[2].width}
                    height={photo[2].height}
                  />
                </picture>
                <picture>
                  <source
                    srcSet={'/home/768/' + photo[3].name + '.avif'}
                    type="image/avif"
                    media="(max-width:480px)"
                  />
                  <source
                    srcSet={'/home/768/' + photo[3].name + '.jpg'}
                    type="image/jpg"
                    media="(max-width:480px)"
                  />
                  <source
                    srcSet={'/home/1024/' + photo[3].name + '.avif'}
                    type="image/avif"
                    media="(min-width:480px)"
                  />
                  <img
                    src={'/home/1024/' + photo[3].name + '.jpg'}
                    alt={photo[3].alt}
                    width={photo[3].width}
                    height={photo[3].height}
                  />
                </picture>
              </div>
            ))
          }
        </div>
        <div className="absolute top-1 w-3/4 left-1/8 h-40 backdrop-brightness-150 backdrop-saturate-200 backdrop-contrast-200 -backdrop-hue-rotate-15 backdrop-invert-100 backdrop-blur-[2px] mask-[url(/home/name.svg)] mask-no-repeat mask-contain" />
      </section>
      <section className="p-4 bg-primary text-white/90">
        <p className="text-center">
          Find this website here on&nbsp;
          <a
            href="https://github.com/donagheyruairi/personal-page"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:animate-pulse"
          >
            GitHub
          </a>
        </p>
      </section>
      <section className="p-6 md:p-10 lg:p-16">
        <h2>
          Hi, I&apos;m Ruairí
        </h2>
        <p>This website is intended to be a personal portfolio, as well as somewhere I can blog and be generally creative from time to time. You&apos;re looking at the MVP right now, but I&apos;m hoping to update it soon with some more brainstorming and feedback. Stay tuned!</p>
      </section>
    </main>
  );
}
