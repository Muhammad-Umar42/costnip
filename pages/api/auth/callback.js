import Cors from 'cors';
import { setCookie } from 'cookies-next';

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  // Rest of the API logic

  const query = req.query;
  const qStrings = new URLSearchParams(query).toString();

  const resa = await fetch(
    `${process.env.NEXT_PUBLIC_API}/api/auth/google/callback?${qStrings}`
  );
  const data = await resa.json();

  setCookie('user', JSON.stringify(data), {
    req,
    res,
    maxAge: 60 * 60 * 24,
  });

  res.redirect('/');
}
