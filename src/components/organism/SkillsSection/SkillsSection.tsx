import { useState } from "react";
import type { CSSProperties } from "react";
import styles from "./SkillsSection.module.css";
import Text from "../../atoms/Text/Text";
import Heading from "../../atoms/Heading/Heading";
import Image from "../../atoms/Image/Image";

import type { SkillsSectionProps } from "./SkillsSection.types";

const SkillsSection = ({ id,
  title,
  description,
  skills,
  defaultSkillIndex = 0,
  className = "",
}: SkillsSectionProps) => {
  const [active, setActive] = useState(
    defaultSkillIndex >= 0 && defaultSkillIndex < skills.length
      ? defaultSkillIndex
      : 0
  );
  const [paused, setPaused] = useState(false);
  const skill = skills[active];

  const focusSkill = (index: number) => {
    setActive(index);
    setPaused(true);
  };

  return (
    <section id={id} className={`${styles.section} ${className}`}>
      <div className={styles.header}>
        <Heading {...title} />
        <Text {...description} />
      </div>

      {/* El anillo gira; al hacer hover sobre una skill se pausa y el
          centro muestra su nombre y descripción.
          `.stage` envuelve SOLO al anillo (es quien lo recorta); la ficha
          central es hermana, no hija, para que en móvil pueda salirse del
          recorte y caer debajo del arco en vez de quedar cortada. */}
      <div className={styles.stageWrap} data-paused={paused}>
        <div className={styles.stage}>
          <div className={styles.ring}>
            {skills.map((item, index) => (
              <div
                key={item.name}
                className={styles.orbitItem}
                style={{ "--angle": `${(360 / skills.length) * index}deg` } as CSSProperties}
              >
                <div
                  className={styles.orbitIcon}
                  tabIndex={0}
                  aria-label={item.name}
                  onPointerEnter={() => focusSkill(index)}
                  onPointerLeave={() => setPaused(false)}
                  onFocus={() => focusSkill(index)}
                  onBlur={() => setPaused(false)}
                >
                  <Image
                    src={item.icon.src}
                    alt={item.icon.alt}
                    className={styles.orbitImg}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {skill && (
          <div
            key={skill.name}
            className={styles.center}
            style={{ "--skill-color": skill.color } as CSSProperties}
          >
            <div className={styles.centerIcon}>
              <span className={styles.centerGlow} />
              <Image src={skill.icon.src} alt="" className={styles.centerImg} />
            </div>
            <div className={styles.centerText}>
              <Heading as="h3" size="text-2xl" className="font-bold text-white tracking-tight">
                {skill.name}
              </Heading>
              <Text as="p" size="text-xs" className={styles.centerDescription}>
                {skill.description}
              </Text>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
