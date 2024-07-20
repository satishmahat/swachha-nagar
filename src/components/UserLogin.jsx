import React, { useState } from 'react';
import './userlogin.css';

import kmc from '../assets/kmc/KMC.jpg';
import kmc14Image from '../assets/kmc/KMC-14.jpg';
import kmc15Image from '../assets/kmc/KMC-15.jpg';
import kmc16Image from '../assets/kmc/KMC-16.jpg';

const wards = [
    { value: 'kmc14', label: 'KMC-14', sections: ['Section A', 'Section B', 'Section C'], image: kmc14Image },
    { value: 'kmc15', label: 'KMC-15', sections: ['Section D', 'Section E', 'Section F'], image: kmc15Image },
    { value: 'kmc16', label: 'KMC-16', sections: ['Section G', 'Section H', 'Section I'], image: kmc16Image }
];

function UserLogin() {
    const [selectedWard, setSelectedWard] = useState('');
    const [sections, setSections] = useState([]);

    const handleWardChange = (event) => {
        const selectedWard = event.target.value;
        setSelectedWard(selectedWard);
        const ward = wards.find(w => w.value === selectedWard);
        setSections(ward ? ward.sections : []);
    };

    const getWardImage = () => {
        const ward = wards.find(w => w.value === selectedWard);
        return ward ? ward.image : kmc;
    };

    return (
        <div className="userlogin-container">
            <div className="userlogin-content">
                <div className="form-column">
                    <h1>Let us know where you're located..</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="ward">Select Ward:</label>
                            <select id="ward" name="ward" className="form-control" value={selectedWard} onChange={handleWardChange}>
                                <option value="">Select a Ward</option>
                                {wards.map(ward => (
                                    <option key={ward.value} value={ward.value}>{ward.label}</option>
                                ))}
                            </select>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="ward-section">Select Section:</label>
                            <select id="ward-section" name="ward-section" className="form-control" disabled={!selectedWard}>
                                <option value="">Select a Section</option>
                                {sections.map((section, index) => (
                                    <option key={index} value={section}>{section}</option>
                                ))}
                            </select>
                        </div>
                        
                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                </div>
                <div className="image-column">
                    <img src={getWardImage()} alt={selectedWard || 'default'} />
                </div>
            </div>
        </div>
    );
}

export default UserLogin;
