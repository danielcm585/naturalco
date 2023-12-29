import UserItem from './UserItem';

export default function UserList({ data }) {
  return (
    <>
      <div className="">
        {
          data.map((user) => (
            <UserItem user={user} />
          ))
        }
      </div>
    </>
  )
}
