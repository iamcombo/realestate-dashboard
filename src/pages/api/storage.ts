import fsPromises from 'fs/promises';
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

const dataFilePath = path.join(
  process.cwd(),
  '/src/pages/api/json/userData.json'
);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    // Read the existing data from the JSON file
    const jsonData: any = await fsPromises.readFile(dataFilePath);
    const objectData = JSON.parse(jsonData);

    res.status(200).json(objectData);
  } else if (req.method === 'POST') {
    try {
      // Read the existing data from the JSON file
      const jsonData: any = await fsPromises.readFile(dataFilePath);
      const objectData = JSON.parse(jsonData);

      // Get the data from the request body
      const { lister, price, uri, nonce, signature } = req.body;

      // Add the new data to the object
      const newData = {
        lister,
        price,
        uri,
        nonce,
        signature,
      };
      objectData.push(newData);

      // Convert the object back to a JSON string
      const updatedData = JSON.stringify(objectData);

      // Write the updated data to the JSON file
      await fsPromises.writeFile(dataFilePath, updatedData);

      // Send a success response
      res.status(200).json({ message: 'Data stored successfully' });
    } catch (error) {
      console.error(error);
      // Send an error response
      res.status(500).json({ message: 'Error storing data' });
    }
  }
};

export default handler;
