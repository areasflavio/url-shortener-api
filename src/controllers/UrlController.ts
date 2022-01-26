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
    const createdAt = new Date();

    const newUrl = await URLModel.create({
      originURL,
      hash,
      shortURL,
      createdAt,
    });

    res.json(newUrl);
  }

  public async updateURL(req: Request, res: Response): Promise<void> {
    const { originURL, shortURL } = req.body;

    const url = await URLModel.findOneAndUpdate(
      { shortURL },
      { originURL, createdAt: new Date() }
    );

    if (!url) {
      res.status(400).json({ error: 'URL not found.' });
      return;
    }

    res.json({
      hash: url.hash,
      originURL,
      shortURL,
      createdAt: new Date(),
      _id: url._id,
      __v: url.__v,
    });
  }

  public async redirect(req: Request, res: Response): Promise<void> {
    const { hash } = req.params;

    const url = await URLModel.findOne({ hash });

    if (url) {
      res.redirect(url.originURL);
      return;
    }

    res.status(400).json({ error: 'URL not found.' });
  }

  public async latestURLs(req: Request, res: Response): Promise<void> {
    const urls = await URLModel.find({}, null, {
      limit: 5,
      sort: { createdAt: -1 },
    });

    if (!urls) {
      res.status(400).json({ error: 'There are no URLs.' });
      return;
    }

    res.json(urls);
  }
}

export { UrlController };
