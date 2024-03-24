import { FeedWrapper } from "@/components/wrapper";
import { StickyWrapper } from "@/components/wrapper/sticky-wrapper";
import * as React from "react";
import { Header } from "./_components/header";
import { UserProgress } from "@/components/user-progess";
import { FLAGS } from "@/configs/assets";
import { getUserProgress } from "@/db/queries";
import { RedirectType, redirect } from "next/navigation";
import ROUTES from "@/routes";

export interface LearnPageProps {}

export default async function LearnPage(props: LearnPageProps) {
  const userProgressData = await getUserProgress();

  if (!userProgressData) {
    redirect(ROUTES.COURSES);
  }

  return (
    <div className="flex px-6 w-full flex-row gap-12">
      <FeedWrapper>
        <Header title="Spainish" />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi amet quia
        repellendus molestias accusantium porro quos excepturi, recusandae
        voluptatem quam blanditiis rerum quo architecto eos, earum similique
        nemo fugiat dolores iure quas incidunt officia! Tempore ullam enim
        aperiam inventore porro sed unde provident libero culpa ipsa, sequi
        repellat nostrum officia nesciunt at ut voluptatibus maxime in neque
        voluptate. Beatae accusantium quos, voluptatum officiis esse voluptates
        ipsam ut similique labore placeat pariatur inventore, autem reiciendis,
        natus adipisci. Corrupti, repellendus accusamus, rem necessitatibus
        reiciendis aliquam voluptas debitis expedita nam, possimus iusto ratione
        doloremque ut! Ratione repellendus error officiis, quos unde, cupiditate
        sit laudantium commodi corporis aut modi. Iste, sapiente sequi labore
        laudantium molestias quod deserunt deleniti eum libero nostrum amet sunt
        sed, ipsa est et. Dolorum maxime nobis sit vero assumenda sapiente, eius
        earum. Voluptate quia quo veritatis voluptatem nam inventore distinctio
        suscipit ducimus adipisci blanditiis rerum assumenda possimus id nobis
        omnis a odio pariatur non unde placeat, dolores, est ipsum accusantium!
        Quas expedita ab maiores natus ipsum reprehenderit error quos mollitia,
        pariatur, magni nisi ut temporibus a fugiat. Velit quaerat facere minus
        nulla amet doloribus quibusdam autem reprehenderit voluptates quis cum
        sunt inventore labore veritatis necessitatibus dicta iusto illo,
        adipisci, unde atque, commodi laboriosam suscipit pariatur ut? Iusto
        corporis minima accusamus quod blanditiis porro sit non, quia alias.
        Necessitatibus voluptatum aliquid voluptates quibusdam soluta temporibus
        placeat tenetur. Nulla praesentium ipsum nobis magnam deserunt, quis
        ratione dignissimos maxime nam aspernatur repellendus, laboriosam odio
        consectetur sed earum culpa ducimus, cumque placeat id! Odio eveniet
        possimus, impedit tempore reiciendis libero veritatis laborum. Suscipit
        vel labore est provident excepturi harum quisquam facilis voluptatem
        repellendus cupiditate, esse odio assumenda blanditiis vitae minus
        tempora voluptatibus consectetur quam debitis qui et. Ratione nihil,
        aspernatur id aut aliquam, optio non amet error, quisquam dignissimos
        dolor maiores. Quos corporis animi assumenda, incidunt, maxime ipsa
        magnam excepturi exercitationem provident illo repudiandae corrupti amet
        id numquam. Quibusdam alias animi quia tempora necessitatibus
        repudiandae. Sed, architecto doloremque sunt pariatur odio nostrum
        reiciendis libero ad maxime perferendis beatae voluptate voluptas
        similique illo, eius ullam, dolores magni. Cupiditate porro deleniti
        magnam, qui optio, dolorum eos, ab natus non ipsa assumenda perspiciatis
        error rerum aspernatur officia reiciendis voluptate quaerat commodi
        quibusdam dignissimos quis? Officia architecto ut iste blanditiis nihil,
        saepe aperiam tempora assumenda soluta aliquid quibusdam, nemo eius.
        Nobis neque voluptatem similique labore impedit? Maiores harum ut
        voluptatum sit architecto perferendis! Illum modi, aliquam iusto ut eos
        officiis labore nemo qui, animi repudiandae incidunt et accusantium
        veritatis voluptas dolores. Ipsum provident quas in esse, id consectetur
        aspernatur, unde iste quaerat eius, nihil ullam tempora alias accusamus
        molestias perferendis. Nobis tempora inventore eaque odio, maxime
        officiis sint ducimus officia perspiciatis porro nihil similique dicta
        ad facere nesciunt, asperiores et? Non dolores natus earum fuga quisquam
        impedit rem reiciendis, itaque placeat consectetur suscipit sapiente
        numquam amet optio esse minima veniam iusto neque dolorum vero
        consequuntur nemo fugiat? Nam nisi consectetur quasi facere, optio aut
        aliquam ea dolorem. Iure a assumenda adipisci, itaque ex tempore
        laudantium. Provident, minima dolorem aspernatur, voluptatum ipsa saepe
        fugit quasi, eligendi aperiam doloremque nobis error? Voluptatibus
        beatae eos est qui ipsam ipsa saepe similique hic consequuntur
        repellendus commodi illum quos corporis dignissimos exercitationem,
        animi adipisci, totam rerum eaque nisi deserunt odit rem ad. Esse
        beatae, qui consequatur enim porro unde mollitia alias error maiores,
        nisi quibusdam rerum dicta sed accusantium ex laudantium iure quo.
        Veniam molestiae deserunt reprehenderit officia numquam cupiditate iure
        illo aliquid error, voluptatum unde cum cumque architecto quas
        exercitationem autem enim, minima asperiores. Magnam veritatis ipsum
        explicabo ex eius veniam optio tenetur, molestias tempora vero neque
        odit id. Eligendi, facere ipsa! Nisi architecto quia alias distinctio
        ducimus rerum facere, numquam illo error ab assumenda, adipisci fugiat
        corporis expedita temporibus non dolor accusantium! Quisquam, similique
        velit! Inventore, quo quidem doloribus minus fugit molestiae ducimus
        iusto ad odio atque? Molestiae illo consequatur aut culpa excepturi,
        ipsum maxime tempora nesciunt mollitia quasi, voluptatibus vel veniam
        provident aperiam ad? Atque repudiandae deserunt eaque blanditiis rem ut
        aliquam veritatis libero excepturi delectus suscipit, eos quos iusto
        deleniti necessitatibus dolorem quis aut optio neque! Consequatur, quos?
        Molestias facilis, id unde dicta dolores sunt! Repellendus aspernatur
        consequuntur alias autem rerum nesciunt ad, ex earum quaerat quos itaque
        deserunt magni illum aliquid mollitia dignissimos hic odio ipsam. Dolor
        non alias repudiandae commodi asperiores at nobis quo eius ipsum nostrum
        officiis voluptate dolorem aut sint quasi totam, voluptatum, quidem
        necessitatibus dolore. Asperiores amet culpa a necessitatibus inventore
        esse veritatis facere, pariatur dignissimos in nulla enim! Reiciendis,
        cum vitae dolor porro aspernatur delectus beatae! Alias odit explicabo
        nemo labore atque voluptatem, ipsam odio tempora laudantium aut?
        Reiciendis assumenda necessitatibus tenetur quo quibusdam consectetur
        neque laboriosam minima qui ipsam quaerat reprehenderit veniam mollitia
        laborum, sequi magni quis eveniet officiis nemo quod nostrum illum quia
        atque! Vel, ab rerum fugit sequi quod nesciunt maiores possimus sint
        fuga inventore eveniet iusto eos blanditiis modi quisquam. Natus
        repudiandae pariatur maiores non ratione nihil minus sunt ullam
        aspernatur, qui magnam repellat unde nulla quam velit nisi fugit eveniet
        veniam modi nemo, mollitia id aperiam. Veniam quo voluptatibus molestiae
        suscipit quis et nihil. Amet quae dolorum quam tenetur eum iusto natus
        dolores sapiente totam itaque mollitia quibusdam veritatis aliquid ea
        dolorem nisi quaerat, ad dolor voluptatibus blanditiis fugit, fugiat
        quia. Fugit aliquid iste laudantium possimus maxime dolor cumque at a
        ratione? Rerum, ipsa corrupti corporis aliquid illum non vel reiciendis.
        Nam non doloribus eaque natus harum minus tempora, ab ratione labore
        expedita dignissimos officiis commodi hic eum vitae id perspiciatis
        culpa unde accusamus quos blanditiis in, molestiae voluptate. Modi
        maxime, ipsum rem voluptas ex, facere quia, magni animi dolores ipsam
        quaerat. Nihil ipsa itaque labore perferendis velit, explicabo eum
        doloremque corrupti tempora earum iste minus necessitatibus quod error
        illum! Consequuntur ut praesentium amet earum aperiam, deleniti vel.
        Voluptate ducimus, iste eos esse, rem similique voluptates beatae earum
        ex magni, impedit quod modi quisquam pariatur itaque vel iure expedita!
        Modi accusantium veniam, dolorum iure ipsam quod accusamus quidem unde
        consequuntur fugit, quisquam laborum sed impedit! Incidunt, tenetur
        molestiae.
      </FeedWrapper>
      <StickyWrapper>
        <UserProgress
          activeCourse={{
            id: 1,
            title: "Spainish",
            imageSrc: FLAGS.SPAIN,
          }}
          hasActiveSubscription={false}
          hearts={5}
          points={100}
        />
      </StickyWrapper>
    </div>
  );
}
