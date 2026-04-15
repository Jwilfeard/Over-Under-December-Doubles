import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetchTeams();
    }, []);

    const fetchTeams = async () => {
        try {
            const response = await axios.get('/api/teams'); // Replace with your API endpoint
            setTeams(response.data);
        } catch (error) {
            console.error("Error fetching teams", error);
        }
    };

    const deleteTeam = async (teamId) => {
        try {
            await axios.delete(`/api/teams/${teamId}`); // Replace with your API endpoint
            fetchTeams(); // Refresh the list after deletion
        } catch (error) {
            console.error("Error deleting team", error);
        }
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Team Name</th>
                        <th>Over Bowler</th>
                        <th>Under Bowler</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Payment Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team) => (
                        <tr key={team.id}>
                            <td>{team.name}</td>
                            <td>{team.overBowler}</td>
                            <td>{team.underBowler}</td>
                            <td>{team.email}</td>
                            <td>{team.phone}</td>
                            <td>{team.paymentStatus}</td>
                            <td>
                                <button onClick={() => deleteTeam(team.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;