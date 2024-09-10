// Profile.js
import { useAuth } from './AuthContext';

const Profile = () => {
  const { user, signOut } = useAuth();

  return (
    <div className='text-center m-8 text-2xl'>
      <h1 className='p-6 font-bold'>Welcome, {user?.email} to your profile page!</h1>
      <p className='text-lg'>This simple application uses google firebase for authentication. It uses react context to store user data (which avoids passing props).</p>
      <button onClick={signOut} className=' m-6 p-6 bg-red-500 rounded-lg'>Sign Out</button>
    </div>
  );
};

export default Profile;
