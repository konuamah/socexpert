import Image from 'next/image';

export default function CollageGrid() {
  return (
    <div className="w-full py-8 overflow-x-auto">
      <div className="min-w-[1024px] grid grid-cols-4 grid-rows-2 gap-2 px-4">
        {/* Tall Image - Left */}
        <div className="row-span-2 h-[600px] overflow-hidden rounded-3xl relative">
          <Image
            src="/collage1.jpg"
            alt="Image 1"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
          />
        </div>

        {/* Top Middle Left */}
        <div className="col-start-2 row-start-1 h-[295px] overflow-hidden rounded-3xl relative">
          <Image
            src="/collage2.jpg"
            alt="Image 2"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
          />
        </div>

        {/* Bottom Middle Left */}
        <div className="col-start-2 row-start-2 h-[295px] overflow-hidden rounded-3xl relative">
          <Image
            src="/collage3.jpg"
            alt="Image 3"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
          />
        </div>

        {/* Tall Image - Middle Right */}
        <div className="col-start-3 row-span-2 row-start-1 h-[600px] overflow-hidden rounded-3xl relative">
          <Image
            src="/collage4.jpg"
            alt="Image 4"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
          />
        </div>

        {/* Top Right */}
        <div className="col-start-4 row-start-1 h-[295px] overflow-hidden rounded-3xl relative">
          <Image
            src="/collage5.jpg"
            alt="Image 5"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
          />
        </div>

        {/* Bottom Right */}
        <div className="col-start-4 row-start-2 h-[295px] overflow-hidden rounded-3xl relative">
          <Image
            src="/collage6.jpg"
            alt="Image 6"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
