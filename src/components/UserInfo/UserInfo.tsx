import { IconBlog, IconCompany, IconLocation, IconTwitter } from '../../icons';
import { GithubUserLocal } from '../../types';
import { InfoItem, InfoItemProps } from '../InfoItem';
import styles from './UserInfo.module.scss';


interface UserInfoProps extends Pick<GithubUserLocal, 'company' | 'twitter' | 'location' | 'blog'> { }

export const UserInfo = ({ company, twitter, location, blog }: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      icon: <IconLocation />,
      text: location,
    },
    {
      icon: <IconBlog />,
      text: blog,
      isLink: true
    },
    {
      icon: <IconTwitter />,
      text: twitter,
    },
    {
      icon: <IconCompany />,
      text: company,
    },
  ]
  return (
    <div className={styles.userInfo}>
      {items.map((item, index) => (
        <InfoItem {...item} key={index} />
      ))}
    </div>
  );
};
