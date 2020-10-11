import axios from 'axios';
/* Want to override the settings? [y/N] n
�  Linked to aynil98/video-hook (created .vercel and added it to .gitignore)
�  Inspect: https://vercel.com/aynil98/video-hook/jeu974761 [2s]
✅  Production: https://video-hook-phi.vercel.app [copied to clipboard] [42s]
�  Deployed to production. Run `vercel --prod` to overwrite later (https://vercel.link/2F).
�  To change the domain or build command, go to https://vercel.com/aynil98/video-hook/settings
*/
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});
