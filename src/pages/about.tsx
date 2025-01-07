export default function About() {
  return (
    <main className="max-w-screen-xl mx-auto p-4 space-y-10">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <section>
          <h1 className="text-3xl font-semibold">Our Story</h1>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            scelerisque, mi non tincidunt auctor, turpis sapien tincidunt mi, a
            euismod nunc nisl vel nunc. Nullam nec metus nec nunc lacinia
            ultricies. Nullam auctor, odio et ultricies varius, nunc nisl
            ultricies eros, nec bibendum libero metus vel nunc. Nullam nec met
          </p>
        </section>
        <section>
          <img
            src="/gallery/image-11.jpg"
            alt="about"
            className="w-full h-full object-cover"
          />
        </section>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <section>
          <img
            src="/gallery/image-9.jpg"
            alt="about"
            className="w-full h-full object-cover"
          />
        </section>
        <section>
          <h1 className="text-3xl font-semibold">Our Goal</h1>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            scelerisque, mi non tincidunt auctor, turpis sapien tincidunt mi, a
            euismod nunc nisl vel nunc. Nullam nec metus nec nunc lacinia
            ultricies. Nullam auctor, odio et ultricies varius, nunc nisl
            ultricies eros, nec bibendum libero metus vel nunc. Nullam nec met
          </p>
        </section>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <section>
          <h1 className="text-3xl font-semibold">Our Mission</h1>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            scelerisque, mi non tincidunt auctor, turpis sapien tincidunt mi, a
            euismod nunc nisl vel nunc. Nullam nec metus nec nunc lacinia
            ultricies. Nullam auctor, odio et ultricies varius, nunc nisl
            ultricies eros, nec bibendum libero metus vel nunc. Nullam nec met
          </p>
        </section>
        <section>
          <img
            src="/gallery/image-26.jpg"
            alt="about"
            className="w-full h-full object-cover"
          />
        </section>
      </section>
    </main>
  );
}
