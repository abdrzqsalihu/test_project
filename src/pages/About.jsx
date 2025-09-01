import React from "react";
import toast from "react-hot-toast";
import Button from "../components/Button";
import Card from "../components/Card";

const About = () => {
  const alertMe = (name) => {
    if (name === "Abdul!") {
      toast.success(`Hello ${name}`);
    } else {
      toast.error("Name is not Abdul");
    }
  };

  return (
    <div>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis facilis
        magni dolorum quam odit, alias, placeat, fugit vel dolor iusto
        consectetur facere sapiente rem aspernatur molestias perferendis sit
        esse cum iure id? Quasi pariatur sed, beatae et eveniet rem ducimus eum
        non repellendus voluptatem, harum nulla maxime, numquam debitis
        reprehenderit facilis nihil. Dicta sit magnam velit hic autem cum ad
        porro aperiam. Et officiis adipisci temporibus alias a deserunt eaque
        sed sunt omnis at mollitia, sint fugit voluptatum, magni enim, corporis
        quae porro odio incidunt officia fuga quasi est magnam voluptate. Vitae
        vel porro atque repellat, cum dicta nihil culpa maiores eaque ducimus
        perspiciatis dolorum quibusdam necessitatibus dolor aut dignissimos
        obcaecati odio modi harum quo doloribus dolores error architecto
        reiciendis. Excepturi repudiandae repellendus praesentium iste numquam
        similique tempora ea quibusdam eum dolore necessitatibus rerum ipsum
        officiis laborum voluptatum impedit aspernatur natus fugiat provident,
        veritatis quae dolores aperiam, velit consectetur. Cum tempore obcaecati
        necessitatibus, dolorum totam minus quidem asperiores fugit architecto
        sed assumenda, debitis pariatur numquam quasi delectus placeat sunt
        neque reprehenderit. Quo praesentium reprehenderit, inventore nemo
        porro, ducimus nostrum ipsa accusantium, impedit exercitationem commodi.
        Impedit recusandae tempore fugit rerum voluptates, commodi voluptatem
        tenetur sunt illum doloremque repudiandae, animi praesentium aliquid
        ipsa consequatur iusto est. Vitae magnam dolor animi odio veritatis sunt
        labore aliquid quis saepe, architecto laborum repellat voluptate nobis
        asperiores tenetur aperiam, mollitia autem amet harum laboriosam
        officiis itaque, iste aspernatur neque! Veniam ad, illo ducimus eaque
        adipisci quam velit suscipit sint cum, qui nisi numquam excepturi
        eveniet officia, doloribus accusamus nulla facere. Totam, commodi unde.
        Provident distinctio nisi id, reprehenderit, facilis, alias ratione
        assumenda eos deleniti libero illum et! Velit laboriosam modi veniam,
        doloribus atque nam accusamus corrupti illum iure ab sunt dignissimos ex
        quisquam pariatur dolore esse repudiandae accusantium possimus illo
        cumque incidunt veritatis enim est. Voluptate?
      </p>

      <button
        onClick={alertMe}
        className="p-1.5 bg-red-500 cursor-pointer text-white mt-10 mx-10"
      >
        Click me
      </button>
      {/* onClick={() => alertMe("Abdul")} */}

      <Button>Click me</Button>

      <div className="grid grid-cols-3 container mx-auto mt-10">
        <Card title="Card 1">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur nobis earum dolorum facere, sunt odit tempora dolorem
            sint sequi totam, soluta fugiat, labore animi laborum ex non impedit
            iure assumenda!
          </p>
        </Card>

        <Card title="hello" className="bg-green-600">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur nobis earum dolorum facere, sunt odit tempora dolorem
            sint sequi totam, soluta fugiat, labore animi laborum ex non impedit
            iure assumenda!
          </p>
        </Card>

        <Card title="Card 3">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur nobis earum dolorum facere, sunt odit tempora dolorem
            sint sequi totam, soluta fugiat, labore animi laborum ex non impedit
            iure assumenda!
          </p>
        </Card>
      </div>
    </div>
  );
};

export default About;
