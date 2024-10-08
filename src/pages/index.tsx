import Navbar from '../components/main/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <section id="about" className="min-h-screen p-8 bg-gray-100">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p>Hello! I'm a passionate developer...</p>
        </section>
        <section id="projects" className="min-h-screen p-8 bg-white">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p>Here are some of my projects...</p>
        </section>
        <section id="contact" className="min-h-screen p-8 bg-gray-100">
          <h2 className="text-4xl font-bold mb-4">Contact</h2>
          <p>Feel free to reach out via email or LinkedIn...</p>
        </section>
      </main>
    </div>
  );
}
