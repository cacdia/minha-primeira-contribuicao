import fs from 'node:fs'
import path from 'node:path'

export default {
  // Monitora todos os arquivos JSON no diretório 'data/people'
  watch: ['../contribuidores/*.json'],
  load(watchedFiles) {
    // Lê e processa cada arquivo JSON
    const people = watchedFiles.map((file) => {
      const content = fs.readFileSync(file, 'utf-8')
      return JSON.parse(content)
    })

    function isValidGithubProfile(url: string): boolean {
      return /^https:\/\/github.com\/[^/]+$/.test(url)
    }

    const members = people
      .map((person) => {
        if (!person.github || !isValidGithubProfile(person.github) || person.github.length > 70) {
          throw new Error(`Invalid GitHub URL: ${person.github}`);
        }

        const username = person.github.split('/').pop();
        return {
          avatar: `https://github.com/${username}.png`,
          name: person.name?.trim() || username,
          links: [
            { icon: 'github', link: person.github },
          ],
        };
      });

    return { members }
  },
}
