export default function Hero() {
  return (
    <section className="w-full py-32 text-center flex flex-col items-center">
      <h1 className="text-6xl font-semibold max-w-4xl">
        The final meeting platform.
      </h1>

      <p className="mt-6 max-w-xl text-neutral-500">
        Replace live calls with smarter async collaboration.
      </p>

      <div className="flex gap-4 mt-10">
        <button className="border px-8 py-3 rounded-lg">
          Book a demo
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg">
          Try for free
        </button>
      </div>
    </section>
  );
}
