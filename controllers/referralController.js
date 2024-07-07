const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { sendReferralEmail } = require('../services/emailService');
const { validateReferral } = require('../utils/validation');

async function submitReferral(req, res) {
  try {
    const { referrerName, referrerEmail, refereeName, refereeEmail } = req.body;

    // Validate data
    const validationErrors = validateReferral(req.body);
    if (validationErrors.length > 0) {
      return res.status(400).json({ errors: validationErrors });
    }

    // Save referral to database
    const referral = await prisma.referral.create({
      data: {
        referrerName,
        referrerEmail,
        refereeName,
        refereeEmail,
      },
    });


    // Send referral email
    await sendReferralEmail(referrerName, referrerEmail, refereeName, refereeEmail);

    res.status(201).json({ message: 'Referral submitted successfully', referral });
  } catch (error) {
    console.error('Error submitting referral:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
// Function to fetch all referral entries from the database
async function getAllReferrals(req, res) {
  try {
    // Fetch all referrals from the database
    const referrals = await prisma.referral.findMany();

    // Return the list of referrals
    res.status(200).json(referrals);
  } catch (error) {
    console.error('Error fetching referrals:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  submitReferral,
  getAllReferrals
};
