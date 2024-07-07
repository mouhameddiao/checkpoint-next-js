// next.config.mjs

const config = {
    // Ajoutez vos options de configuration ici
    // Exemple:
    // React Strict Mode pour les composants
    reactStrictMode: true,
    
   
  
    // Exemple pour définir des redirections
    async redirects() {
      return [
        {
          source: '/old-path',
          destination: '/new-path',
          permanent: true,
        },
      ];
    },
  };
  
  export default config;
  