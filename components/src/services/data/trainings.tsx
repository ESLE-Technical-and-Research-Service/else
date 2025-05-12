import {Service} from "../../types/Service";
import trainingsHeroImg from "../../../../assets/images/hero/trainingHero01.jpg";

export const Trainings: Service = {
    name: {
        namePL: "Szkolenia",
        nameENG: "Trainings",
    },
    href: "/services/trainings",
    heroImage: trainingsHeroImg,
    description: {
        textPL: "W ELSE oferujemy kompleksowe szkolenia z obsługi naszych specjalistycznych urządzeń i systemów dla sieci wodno-kanalizacyjnych. Nasze szkolenia są dostosowane do indywidualnych potrzeb klienta i prowadzone przez doświadczonych specjalistów, co zapewnia efektywne wdrożenie i użytkowanie oferowanych produktów.",
        textENG: "At ELSE, we provide comprehensive training programs focused on the operation of our specialized equipment and systems designed for water and sewage network management. Our training sessions are tailored to meet the specific needs of each client and are conducted by experienced professionals, ensuring effective implementation and utilization of our products..",
    },
    detailedDescription: {
        textPL: (
            <section>
                <h2>Szkolenia</h2>
                <p>
                    ELSE oferuje kompleksowe szkolenia z zakresu obsługi i konserwacji specjalistycznych urządzeń oraz systemów do zarządzania sieciami wodno-kanalizacyjnymi. Nasze programy szkoleniowe są dostosowane do indywidualnych potrzeb klientów i prowadzone przez doświadczonych specjalistów, co zapewnia efektywne wdrożenie i wykorzystanie naszych produktów.
                </p>
                <h3>Zakres naszych szkoleń obejmuje:</h3>
                <ul>
                    <li>Praktyczne szkolenia z obsługi kamer inspekcyjnych, pojazdów ciśnieniowych oraz systemów do regulacji włazów.</li>
                    <li>Konserwację i diagnostykę urządzeń w warunkach zbliżonych do codziennej eksploatacji.</li>
                    <li>Indywidualne dostosowanie programu szkoleniowego do specyfiki działalności klienta.</li>
                    <li>Szkolenia prowadzone w siedzibie klienta lub w naszym centrum szkoleniowym.</li>
                    <li>Wsparcie poszkoleniowe oraz dostęp do materiałów edukacyjnych.</li>
                </ul>
                <p>
                    Dzięki naszym szkoleniom pracownicy zdobywają nie tylko wiedzę teoretyczną, ale przede wszystkim praktyczne umiejętności, które przekładają się na efektywne wykorzystanie urządzeń i systemów w codziennej pracy.
                </p>
            </section>
        ),
        textENG: (
          <>
              <section>
                  <h2>Trainings</h2>
                  <p>
                      ELSE offers comprehensive training programs focused on the operation and maintenance of specialized equipment and systems for water and sewage network management. Our training sessions are tailored to meet the specific needs of our clients and are conducted by experienced professionals, ensuring effective implementation and utilization of our products.
                  </p>
                  <h3>Our training programs include:</h3>
                  <ul>
                      <li>Practical training on the operation of inspection cameras, pressure vehicles, and manhole adjustment systems.</li>
                      <li>Maintenance and diagnostics of equipment under conditions similar to daily operations.</li>
                      <li>Customized training programs adapted to the client&#39;s specific activities.</li>
                      <li>Training sessions conducted at the client&#39;s premises or at our training center.</li>
                      <li>Post-training support and access to educational materials.</li>
                  </ul>
                  <p>
                      Through our training programs, participants gain not only theoretical knowledge but, more importantly, practical skills that translate into the effective use of equipment and systems in their daily work.
                  </p>
              </section>
          </>
        ),
    }
}