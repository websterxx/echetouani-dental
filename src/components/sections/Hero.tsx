export function Hero() {
  return (
    <section className="relative shadow-sm w-full flex items-center justify-center h-[calc(100vh-4rem)]">
      <div className="absolute inset-0">
        <video
            autoPlay
            loop
            muted
            playsInline
            poster="/posterImage.png"
            className="w-full h-full object-cover"
        >
            <source src="/presentationCabinnet.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
       
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          Un Sourire Sain Commence Ici
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
          Soins Dentaires Professionnels par Marouane & Ahmed Echetouani
        </p>
      </div>
    </section>
  );
}