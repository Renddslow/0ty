const tags = {
  b: 'taboo_body_part',
  v: 'vulgar',
  i: 'insult',
  s: 'sexual',
  h: 'homophobic',
  tr: 'transphobic',
  r: 'racist',
  sc: 'scatological',
  m: 'misogynist',
  n: 'nazi',
  a: 'animal_cruelty',
  vi: 'violent',
  d: 'drugs',
  e: 'ethnic_slur',
  eu: 'euphemistic',
  p: 'political',
} as const;

export const qualifiers = {
  i: 'informational',
  c: 'contextual',
  h: 'historical',
  n: 'name',
  s: 'strict', // only exclude when the strict flag is set
};

export default tags;
