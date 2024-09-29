import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/authSlice.js';
import { USER_API_END_POINT } from '../utils/constants.js';
import { useNavigate } from 'react-router-dom';

const EditProfileForm = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { user } = useSelector(store => store.auth);

    const [input, setInput] = useState({
        fullname: user?.fullname || "",
        email: user?.email || "",
        phoneNumber: user?.phoneNumber || "",
        bio: user?.profile?.bio || "",
        skills: user?.profile?.skills?.map(skill=>skill) || "",
        file: user?.profile?.resume || ""
    });

    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const fileChangeHandler = (e) => {
        const file = e.target.files?.[0];
        setInput({ ...input, file });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("bio", input.bio);
        formData.append("skills", input.skills);
        if (input.file) {
            formData.append("file", input.file);
        }
        
        try {
            setLoading(true);
            const res = await fetch(`${USER_API_END_POINT}/profile/update`,{
                method: 'POST',
                body: formData,
                credentials: 'include'
            });
            const data = await res.json();
            if (data.success) {  
                console.log(data);
                dispatch(setUser(data.user));
                navigate("/profile");
                alert(data.message); 
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred while updating the profile."); 
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-center">Update Profile</h2>
            <form onSubmit={submitHandler}>
                <div className="grid gap-4">
                    {[
                        { label: "Name", name: "fullname", type: "text" },
                        { label: "Email", name: "email", type: "email" },
                        { label: "Phone Number", name: "phoneNumber", type: "text" },
                        { label: "Bio", name: "bio", type: "text" },
                        { label: "Skills", name: "skills", type: "text" }
                    ].map(({ label, name, type }) => (
                        <div key={name} className="grid grid-cols-4 items-center gap-4">
                            <label htmlFor={name} className="text-right font-medium">{label}</label>
                            <input
                                id={name}
                                name={name}
                                type={type}
                                value={input[name]}
                                onChange={changeEventHandler}
                                className="col-span-3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                                required
                            />
                        </div>
                    ))}
                    <div className='grid grid-cols-4 items-center gap-4'>
                        <label htmlFor="file" className="text-right font-medium">Resume</label>
                        <input
                            id="file"
                            name="file"
                            type="file"
                            accept="application/pdf"
                            onChange={fileChangeHandler}
                            className="col-span-3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>
                </div>
                <div className="mt-6">
                    {loading 
                        ? <button type="button" className="w-full bg-gray-400 text-white py-2 rounded-lg" disabled>Loading...</button>
                        : <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">Update</button>}
                </div>
            </form>
        </div>
    );
};

export default EditProfileForm;
