import { title } from "@/components/primitives";

export default function HomePage() {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <h1 className={title()}>Home</h1>
      </div>
    </section>
  );
}
