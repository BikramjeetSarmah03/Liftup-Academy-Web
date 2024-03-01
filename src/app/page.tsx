import Heading from "@/components/ui/heading";
import "@/styles/home.css";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="max-w-[85%] mx-auto">
          <div className="md:w-1/2 space-y-4">
            <Heading
              subtitle="WELCOME TO ACADEMIA"
              title="Best Online Education Expertise"
              className="text-left"
            />
            <p className="text-xl">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="flex flex-col md:flex-row md:gap-4">
              <button className="primary-btn">
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button className="mt-2">
                VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
