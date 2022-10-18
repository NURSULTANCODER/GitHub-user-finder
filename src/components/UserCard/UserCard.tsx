import { GithubUserLocal } from '../../types';
import { UserInfo } from '../UserInfo';
import { UserStat } from '../UserStat';
import { UserTitle } from '../UserTitle';
import styles from './UserCard.module.scss';

interface UserCardProps extends GithubUserLocal { }

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
    <img className={styles.avatar} src={props.avatar} alt={props.login} />
    <UserTitle 
      name={props.name}
      login={props.login}
      created={props.created}
    />
    <p className={`${styles.bio}${props.bio ? '' : ` ${styles.empty}`}`}>
      {props.bio || 'This profile has no bio'}
    </p>
    <UserStat
      repos={props.repos}
      followers={props.followers}
      following={props.following} />
    <UserInfo
      company={props.company}
      twitter={props.twitter}
      blog={props.blog}
      location={props.location}  
    />
  </div>
);
