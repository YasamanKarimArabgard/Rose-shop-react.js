import { Divider } from '@mui/material'
import { useAuth } from '../context/AuthProvider'
import AccountCircle from '@mui/icons-material/AccountCircle';


const Profile = () => {

    const Auth = useAuth();

    console.log(Auth);

    return (
        <main className='col-11 col-md-4 my-2 '>
            <h5 className='my-3 mx-2'>
                <AccountCircle sx={{ mr: 1 }} />
                information
            </h5>
            <Divider />

            <article className='col-12 col-md-12 my-2'>
                {Auth && <div className='col-10 mx-3'>
                    <p className='text-secondary'>name : {Auth.name}</p>
                    <p className='text-secondary'>email : {Auth.email}</p>
                    <p className='text-secondary'>phone number : {Auth.phoneNumber}</p>
                </div>
                }
            </article>
        </main>
    );
}

export default Profile;