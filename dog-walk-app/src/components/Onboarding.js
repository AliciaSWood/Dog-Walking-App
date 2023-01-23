import React from 'react';
import { useState } from 'react';
import Nav from './Nav';

const Onboarding = () => {

    const [formData, setFormData] = useState({
        user_id:"",
        first_name: "",
        age: null,
        show_gender: false,
        gender_identity: "man",
        gender_interest: "woman",
        email: "",
        url: "",
        about: "",
        matches: []
    })

    const handleSubmit = (e) => {
        console.log("Submitted")
        e.preventDefault()
    }


    const handleChange = (e) => {
console.log("e", e)
const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
const name = e.target.name
console.log('value', value, 'name', name)

setFormData((prevState) => ({
    ...prevState,
    [name]:value
}))
    }


    console.log(formData)

    return (
        <div>
            <Nav
            setShowModal={() => {}}
            showModal={false}
            />
            <div className = "onboarding">
        
        <h2>CREATE ACCOUNT</h2>
        <form onSubmit = {handleSubmit}>
<section>
    <label htmlFor='first_name'>First Name:</label>
    <input
    id="first_name"
    type="text"
    name="first_name"
    placeholder="First Name"
    required={true}
    value={formData.first_name}
    onChange={handleChange}
    />
    <label>Age:</label>
    <input
    id= "age"
    type="number"
    name="age"
    placeholder="Your age"
    required={true}
    value={formData.age}
    onChange={handleChange}
    />
<div className = "row">
    <label className = "gender-label">Gender:</label>
    <input
    id="man-gender_identity"
    type="radio"
    name="gender_identity"
    value="man"
    onChange={handleChange}
    checked={formData.gender_identity === 'man'}
    />
    <label htmlFor='man-gender_identity'>Man</label>
    <input
    id="woman-gender_identity"
    type="radio"
    name="gender_identity"
    value="woman"
    onChange={handleChange}
    checked={formData.gender_identity === 'woman'}
    />
    <label htmlFor='woman-gender_identity'>Woman</label>
    <input
    id="other-gender_identity"
    type="radio"
    name="gender_identity"
    value="other"
    onChange={handleChange}
    checked={formData.gender_identity === 'other'}
    />
    <label htmlFor='other-gender_identity'>Other</label>
    </div>
    <label htmlFor='show_gender'>Show my gender on my profile</label>
    <input
    id="show_gender"
    type="checkbox"
    name="show_gender"
    onChange={handleChange}
    checked={formData.show_gender}
    />
    

    <div className = "row">
    <label className = "gender-label">Show Me:</label>
    <input
    id="man-gender-interest"
    type="radio"
    name="gender_interest"
    value="man"
    onChange={handleChange}
    checked={formData.gender_interest === 'man'}
    />
    <label htmlFor='man-gender-interest'>Man</label>

    <input
    id="woman-gender-interest"
    type="radio"
    name="gender_interest"
    value="woman"
    onChange={handleChange}
    checked={formData.gender_interest === 'woman'}
    />
    <label htmlFor='woman-gender-interest'>Woman</label>

    <input
    id="everyone-gender-interest"
    type="radio"
    name="gender_interest"
    value="everyone"
    onChange={handleChange}
    checked={formData.gender_interest === 'everyone'}
    />
    <label htmlFor='everyone-gender-interest'>Everyone</label>
    </div>
    <label htmlFor='about'>About Me</label>
    <input 
    id="about"
    type="text"
    name="about"
    required={true}
    placeholder="When I'm not walking my dog, I like to..."
    value={formData.about}
    onChange={handleChange}/>
<input
type="submit"
/>
</section>
<section>
    <label htmlFor='url'>Profile Photo</label>
    <input
    type="url"
    name="url"
    id="url"
    onChange={handleChange}
    required={true}/>
    <div className = "photo-container">
<img src ={formData.url} alt="Profile Pic Preview"/>
    </div>
</section>
        </form>
            </div>
        </div>
    );
};

export default Onboarding;