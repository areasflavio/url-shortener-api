import { Request, Response } from 'express';
import shortId from 'shortid';

class UrlController {
  constructor() {}

  public async shortener(req: Request, res: Response): Promise<void> {
    const { originURL } = req.body;

    const hash = shortId.generate();
    const shortURL = `${process.env.API_URL}/${hash}`;

    res.json({ originURL, hash, shortURL });
  }

  public async redirect(req: Request, res: Response): Promise<void> {
    const { hash } = req.params;

    const url = {
      originURL: 'https://www.npmjs.com/package/dotenv',
      hash: 'oNkuCVH2t',
      shortURL: 'http://localhost:3333/oNkuCVH2t',
    };

    res.redirect(url.originURL);
  }
}

export { UrlController };
