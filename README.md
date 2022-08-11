# 0ty

_Pronounced "Naughty"_

> Node script to detect and replace naughty words in a string.

## Installation

```bash
npm i -s 0ty
# or
yarn add 0ty
```

## Dataset

0ty draws from the two datasets employed in [cuss's](https://github.com/words/cuss) English dataset: [Luis von Ahn’s Research Group (Carnegie Mellon)](https://www.cs.cmu.edu/~biglou/resources/) and [Wikipedia's List of Ethnic Slurs](https://en.wikipedia.org/wiki/List_of_ethnic_slurs). It further draws on [Facebook](https://www.freewebheaders.com/bad-words-list-and-page-moderation-words-list-for-facebook/) and [YouTube's](https://www.freewebheaders.com/youtube-blacklist-words-free-and-youtube-comment-moderation/) comment blacklists provided by [FreeWebHeaders](https://www.freewebheaders.com).

All words have been hand-tagged with one or more categories which aim to describe the nature of vulgarity which the word may represent.

Disagree with the categorization of a word? Feel free to submit a pull request or open a discussion.

### Tags

- `taboo_body_part`
- `vulgar`
- `insult`
- `sexual`
- `homophobic`
- `transphobic`
- `racist`
- `scatological`
- `misogynist`
- `nazi`
- `animal_cruelty`
- `violent`

### Note on Contextual/Informational

Some words are tagged with an additional tag of `contextual` or `informational`. These are cases where the context of a word in older forms of English _may_ be unoffensive. In similar fashion, words which may be used to present historical or otherwise educational information are tagged with the tag `informational`.

For example, `breast` and `booby` (as in the bird) are both include an `informational` tag whereas `boobs` is not. In a similar sense, `ass` includes

## Usage

```js
import Naughty from '0ty';

const naughty = new Naughty();

const [hasNaughtyWord, info] = naughty.detect(`Dammit Jim, I'm a doctor not a bricklayer!`);

if (hasNaughtyWord) {
  console.log(info);
  process.exit(1);
}
```

### Example Settings

The following settings would be recommended for discussion board moderation which is focused on World War II:

```js
const naughty = new Naughty({
  nazi: ['informational'],
});
```

## API

### `Naughty(settings)`

### `detect(str)`

### `replace(str, settings)`

## Contributing

Contributions are greatly appreciated.

Contributions ought to be one of the following:

1. Add additional tags to words
2. Add new words with tags
3. Add new tags

If a PR cannot satisfy one of the above items, open an issue to discuss the contribution that you wish to make so we can source the relevant information.

Words should never be added that do not have _some_ relevant source indicating that the word is vulgar or offensive[^1]. Offensive should be defined as words which are generally off-limits to the majority of the public, are considered inappropriate for children, or target a [protected class](https://en.wikipedia.org/wiki/Protected_group#United_States).

## License

[MIT](https://github.com/words/cuss/blob/HEAD/license) &copy; [Matt McElwee](https://github.com/Renddslow)

[^1]: Wikipedia and UrbanDictionary are both permitted relevant sources.
