"use client";
import DeviceHero from "../../../components/DevicesSinglePages/DeviceHero";
import DeviceSection from "../../../components/DevicesSinglePages/DeviceSection";
import DevicePointSection from "../../../components/DevicesSinglePages/DevicePointsSection";
import DeviceUniquePoints from "../../../components/DevicesSinglePages/DeviceUniquePoints";

const page = () => {
  return (
    <>
      <DeviceHero
        title="Salt Booth"
        image="/devices/devices-img/device-img-11.jpeg"
      />
      <DeviceSection
        title="Description"
        description={[
          "Salt therapy (halotherapy) is a natural, holistic, drug-free, and touchless modality that is currently in high demand and has never been more essential since it can aid in:",
        ]}
      />
      <DevicePointSection
        className="-mt-5"
        title=""
        points={[
          "Cleaning the Respiratory System Improving Lung Function",
          "Boosting the Immune System",
          "Enhancing Mental Wellness and Reducing Stress",
          "Rejuvenating Skin",
          "Enhancing Athletic Performance, Endurance, and Recovery",
        ]}
      />
      <DeviceSection
        className="-mt-5"
        title=""
        description={[
          "During a salt therapy session, 99.99% pure grade sodium chloride (salt) is ground and crushed into very tiny micron-sized particles. These dry aerosol microparticles of salt are then dispersed into the SALT Booth® during a typical session. As an individual relaxes, the microparticles are inhaled. The particles penetrate deep into the lungs, bronchi, bronchioles, and alveoli to aid respiratory concerns, while the non-inhaled salt particles are absorbed by the body to combat skin conditions.",
          "Salt therapy works in three different ways. Because salt is super absorbent, the inhaled dry salt acts like a sponge attracting foreign substances along its path through the respiratory tract. The dry salt can be imagined as behaving like a toothbrush that cleans the respiratory system removing the build-up of foreign elements that cause various respiratory ailments and conditions. Salt is also anti-inflammatory, so the inhaled dry salt particles may help to reduce inflammation in the entire respiratory tract and widen the airway passages. A clean respiratory system naturally results in higher oxygen intake, increased energy, and an improved immune system. Lastly, salt also acts as an anti-bacterial agent, by dissolving bacteria and pollutants lodged in the respiratory tract. These are then either coughed up or naturally expelled by the body.",
          "Salt therapy is safe for everyone from children to seniors, and even animals such as dogs, cats, and horses, and has no known side effects. Athletes use salt therapy to help enhance their performance, endurance, and recovery.",
        ]}
      />
      <DeviceUniquePoints
        title="WHO COULD POTENTIALLY BENEFIT FROM SALT THERAPY"
        subtitle="Anyone with"
        points={[
          "Asthma",
          "Coughs, colds & flus",
          "Pneumonia",
          "Rhinitis",
          "Sinus infections or Sinusitis",
          "Cystic fibrosis",
          "Ear infections",
          "Chronic bronchitis",
          "Emphysema",
          "COPD",
          "Wheezing",
          "Smoker's Cough",
          "Snoring, sleep apnea and sleeping issues",
          "Acne",
          "Psoriasis",
          "Eczema",
          "Itching, swelling & skin Inflammation",
          "Dermatitis",
          "Dry & Flaky skin",
          "Rashes",
          "Rosacea",
          "Skin Aging",
        ]}
      />
      {/*------------------------------- Second div ---------------------------------------------*/}
      <div className="max-w-4xl mx-auto px-6">
        {/* Sub Heading */}
        <p className="text-base md:text-md text-gray-600 italic  mb-4">
          Anyone experiencing
        </p>
        {/* Points */}
        <ul className="space-y-1 list-disc list-inside text-gray-700 leading-relaxed">
          <li>Stress</li>
          <li>Anxiety</li>
          <li>Fatigue</li>
        </ul>
      </div>
      {/*------------------------------- Third div ---------------------------------------------*/}
      <div className="max-w-4xl mx-auto px-6 pt-6 pb-10">
        {/* Sub Heading */}
        <p className="text-base md:text-md text-gray-600 italic  mb-4">
          Anyone looking to enhance
        </p>
        {/* Points */}
        <ul className="space-y-1 list-disc list-inside text-gray-700 leading-relaxed">
          <li>Their overall respiratory hygiene</li>
          <li>Combat the poor quality of today's indoor and outdoor air</li>
        </ul>
      </div>
    </>
  );
};

export default page;
