module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required.' });
  }

  console.log(`[CONTACT] ${name} <${email}>: ${subject}`);
  console.log(`[CONTACT] Message: ${message}`);

  res.json({ success: true, message: 'Message received! I\'ll get back to you soon.' });
};
