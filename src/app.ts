import express from 'express';
import * as path from "path";
import cors from 'cors';
import type {Request, Response} from 'express';
import { dirname } from 'path';     
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(dirname(import.meta.url));
const port = 3000;
const app = express();

app.use(cors());
app.use('/views', express.static(path.join(__dirname, 'views')));
app.use(express.json());


app.get('/', async (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
