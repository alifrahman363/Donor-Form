import pool from '../database/keys' 

require('dotenv').config(); 
 

const authentication = {}    

// donor form  submission
authentication.donorform = async (req, res) => {
    const {donorFname, donorGender, donorDoB, donorZip,  donorCity, donorDistrict,  donorDivision, donorBloodGroup } = req.body;

    try {
        await pool.query('INSERT INTO donorform(donor_fname, donor_gender, donor_dob, donor_location_zip, donor_location_city, donor_location_district, donor_location_division, donor_blood_group) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', 
        [donorFname, donorGender, donorDoB, donorZip,  donorCity, donorDistrict,  donorDivision, donorBloodGroup])
        
        res.status(200).json({
            message: 'Successfully registered', 
            student: {donorFname, donorGender, donorDoB, donorZip,  donorCity, donorDistrict,  donorDivision, donorBloodGroup}
        })
    } catch (error) {
        res.status(500).json({
            message: 'An error has occured in authentication.donorform method', error
        })
    }
} 

module.exports = authentication