import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{background:`url(${appointment})`}} className='flex justify-center items-center my-10 p-5'>
            <div className='flex-1 hidden lg:block'>
                <img src={doctor} alt="" className='mt-[-150px]' />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white my-5'>Make an Appointment Today</h2>
                <p className='text-white mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat veritatis dignissimos adipisci doloribus eligendi nostrum numquam assumenda autem porro, quos aliquam, ipsam corporis placeat laudantium ex animi ducimus dolorem! Corrupti quidem ipsum quibusdam deserunt dolore nisi similique delectus aspernatur soluta?</p>
                <PrimaryButton>GET STARTED</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;