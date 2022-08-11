const fs = require('fs/promises');
const path = require('path');

const normalizeWords = async () => {
  const files = await fs.readdir(path.join(process.cwd(), 'data', 'raw'));
  const words = (
    await Promise.all(
      files.map(async (file) => {
        const filePath = path.join(process.cwd(), 'data', 'raw', file);
        const fileContents = await fs.readFile(filePath, 'utf8');
        return fileContents.split(',').map((word) => word.trim());
      }),
    )
  ).reduce((acc, item) => [...acc, ...item], []);
  const uniqueWords = [...new Set(words)]
    .sort((a, b) => a.localeCompare(b))
    .filter((word) => word.trim());

  const [err, data] = await fs
    .readFile(path.join(process.cwd(), 'data', 'words.json'), 'utf8')
    .then(
      (data) => [null, data],
      (err) => [err, null],
    );

  const existingDataset = err ? {} : JSON.parse(data);

  await fs.writeFile(
    path.join(process.cwd(), 'data', 'words.json'),
    JSON.stringify(
      uniqueWords.reduce((acc, word) => {
        acc[word] =
          typeof existingDataset[word] === 'string' && existingDataset[word].length
            ? existingDataset[word]
            : '';
        return acc;
      }, {}),
    ),
  );

  return uniqueWords;
};

normalizeWords().then((words) => {
  console.log(`Processed ${words.length} unique words`);
});
