// pages/api/handler.tsx
import { sql } from '@vercel/postgres';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const result = await sql`
                SELECT * FROM Valkyries;
            `;
            res.status(200).json(result);
        } catch (error) {
            console.error('Failed to fetch data:', error);
            res.status(500).json({ message: 'Failed to fetch data' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
