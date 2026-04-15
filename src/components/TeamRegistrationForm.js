import React, { useState } from 'react';

const TeamRegistrationForm = () => {
    const [teamName, setTeamName] = useState('');
    const [bowlerNames, setBowlerNames] = useState(['', '']);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('PayPal');

    const handleBowlerChange = (index, value) => {
        const newBowlerNames = [...bowlerNames];
        newBowlerNames[index] = value;
        setBowlerNames(newBowlerNames);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log({ teamName, bowlerNames, email, phone, paymentMethod });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Team Registration</h2>
            <label>
                Team Name:
                <input type="text" value={teamName} onChange={(e) => setTeamName(e.target.value)} required />
            </label>
            {bowlerNames.map((name, index) => (
                <label key={index}>
                    Bowler Name {index + 1}:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => handleBowlerChange(index, e.target.value)}
                        required
                    />
                </label>
            ))}
            <button type="button" onClick={() => setBowlerNames([...bowlerNames, ''])}>Add Another Bowler</button>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <label>
                Phone:
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </label>
            <label>
                Payment Method:
                <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                    <option value="PayPal">PayPal</option>
                    <option value="Venmo">Venmo</option>
                </select>
            </label>
            {paymentMethod === 'PayPal' && <p><a href="https://www.paypal.com">Pay with PayPal</a></p>}
            {paymentMethod === 'Venmo' && <p><a href="https://venmo.com">Pay with Venmo</a></p>}
            <button type="submit">Register Team</button>
        </form>
    );
};

export default TeamRegistrationForm;
