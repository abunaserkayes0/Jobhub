import { Button } from "flowbite-react";

const Banner = () => {
  return (
    <>
      <section className="grid place-items-center mb-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <article className="p-8">
          <h1 className="text-5xl font-bold">
            One Step <br/> Closer To Your
            <br /> <span className="text-purple-500">Dream Job</span>
          </h1>
          <p className="w-3/4 py-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            commodi, delectus dolore corrupti eius itaque mollitia omnis. Rem,
            ut tempore.
          </p>
          <Button className="bg-purple-500">Get Started</Button>
        </article>
        <article className="">
          <div>
            <img src="https://i.ibb.co/vqZtt0T/banner.png" alt="" />
          </div>
        </article>
      </section>
    </>
  );
};

export default Banner;
