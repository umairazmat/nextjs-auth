export default function UserProfile({ params }: any) {
  return (
    <div>
      <h1>User Profile</h1>
      <h2>User {params?.id}</h2>
    </div>
  );
}
