import "./page.css";
import Card from "./components/Card";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between ">
      <section className="my-3 text-center">
        <div className="main__container">
          <h2 className="text-3xl font-bold text-gray-200">Next JS Test</h2>
          <span className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
            voluptas ducimus accusamus ea aut excepturi repellat doloremque
            numquam quibusdam est tenetur quis blanditiis asperiores placeat,
            commodi adipisci hic minima ullam! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Tenetur repellat aliquid suscipit
            facere adipisci eius sint, quam voluptatem? In eum ullam cum enim
            atque ducimus illum dolores id magni odit.
          </span>
        </div>
      </section>
      <section className="bg-gray-100 w-full ">
        <div className=" main__container relative">
          <div className="p-5 mb-10">
            <h2 className=" text-center text-2xl font-bold text-black">
              Title Goes Here
            </h2>
            <span className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
              voluptas ducimus accusamus ea aut excepturi repellat doloremque
              numquam quibusdam est tenetur quis blanditiis asperiores placeat,
              commodi adipisci hic minima ullam! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Tenetur repellat aliquid suscipit
              facere adipisci eius sint, quam voluptatem? In eum ullam cum enim
              atque ducimus illum dolores id magni odit.
            </span>
          </div>

          <div className="grid md:grid grid-cols-2 lg:grid-cols-4 gap-2 lg:absolute">
            {[1, 2, 3, 4].map((ele) => {
              return (
                <Card
                  arrow={true}
                  key={ele}
                  class="w-full bottom-7 "
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-gray-100 relative">
        <div className="main__container flex flex-col md:flex-row">
          <div className="w-full md:w-4/4 lg:w-1/2 p-4 m-4">
            <h2 className="text-2xl text-center font-bold text-black">
              Title Goes Here
            </h2>
            <span className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
              voluptas ducimus accusamus ea aut excepturi repellat doloremque
              numquam quibusdam est tenetur quis blanditiis asperiores placeat,
              commodi adipisci hic minima ullam! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Tenetur repellat aliquid suscipit
              facere adipisci eius sint, quam voluptatem? In eum ullam cum enim
              atque ducimus illum dolores id magni odit.
            </span>
          </div>
          <div className="w-full md:w-4/4 lg:w-1/2">
            <div className="grid grid-cols-2 gap-2">
              <Card arrow={false} label="1" class="absolute top-24 my-4 mx-5"  />
              <Card arrow={false} label="2" class="absolute top-8 my-4 mx-5" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Card arrow={false} label="3" class="absolute top-24 my-4 mx-5" />
              <Card arrow={false} label="4" class="absolute top-8 my-4 mx-5 " />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
