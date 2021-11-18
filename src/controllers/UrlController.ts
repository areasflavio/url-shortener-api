import { Request, Response, urlencoded } from 'express';
import shortId from 'shortid';

import { URLModel } from '../database/model/URL';

class UrlController {
  constructor() {}

  public async shortener(req: Request, res: Response): Promise<void> {
    const { originURL } = req.body;

    const url = await URLModel.findOne({ originURL });

    if (url) {
      res.json(url);
      return;
    }

    const hash = shortId.generate();
    const shortURL = `${process.env.API_URL}/${hash}`;

    const newUrl = await URLModel.create({ originURL, hash, shortURL });

    res.json(newUrl);
  }

  public async redirect(req: Request, res: Response): Promise<void> {
    const { hash } = req.params;

    const url = await URLModel.findOne({ hash });

    if (url) {
      res.redirect(url.originURL);
    }

    res.status(400).json({ error: 'URL not found.' });
  }
}

export { UrlController };
