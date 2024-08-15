import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AirPollution.css'

const AirPollution = () => {
    const [tips, setTips] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
    });

    useEffect(() => {
        fetchTips();
    }, []);

    const fetchTips = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/air-pollution');
            setTips(response.data);
        } catch (error) {
            console.error('Error fetching tips:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/air-pollution', formData);
            setTips([...tips, response.data]);
            setFormData({ title: '', description: '' }); // Clear form
        } catch (error) {
            console.error('Error submitting tip:', error);
        }
    };

    return (
        <div className='ser-outer'>
            <br></br>
            <br></br>
            <h1>Air Pollution Tips and Projects</h1>
            <br></br>
            <form onSubmit={handleSubmit} className='ser-form'>
                <div>
                    <label className='ser-tit'>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className='ser-in1'
                    />
                </div>
                <div>
                    <label className='ser-des'>Description:</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className='ser-in2'
                    ></textarea>
                </div>
                <button type="submit" className='ser-sub'>Submit</button>
            </form>
            <br></br>
            <br></br>
            <h2 className='ser-d'>Submitted Tips and Projects</h2>
            <ul className='dis'>
                {tips.map((tip) => (
                    <li key={tip._id} className='ser-dis'>
                        <h3 className='ser-h3'>{tip.title}</h3>
                        <br></br>
                        <p className='ser-p'>{tip.description}</p>
                        <small className='ser-su'>Submitted on: {new Date(tip.date).toLocaleDateString()}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AirPollution;
