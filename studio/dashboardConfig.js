export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62cbfba4858ea703d64dc452',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-fn8khm45',
                  apiId: '1a60b1b0-2b86-440a-8aef-85a81e43a981'
                },
                {
                  buildHookId: '62cbfba5d203bd04a8b20291',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-zw1cofcn',
                  apiId: 'aae71692-9bb4-4a60-a923-f70ae83a8cbc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jloomb/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-zw1cofcn.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
