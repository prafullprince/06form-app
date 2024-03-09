import React from 'react'
import { useState } from 'react'


const Form = ({ countries,citiesInIndia }) => {


    const [formData, setFormData] = useState({
        fName: "",
        lName: "",
        email: "",
        country: "",
        address: "",
        city: "",
        state: "",
        pincode: "",

    });

    function changeHandler(event) {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }
    console.log(formData);


    return (
        <div>
            {/* first name */}
            <label>
                First name
                <br />
                <input className='w-[600px] h-[30px] border rounded border-gray-500 p-2 my-2' placeholder='first name' type="text" name='fName' value={formData.fName} onChange={changeHandler} />
            </label>
            <br />

            {/* last name */}
            <label>
                Last name
                <br />
                <input className='w-[600px] h-[30px] border rounded border-gray-500 p-2 my-2' placeholder='last name' type="text" name='lName' value={formData.lName} onChange={changeHandler} />
            </label>
            <br />

            {/* email */}
            <label>
                Email address
                <br />
                <input className='w-[600px] h-[30px] border rounded border-gray-500 p-2 my-2' placeholder='email' type="email" name='email' value={formData.email} onChange={changeHandler} />
            </label>
            <br />

            {/* country dropdown */}
            <label>
                Country
                <br />
                <select value={formData.country} name="country" onChange={changeHandler} className='w-[600px]  border rounded border-gray-500 p-2 my-2'>
                    <option value="">Country</option>
                    {countries.map((country, index) => (
                        <option key={index} value={country}>{country}</option>
                    ))}
                </select>
            </label>
            <br />

            {/* cities dropdown */}
            <label>
                City
                <br />
                <select name="city" value={formData.city} onChange={changeHandler} className='w-[600px]  border rounded border-gray-500 p-2 my-2'>
                    <option value="">City</option>
                    {
                        citiesInIndia.map(
                            (city,index)=>{
                                return <option key={index} value={city}>{city}</option>
                            }
                        )
                    }
                </select>
            </label>
            <br />
            {/* state same as city/country */}

            {/* postal code */}
            <label>
                Postal Code
                <br />
                <input className='w-[600px] h-[30px] border rounded border-gray-500 p-2 my-2' placeholder='enter your pin code' type="number" name='pincode' value={formData.pincode} onChange={changeHandler} />
            </label>
            <br />



        </div>
    )
}

export default Form
