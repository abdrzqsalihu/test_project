import { cakeData, heroContent } from "../constants/recipes";

const Home = () => {
  const cars = ["Ford", "BMW", "Audi", "Mercedes"];

  return (
    <div className="max-w-[1300px] mx-auto mt-10 px-5 md:px-0">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {cakeData.map((data) => (
          <div
            key={data.id}
            className="shadow-md hover:shadow-xl hover:shadow-orange-200 hover:cursor-pointer transition"
          >
            <div className="max-h-[300px]">
              <img
                src={data.image}
                className="w-[500px] h-[300px] object-cover"
                alt=""
              />
            </div>

            <div className="p-6">
              <h1 className="text-[#E65100] font-bold text-[23px]">
                {data.name}
              </h1>
              <p className="text-gray-600 text-sm mt-1">{data.desc}</p>
            </div>

            <div className="border-t border-gray-200 flex gap-6 p-4 px-6">
              <a href="" className="text-orange-400 uppercase">
                Ingredients
              </a>
              <a href={data.id} className="text-orange-400 uppercase">
                Bake Now
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-10">
        <div className="md:col-span-2 md:row-span-2 bg-red-300 rounded-lg text-white p-6">
          1
        </div>
        <div className="bg-red-300 rounded-lg md:row-span-2 text-white p-6">
          2
        </div>
        <div className="bg-red-300 rounded-lg text-white p-6">3</div>
        <div className="bg-red-300 rounded-lg text-white p-6">4</div>
      </div>
      <h1>My Cars</h1>
      <div className="grid grid-cols-4">
        {cars.map((car, index) => (
          <div key={index} className="text-3xl text-green-800">
            {car}
          </div>
        ))}
      </div>
      <div>{heroContent.name}</div>
      <p>{heroContent.content}</p>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
        voluptates voluptate inventore reprehenderit esse omnis quis, non
        maiores. Nostrum eveniet ducimus perspiciatis voluptatum atque
        distinctio recusandae vitae molestiae dolores, veniam facilis est dolore
        quaerat repellat consectetur sit illo cum vel! Facere sunt quisquam
        cupiditate placeat voluptates, quo doloremque repellendus beatae
        perspiciatis laudantium nobis ipsam eos atque dolores maiores aliquid
        vitae? Odio corrupti ea, saepe ducimus incidunt unde commodi ab! Saepe,
        necessitatibus? Deleniti sapiente nemo, facere nesciunt, cupiditate
        tempora doloribus delectus voluptas consequuntur neque velit eligendi
        expedita, sunt sed natus nobis magnam quas aut earum consectetur.
        Tempore sequi eveniet perferendis accusamus modi quo incidunt rem
        aliquam maxime doloribus odit cum expedita laborum velit deserunt beatae
        error, sunt reiciendis iste dignissimos sapiente itaque natus magni.
        Distinctio debitis dolor minus optio soluta porro incidunt reiciendis
        nam voluptatem voluptates, animi, repellendus deleniti ipsum architecto
        ex voluptatum inventore sed magnam tempore totam, assumenda voluptatibus
        repellat! Saepe assumenda reprehenderit nulla minima sit minus tempore
        distinctio dolor, nemo voluptatibus facilis aliquid repellendus
        asperiores veritatis, repellat quaerat ipsum quod vel quae iste eos,
        tempora nisi nostrum? Aspernatur iste quae illo similique dolor, totam
        non illum voluptates cupiditate laborum mollitia magnam qui praesentium
        provident in asperiores deleniti sed, natus ut unde! Sunt aliquam
        incidunt dolores neque beatae blanditiis dicta optio facilis similique
        magni sint exercitationem, a voluptatem ullam doloremque voluptatibus
        ratione consequuntur veritatis? Necessitatibus non maxime quia quos!
        Quasi voluptas aperiam atque amet exercitationem quidem assumenda unde,
        beatae deleniti, porro quod laborum necessitatibus. Quisquam facilis
        dicta alias sequi placeat voluptate ducimus, itaque quis delectus,
        incidunt, cupiditate accusamus quos id ullam assumenda? Cum doloremque
        amet dignissimos nihil saepe, eos aliquam praesentium sunt commodi quam
        corporis quia at, ea, iste accusantium fugiat illum iure harum ex
        exercitationem inventore consequatur consectetur. Asperiores ex
        voluptates corporis aliquid doloremque perferendis consequatur
        reprehenderit minus cumque, a, ullam sint, nesciunt eos hic praesentium
        maiores. Illum perspiciatis vel aliquam cum rerum provident iste eius
        saepe at, ad dolorum, nostrum itaque! Delectus dignissimos similique
        voluptas, nostrum libero ducimus quaerat molestias incidunt assumenda
        odio illum explicabo perferendis consequuntur, sint necessitatibus odit
        veritatis qui nihil amet provident quos! Perspiciatis deleniti
        laudantium odit fugit enim accusamus cum quidem neque ullam quas?
        Inventore deserunt enim nihil magni consectetur accusamus illum officia
        ipsum, voluptatum dolore, repellendus necessitatibus. Nemo officia,
        expedita, error optio deleniti eum ratione maxime blanditiis debitis quo
        tempore facilis id esse repudiandae corrupti mollitia voluptatibus ipsam
        molestias architecto ipsum? Odit, inventore molestiae cum, sit placeat
        illo corrupti autem, ipsam doloribus assumenda in ratione velit
        voluptatem temporibus iure dolor accusamus possimus odio aliquid sequi?
        Quis nisi neque tempore cum alias nemo accusantium aliquam consequatur
        sunt perferendis? Animi culpa reiciendis excepturi perspiciatis non
        repellat maiores molestiae magni eveniet provident accusantium iusto
        doloremque, eius, itaque voluptatum voluptatem modi eaque voluptates.
        Rerum, molestiae, ad laudantium suscipit accusantium nemo voluptatibus
        minima recusandae, aliquid temporibus cum? Inventore, earum! Debitis sit
        facere dolorem iure, labore ducimus incidunt harum itaque ipsam officia
        consectetur tempore eius fugit enim porro iste facilis ullam omnis. Ipsa
        sit voluptates et! Labore quam saepe assumenda magnam qui porro ut
        mollitia reiciendis expedita sapiente, cumque, recusandae eaque
        nesciunt? Sed deleniti labore voluptatem dolorem exercitationem laborum?
        Dolorem reiciendis nisi, possimus corporis fugiat quod fugit iste
        necessitatibus tempora laudantium expedita laboriosam ad assumenda
        suscipit velit non saepe maxime nemo porro a et nam ipsum consequuntur
        officia? Nemo repellat nam eius pariatur inventore quidem minus saepe
        tempora in ipsam facilis voluptatibus, voluptas quis voluptatem maiores
        quibusdam totam, delectus eaque vitae aliquid iusto ratione. Cupiditate
        laudantium incidunt commodi, sit harum accusamus tenetur voluptas
        dignissimos dolores expedita delectus quidem similique exercitationem
        beatae. Atque accusantium nulla numquam obcaecati ad facere quas
        aliquam. Ad nulla quisquam quasi nemo delectus repudiandae reiciendis ab
        sequi natus. Velit recusandae quisquam, cum provident nihil optio
        impedit hic suscipit dignissimos sunt soluta deserunt corrupti, ipsam
        molestias voluptate consequuntur in accusamus! Accusamus voluptatum
        similique voluptas aliquid, doloremque amet, vel a architecto quidem,
        nobis earum neque voluptatibus quibusdam numquam iure. Animi neque
        repellendus sed iusto architecto perferendis vitae culpa excepturi ipsam
        necessitatibus! Repellendus, velit. Quo iusto labore magnam sint
        praesentium unde deserunt reiciendis animi quisquam similique officiis
        voluptates, cum nihil! A dolore velit consequatur modi quisquam veniam
        voluptates fugit, voluptatibus voluptatum et placeat commodi, pariatur
        adipisci officiis dolor culpa voluptas fuga dignissimos ab, vero
        quibusdam consequuntur expedita eveniet voluptatem. Rerum beatae ab
        consequatur impedit necessitatibus labore delectus consectetur qui est
        id ut autem, tempora ipsum nam, placeat obcaecati totam velit nisi
        explicabo. Commodi optio doloribus aspernatur laboriosam unde delectus
        tenetur suscipit ab! Corporis magni consectetur beatae perspiciatis
        quibusdam impedit repudiandae natus voluptas voluptatum ut? Animi enim
        vel beatae, quidem numquam delectus, aspernatur eos, ex neque aliquid
        tempore culpa atque iure unde libero incidunt illo repellat quas
        veritatis fuga odit officia nobis sit natus. Quas consectetur minima qui
        laboriosam aspernatur iusto harum ut, dicta eligendi autem veritatis
        quasi doloremque nisi quod recusandae vel? Animi omnis unde vel harum ut
        molestiae eligendi hic recusandae, corrupti optio voluptates possimus
        temporibus deserunt ab reiciendis? Placeat natus temporibus obcaecati ea
        voluptatem vero. Ab, alias vitae. Facere odit, repellat fuga magnam
        aspernatur suscipit sunt ad facilis corporis doloribus voluptatibus
        praesentium excepturi distinctio deserunt laboriosam sed consequuntur
        voluptas eligendi quibusdam reiciendis aliquid? Voluptate unde facilis
        illo consectetur quia quasi, molestias, consequuntur fugiat inventore
        impedit, possimus accusantium laborum veritatis fuga aut. Repellendus
        iusto amet cumque ipsum doloremque aspernatur, consectetur earum! Error
        dignissimos voluptates reiciendis natus asperiores voluptatum eligendi
        numquam, nesciunt magnam labore vel modi corporis nam. Harum
        necessitatibus consectetur quos libero vero sed, fugiat ratione illum
        vitae, praesentium officiis minus provident impedit ut perferendis
        excepturi quasi architecto eius mollitia, debitis tempora magnam
        asperiores. Sit consectetur placeat necessitatibus ea corrupti vero
        molestias enim. Reiciendis rerum assumenda, labore aliquam repudiandae
        qui illo ea sed facilis vero temporibus et quis reprehenderit natus
        eligendi quisquam dicta in repellat. Consequatur, veritatis deserunt
        soluta molestiae facilis labore eveniet nemo blanditiis tempore minus
        voluptas et nostrum aut sapiente fugit nobis. Assumenda provident
        aperiam deleniti eaque veniam quaerat quas, ab, fugit adipisci porro
        vero sint accusamus. Sequi aspernatur veritatis cum recusandae ea?
        Numquam, rem laboriosam.
      </p>
    </div>
  );
};

export default Home;
