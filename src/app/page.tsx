// src/app/page.tsx

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white px-6">
      <section className="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Ahmet Furkan Göktaş
        </h1>

        <p className="mt-5 text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
          Computer Engineering Student
          <br />
          Articles, projects and ideas.
        </p>
      </section>
    </main>
  );
}