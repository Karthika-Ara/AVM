/**
 * SEO meta block. React 19 hoists <title>/<meta>/<link> rendered anywhere in
 * the tree into <head>, so each page can declare its own metadata declaratively.
 */
export default function Seo({
  title = 'Best Dental Clinic | AVM Smiles',
  description = 'AVM Smiles is a trusted dental clinic offering advanced dental treatments, expert dentists, and complete dental health care for all ages.',
  keywords,
  path = '/',
}) {
  const canonical = `https://avmsmilesdental.com${path}`
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  )
}
