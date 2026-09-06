const express = require('express');
const app = express();
app.use(express.json());

const challenges = new Map([
  ['payment-retry', { title: 'Make payment retry-safe', difficulty: 'advanced' }]
]);
const submissions = [];

app.get('/health', (_, res) => res.json({ status: 'ok' }));
app.get('/challenges', (_, res) => res.json([...challenges.entries()].map(([id, value]) => ({ id, ...value }))));
app.post('/submissions', (req, res) => {
  const { challengeId, code } = req.body || {};
  if (!challenges.has(challengeId) || !code) return res.status(400).json({ error: 'challengeId and code are required' });
  const submission = { id: submissions.length + 1, challengeId, status: 'queued', receivedAt: new Date().toISOString() };
  submissions.push(submission);
  res.status(202).json(submission);
});

app.listen(3001, () => console.log('assessment-platform listening on :3001'));
