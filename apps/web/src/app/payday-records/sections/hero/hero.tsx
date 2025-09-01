import Image from "next/image";

function Hero() {
  return (
    <section className="relative flex h-[100vh] items-center justify-center">
      <Image
        src="/images/logo/400_300/PAYDAY.png"
        alt="Payday Records"
        width={900}
        height={600}
      />
    </section>
  );
}

export default Hero;
