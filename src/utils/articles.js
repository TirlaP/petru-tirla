import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDirectory = path.join(process.cwd(), 'src/articles');

export function getArticleMetadata() {
  // Make sure the directory exists
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  const filenames = fs.readdirSync(articlesDirectory);
  const allArticlesData = filenames
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => {
      // Remove ".mdx" from file name to get id
      const id = filename.replace(/\.mdx$/, '');

      // Read markdown file as string
      const fullPath = path.join(articlesDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const { data } = matter(fileContents);

      // Calculate estimated reading time
      const wordsPerMinute = 200;
      const content = fileContents.split(/\s+/).length;
      const readingTime = Math.ceil(content / wordsPerMinute);

      return {
        id,
        readingTime,
        ...data,
      };
    });

  // Sort posts by date
  return allArticlesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getArticleData(id) {
  const fullPath = path.join(articlesDirectory, `${id}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents);

  // Calculate estimated reading time
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return {
    id,
    content,
    readingTime,
    ...data,
  };
}

export function getAllArticleIds() {
  // Make sure the directory exists
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }
  
  const filenames = fs.readdirSync(articlesDirectory);
  
  return filenames
    .filter(filename => filename.endsWith('.mdx'))
    .map(filename => ({
      params: {
        id: filename.replace(/\.mdx$/, '')
      }
    }));
}