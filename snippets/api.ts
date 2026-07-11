import express from 'express';
const router = express.Router();

interface JobApplication {
  name: string;
  email: string;
  experience: boolean;
}

let applications: JobApplication[] = [];

router.post('/apply', (req, res) => {
  const { name, email, experience } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const application: JobApplication = {
    name,
    email,
    experience: experience === true
  };

  applications.push(application);

  res.status(201).json({ message: 'Application received', application });
});

router.get('/applications', (req, res) => {
  res.json(applications);
});

export default router;