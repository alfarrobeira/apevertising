type VideoDisplayProps = {
  filename: string;
  headline: string;
  subheader: string;
};

export function VideoDisplay({
  filename,
  headline,
  subheader,
}: VideoDisplayProps) {
  const multilineSubheader = subheader.split("\\n").map((fragment) => {
    return (
      <span>
        {fragment}
        <br />
      </span>
    );
  });

  return (
    <>
      <div className="relative flex justify-center">
        <video src={`/videos/${filename}`} autoPlay loop muted />
        <div className="absolute top-10 md:top-20 lg:top-40">
          <h1 className="text-4xl md:text-6xl lg:text-8xl uppercase font-semibold text-white text-center py-4 md:py-8 lg:py-12">
            {headline}
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-7xl gold text-center">
            {multilineSubheader}
          </h2>
        </div>
      </div>
    </>
  );
}
