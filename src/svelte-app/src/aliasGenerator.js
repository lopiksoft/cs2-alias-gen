// aliasGenerator.js
import { aliasCategories, languages } from './aliases.js';

export function generateAlias(category) {
  const messages = aliasCategories[category];
  if (!messages) {
    return "No aliases found for this category.";
  }
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

export function generateLanguageAlias() {
  const randomLangIndex = Math.floor(Math.random() * languages.length);
  return `I also speak ${languages[randomLangIndex]}! Challenge me in your language on twitch.tv/lamestop!`;
}