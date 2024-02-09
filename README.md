# Contentful Backup

RIP, this already exists.

Just use https://github.com/contentful/contentful-export

### Args

- `--space-id`
- `--access-token`
- `--outdir`

### Local development

- install dependencies `npm i`
- configure your `.env` file based on `sample.env`
- run `npm run dev`

### Known limitations

Feel free to fix any of these issues with a PR

- Limit to 100 content types, otherwise we'd have to chunk the getModel() function.
