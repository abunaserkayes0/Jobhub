import { Button } from "flowbite-react";

const Banner = () => {
  return (
    <>
      <section className="flex place-items-center lg:flex-row">
        <article className="place-items-center p-10">
          <h1 className="text-5xl font-bold py-5">
            One Step Closer To Your
            <br /> <span className=" text-purple-500">Dream Job</span>
          </h1>
          <p className="w-3/4 py-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            commodi, delectus dolore corrupti eius itaque mollitia omnis. Rem,
            ut tempore.
          </p>
          <Button className="bg-purple-500">Get Started</Button>
        </article>
        <article>
          <div className="w-full">
            <img src="https://i.ibb.co/vqZtt0T/banner.png" alt="" />
          </div>
        </article>
      </section>
    </>
  );
};

export default Banner;
