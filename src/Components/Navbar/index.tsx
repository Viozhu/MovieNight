import { Icon, Input } from "@styleComponents";
import * as styles from "./styles";
import "./styles.css";
import { Info, FavoritesMenu } from "./subsections";

type subSectionsTypes = {
  title: string | JSX.Element;
  content: JSX.Element;
};

export const NavBar = (): JSX.Element => {
  const sendToTopsmothly: () => void = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const subSections: Array<subSectionsTypes> = [
    {
      title: <Icon name="heart-outlined" size={24} color="8B7C6E" hover />,
      content: <FavoritesMenu />,
    },
    {
      title: "Info",
      content: <Info />,
    },
  ];

  const SubSection = ({ title, content }: subSectionsTypes): JSX.Element => (
    <li className={styles.LINKS_CONTAINER}>
      <a href="#" className={styles.A_TAG}>
        {title}
      </a>
      <div className={styles.LI_CHILD}>{content}</div>
    </li>
  );

  return (
    <nav className={styles.NAV_CONTAINER}>
      <div className={styles.CONTAINER}>
        <img
          src="https://i.imgur.com/hr8TOi9.png"
          alt="logo"
          onClick={sendToTopsmothly}
          className={styles.LOGO}
        />
        <div>
          <ul className={styles.UL_CONTAINER}>
            <SubSection
              title={subSections[0].title}
              content={subSections[0].content}
            />
            <div className="flex items-center justify-center space-x-4">
              <Icon name="magnifying-glass" size={24} color="D9BDAB" />
              <Input placeholder="Search" id="search" />
            </div>
            <SubSection
              title={subSections[1].title}
              content={subSections[1].content}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};
