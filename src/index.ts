import { verifyToken } from './helper';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

import { consume } from './kafka';
import { pool } from './db';

const app = express();

const PORT = process.env.PORT || 6000;
// Use body-parser middleware to parse JSON requests
app.use(bodyParser.json());

// Endpoint to get data from the database with paging

// Route to retrieve data with token verification
app.get('/data', verifyToken, async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    // Calculate the offset based on the page and limit
    const offset = (Number(page) - 1) * Number(limit);

    // Retrieve data from the database
    const result = await pool.query(
      'SELECT * FROM changedPosts LIMIT $1 OFFSET $2',
      [limit, offset],
    );

    res.status(200).json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Error retrieving data from database',
    });
  }
});

consume();
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
