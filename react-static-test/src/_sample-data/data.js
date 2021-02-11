export const accordianHeaders = ['Getting Started', 'Components', 'Design', 'Getting Started', 'Plugins', 'Utilities']

export const treeSample1 = [
  {
    type: "folder",
    name: "client",
    files: [
      {
        type: "folder",
        name: "ui",
        files: [
          { type: "file", name: "Toggle.js" },
          { type: "file", name: "Button.js" },
          { type: "file", name: "Button.style.js" },
        ],
      },
      {
        type: "folder",
        name: "components",
        files: [
          { type: "file", name: "Tree.js" },
          { type: "file", name: "Tree.style.js" },
        ],
      },
      { type: "file", name: "setup.js" },
      { type: "file", name: "setupTests.js" },
    ],
  },
  {
    type: "folder",
    name: "packages",
    files: [
      {
        type: "file",
        name: "main.js",
      },
    ],
  },
]

export const treeSample2 = [
  {
    name: 'Audi',
    type: 'folder',
    files: [
      {
        name: 'Supercars',
        type: 'folder',
        files: [
          {
            name: 'Audi R8 super',
            type: 'folder',
            metadata: {
              title: 'Audi R8 super',
              sidebar: [
                'Audi',
                'Supercars'
              ],
              slug: 'audi-r8-super',
              file: '/Users/alibresinn/Projects/markdown-finder/docs/Audi-R8/another.md',
              href: 'main/audi/supercars/audi-r8-super',
              project: 'main'
            },
            files: []
          },
          {
            name: 'Audi R8',
            type: 'folder',
            metadata: {
              title: 'Audi R8',
              sidebar: [
                'Audi',
                'Supercars'
              ],
              slug: 'try-out-this-slug-on-for-size',
              file: '/Users/alibresinn/Projects/markdown-finder/docs/Audi-R8/markdown-file.md',
              href: 'main/audi/supercars/this-audi-r8-project',
              project: 'main'
            },
            files: []
          }
        ]
      }
    ]
  },
  {
    name: 'Jeeps',
    type: 'folder',
    files: [
      {
        name: 'Cherokee',
        type: 'folder',
        files: [
          {
            name: 'Grand',
            type: 'folder',
            files: [
              {
                name: 'Another',
                type: 'folder',
                metadata: {
                  title: 'Another',
                  sidebar: [
                    'Jeeps',
                    'Cherokee',
                    'Grand'
                  ],
                  slug: 'another',
                  file: '/Users/alibresinn/Projects/markdown-finder/docs/Cherokee/markdown-file.md',
                  href: 'project/jeeps/cherokee/grand/disc-union',
                  project: 'project'
                },
                files: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Chevrolet',
    type: 'folder',
    files: [
      {
        name: 'Chevette Shark V8 GT. Baller car you won\'t believe how cool!',
        type: 'folder',
        metadata: {
          title: 'Chevette Shark V8 GT. Baller car you won\'t believe how cool!',
          sidebar: [
            'Chevrolet'
          ],
          slug: 'chevette-shark-v8-gt-baller-car-you-wont-believe-how-cool',
          file: '/Users/alibresinn/Projects/markdown-finder/docs/Chevette-Shark-V8-GT/markdown-file.md',
          href: 'project/chevrolet/disc-union',
          project: 'project'
        },
        files: []
      }
    ]
  },
  {
    name: 'Datsun',
    type: 'folder',
    files: [
      {
        name: '510',
        type: 'folder',
        files: [
          {
            name: '1973 Datsun 510 Widebody',
            type: 'folder',
            metadata: {
              title: '1973 Datsun 510 Widebody',
              sidebar: [
                'Datsun',
                510
              ],
              slug: '1973-datsun-510-widebody',
              file: '/Users/alibresinn/Projects/markdown-finder/docs/Datusn/1973-Datsun-510-Widebody/markdown-file.md',
              href: 'project/datsun/510/disc-union',
              project: 'project'
            },
            files: []
          }
        ]
      }
    ]
  },
  {
    name: 'Supercars',
    type: 'folder',
    files: [
      {
        name: 'This is some fancy electric super car. You won\'t believe how fast it goes!',
        type: 'folder',
        metadata: {
          title: 'This is some fancy electric super car. You won\'t believe how fast it goes!',
          sidebar: [
            'Supercars'
          ],
          slug: 'this-is-some-fancy-electric-super-car-you-wont-believe-how-fast-it-goes',
          file: '/Users/alibresinn/Projects/markdown-finder/docs/Electric-Supercar/markdown-file.md',
          href: 'project/supercars/disc-union',
          project: 'project'
        },
        files: []
      }
    ]
  },
  {
    name: 'F body',
    type: 'folder',
    files: [
      {
        name: 'Camaro',
        type: 'folder',
        files: [
          {
            name: 'Black top Camaro',
            type: 'folder',
            metadata: {
              title: 'Black top Camaro',
              sidebar: [
                'F body',
                'Camaro'
              ],
              slug: 'black-top-camaro',
              file: '/Users/alibresinn/Projects/markdown-finder/docs/F-Body/Camaro/Black-Top/markdown-file.md',
              href: 'project/f-body/camaro/disc-union',
              project: 'project'
            },
            files: []
          },
          {
            name: '1969 Detroit Speed Camaro. 830 HP',
            type: 'folder',
            metadata: {
              title: '1969 Detroit Speed Camaro. 830 HP',
              sidebar: [
                'F body',
                'Camaro'
              ],
              slug: '1969-detroit-speed-camaro-830-hp',
              file: '/Users/alibresinn/Projects/markdown-finder/docs/F-Body/Camaro/Detroit-Speed-Built-a-Killer-803hp-1969-Chevrolet-Camaro/markdown-file.md',
              href: 'project/f-body/camaro/disc-union',
              project: 'project'
            },
            files: []
          },
          {
            name: 'G-Code Camaro. Lame name dope as shit car.',
            type: 'folder',
            metadata: {
              title: 'G-Code Camaro. Lame name dope as shit car.',
              sidebar: [
                'F body',
                'Camaro'
              ],
              slug: 'g-code-camaro-lame-name-dope-as-shit-car',
              file: '/Users/alibresinn/Projects/markdown-finder/docs/F-Body/Camaro/G-Code/markdown-file.md',
              href: 'project/f-body/camaro/disc-union',
              project: 'project'
            },
            files: []
          },
          {
            name: 'Inferno Camaro',
            type: 'folder',
            metadata: {
              title: 'Inferno Camaro',
              sidebar: [
                'F body',
                'Camaro'
              ],
              slug: 'inferno-camaro',
              file: '/Users/alibresinn/Projects/markdown-finder/docs/F-Body/Camaro/Inforno-1969-Camaro/markdown-file.md',
              href: 'project/f-body/camaro/disc-union',
              project: 'project'
            },
            files: []
          },
          {
            name: 'Misc',
            type: 'folder',
            metadata: {
              title: 'Misc',
              sidebar: [
                'F body',
                'Camaro'
              ],
              slug: 'misc',
              file: '/Users/alibresinn/Projects/markdown-finder/docs/F-Body/Camaro/Misc/markdown-file.md',
              href: 'project/f-body/camaro/disc-union',
              project: 'project'
            },
            files: []
          },
          {
            name: 'World War Z 70\'s style wide body Camaro',
            type: 'folder',
            metadata: {
              title: 'World War Z 70\'s style wide body Camaro',
              sidebar: [
                'F body',
                'Camaro'
              ],
              slug: 'world-war-z-70s-style-wide-body-camaro',
              file: '/Users/alibresinn/Projects/markdown-finder/docs/F-Body/Camaro/World-War-Z-Camaro/markdown-file.md',
              href: 'project/f-body/camaro/disc-union',
              project: 'project'
            },
            files: []
          }
        ]
      }
    ]
  },
  {
    name: 'Algebras',
    type: 'folder',
    files: [
      {
        name: 'Unions',
        type: 'folder',
        files: [
          {
            name: 'Tagged Subs & ADTs',
            type: 'folder',
            files: [
              {
                name: 'Generic Camaro.js',
                type: 'file',
                metadata: {
                  title: 'Generic Camaro',
                  sidebar: [
                    'Algebras',
                    'Unions',
                    'Tagged Subs & ADTs'
                  ],
                  slug: 'generic-camaro',
                  file: '/Users/alibresinn/Projects/markdown-finder/docs/F-Body/Camaro/markdown-file.md',
                  href: 'project/algebras/unions/tagged-subs-adts/disc-union',
                  project: 'project'
                },
                files: []
              },
              {
                name: 'Check out these all aluminum fixed race seats',
                type: 'file',
                metadata: {
                  title: 'Check out these all aluminum fixed race seats',
                  sidebar: [
                    'Algebras',
                    'Unions',
                    'Tagged Subs & ADTs'
                  ],
                  slug: 'check-out-these-all-aluminum-fixed-race-seats',
                  file: '/Users/alibresinn/Projects/markdown-finder/docs/Race-seats/markdown-file.md',
                  href: 'project/algebras/unions/tagged-subs-adts/disc-union',
                  project: 'project'
                },
                files: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'F Body',
    type: 'folder',
    files: [
      {
        name: 'Stance',
        type: 'folder',
        files: [
          {
            name: 'Stanced to heck!',
            type: 'folder',
            metadata: {
              title: 'Stanced to heck!',
              sidebar: [
                'F Body',
                'Stance'
              ],
              slug: 'stanced-to-heck',
              file: '/Users/alibresinn/Projects/markdown-finder/docs/F-Body/Stance/markdown-file.md',
              href: 'project/f-body/stance/disc-union',
              project: 'project'
            },
            files: []
          }
        ]
      }
    ]
  }
]