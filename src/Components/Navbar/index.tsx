import { Icon, Input, Modal } from '@styleComponents';
import * as styles from './styles';
import { useState } from 'react';
import Logo from '../../assets/logo.png';
import './styles.css';
import { Info, FavoritesMenu, WishListMenu } from './subsections';
import UseSearchMovie from './graphql/queries/useSearchMovie';
import SearchModal from './SearchModal';
import { Movie } from '@graphqlTypes';

type subSectionsTypes = {
  title: string | JSX.Element;
  content: JSX.Element;
};

export const NavBar = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchModal, setSearchModal] = useState<boolean>(false);

  const sendToTopsmothly: () => void = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const onSearch = () => {
    setTimeout(() => setSearchModal(true), 500);
  };

  const { data, status, error, refetch } = UseSearchMovie({
    variables: { term: searchTerm },
    enabled: searchModal && searchTerm.length > 2,
  });

  const subSections: Array<subSectionsTypes> = [
    {
      title: <Icon name="heart-outlined" size={24} color="8B7C6E" hover />,
      content: <FavoritesMenu />,
    },
    {
      title: 'Info',
      content: <Info />,
    },
    {
      title: <Icon name="add-to-list" size={24} color="8B7C6E" />,
      content: <WishListMenu />,
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
          src={Logo}
          alt="logo"
          onClick={() => sendToTopsmothly()}
          className={styles.LOGO}
        />
        <div>
          <ul className={styles.UL_CONTAINER}>
            <SubSection
              title={subSections[0].title}
              content={subSections[0].content}
            />
            <div className="flex items-center justify-center space-x-4">
              <Input
                placeholder="Search"
                id="search"
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={onSearch}
                value={searchTerm}
              />
              <Icon
                name="magnifying-glass"
                size={24}
                color="D9BDAB"
                style="cursor-pointer"
                onClick={onSearch}
              />
            </div>
            <SubSection
              title={subSections[2].title}
              content={subSections[2].content}
            />
            <SubSection
              title={subSections[1].title}
              content={subSections[1].content}
            />
          </ul>
        </div>
        {searchModal && status === 'success' && (
          <Modal
            visible={searchModal}
            onClose={() => {
              setSearchModal(!searchModal), setSearchTerm('');
            }}
          >
            <SearchModal data={data?.searchMovie} />
          </Modal>
        )}
      </div>
    </nav>
  );
};
