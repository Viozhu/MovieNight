import { useState } from 'react';
import * as styles from './styles';
import '../styles.css';

type subSectionsTypes = {
  title: string | JSX.Element;
  content: JSX.Element;
  index?: number;
};

const SubSection = ({
  title,
  content,
  index,
}: subSectionsTypes): JSX.Element => {
  const isMobile: boolean = window.innerWidth < 768;

  const [showSubSection, setShowSubSection] = useState({
    show: !isMobile,
    index: -1,
  });

  return (
    <li className={`${styles.LINKS_CONTAINER}`}>
      <a
        href="#"
        className={styles.A_TAG}
        onClick={() => {
          setShowSubSection({
            show: showSubSection.show ? false : true,
            index: showSubSection.index === index ? -1 : index,
          });
        }}
      >
        {title}
      </a>
      {showSubSection.show && (
        <div
          className={`${styles.LI_CHILD} ${
            index !== showSubSection.index
              ? 'mega-menu'
              : 'mega-menu-responsive'
          }`}
        >
          {content}
        </div>
      )}
    </li>
  );
};
export default SubSection;
