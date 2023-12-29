export default function UserItem({ user }) {
  return (
    <>
      <div className="mt-1 p-4 w-full rounded-md shadow-md">
        <p className="font-bold text-lg">{user.first_name} {user.last_name}</p>
        <p>{user.email}</p>
        <p>{user.gender}</p>
        <p>{user.phone_number}</p>
        <p>{user.date_of_birth}</p>
      </div>
    </>
  )
}
