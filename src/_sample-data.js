import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import SettingsIcon from "@material-ui/icons/Settings";
import DriveEtaIcon from '@material-ui/icons/DriveEta';

export const accordianHeaders = ['Getting Started', 'Components', 'Design', 'Getting Started', 'Plugins', 'Utilities']

function onClick(e, item) {
  window.alert(JSON.stringify(item, null, 2));
}

export const content = [{
  name: "home",
  label: "Home",
  Icon: HomeIcon
}, {
  name: "billing",
  label: "Billing",
  Icon: ReceiptIcon,
  items: [{
    name: "statements",
    label: "Statements",
    onClick
  }, {
    name: "reports",
    label: "Reports",
    onClick
  }]
}, "divider", {
  name: "settings",
  label: "Settings",
  Icon: SettingsIcon,
  items: [{
    name: "profile",
    label: "Profile"
  }, {
    name: "insurance",
    label: "Insurance",
    onClick
  }, "divider", {
    name: "notifications",
    label: "Notifications",
    Icon: NotificationsIcon,
    items: [{
      name: "email",
      label: "Email",
      onClick
    }, {
      name: "desktop",
      label: "Desktop",
      Icon: DesktopWindowsIcon,
      items: [{
        name: "schedule",
        label: "Schedule"
      }, {
        name: "frequency",
        label: "Frequency"
      }]
    }, {
      name: "sms",
      label: "SMS"
    }]
  }]
}]

export const content2 = [{
  name: "home",
  label: "Home",
  Icon: HomeIcon
}, {
  name: "billing",
  label: "Billing",
  Icon: ReceiptIcon,
  children: [{
    name: "statements",
    label: "Statements",
    metadata: {
      title: "Audi R8 super",
      sidebar: ["Audi", "Supercars"],
      slug: "audi-r8-super",
      file: "/Users/alibresinn/Projects/markdown-finder/docs/Audi-R8/another.md",
      href: "main/audi/supercars/audi-r8-super",
      project: "main"
    },
    onClick
  }, {
    name: "reports",
    label: "Reports",
    onClick
  }]
}, "divider", {
  name: "settings",
  label: "Settings",
  Icon: SettingsIcon,
  children: [{
    name: "profile",
    label: "Profile"
  }, {
    name: "insurance",
    label: "Insurance",
    onClick
  }, "divider", {
    name: "notifications",
    label: "Notifications",
    Icon: NotificationsIcon,
    children: [{
      name: "email",
      label: "Email",
      onClick
    }, {
      name: "desktop",
      label: "Desktop",
      Icon: DesktopWindowsIcon,
      children: [{
        name: "schedule",
        label: "Schedule"
      }, {
        name: "frequency",
        label: "Frequency"
      }]
    }, {
      name: "sms",
      label: "SMS"
    }]
  }]
}]

export const oldContent = [{
  name: 'Audi',
  label: 'Audi',
  Icon: DriveEtaIcon,
  children: [{
    name: 'Supercars',
    Icon: DriveEtaIcon,
    children: [{
      name: 'Audi R8 super',
      Icon: DriveEtaIcon,
      metadata: {
        title: 'Audi R8 super',
        sidebar: ['Audi', 'Supercars'],
        slug: 'audi-r8-super',
        file: '/Users/alibresinn/Projects/markdown-finder/docs/Audi-R8/another.md',
        href: 'main/audi/supercars/audi-r8-super',
        project: 'main'
      },
      children: []
    }, {
      name: 'Audi R8',
      Icon: DriveEtaIcon,
      metadata: {
        title: 'Audi R8',
        sidebar: ['Audi', 'Supercars'],
        slug: 'try-out-this-slug-on-for-size',
        file: '/Users/alibresinn/Projects/markdown-finder/docs/Audi-R8/markdown-file.md',
        href: 'main/audi/supercars/this-audi-r8-project',
        project: 'main'
      },
      children: []
    }]
  }]
}, {
  name: 'Jeeps',
  Icon: DriveEtaIcon,
  children: [{
    name: 'Cherokee',
    children: [{
      name: 'Grand',
      children: [{
        name: 'Another',
        metadata: {
          title: 'Another',
          sidebar: ['Jeeps', 'Cherokee', 'Grand'],
          slug: 'another',
          file: '/Users/alibresinn/Projects/markdown-finder/docs/Cherokee/markdown-file.md',
          href: 'project/jeeps/cherokee/grand/disc-union',
          project: 'project',
        },
        children: []
      }]
    }]
  }]
}, {
  name: 'Chevrolet',
  children: [{
    name: 'Chevette Shark V8 GT. Baller car you won\'t believe how cool!',
    metadata: {
    title: 'Chevette Shark V8 GT. Baller car you won\'t believe how cool!',
    sidebar: ['Chevrolet'],
    slug: 'chevette-shark-v8-gt-baller-car-you-wont-believe-how-cool',
    file: '/Users/alibresinn/Projects/markdown-finder/docs/Chevette-Shark-V8-GT/markdown-file.md',
    href: 'project/chevrolet/disc-union',
    project: 'project',
  },
    children: []
  }]
}, {
  name: 'Datsun',
    children: [{
      name: '510',
      children: [{
        name: '1973 Datsun 510 Widebody',
        metadata: {
          title: '1973 Datsun 510 Widebody',
          sidebar: ['Datsun', 510],
          slug: '1973-datsun-510-widebody',
          file: '/Users/alibresinn/Projects/markdown-finder/docs/Datusn/1973-Datsun-510-Widebody/markdown-file.md',
          href: 'project/datsun/510/disc-union',
          project: 'project',
        },
        children: []
      }]
    }]
}, {
  name: 'Supercars',
    children: [{
      name: 'This is some fancy electric super car. You won\'t believe how fast it goes!',
      metadata: {
        title: 'This is some fancy electric super car. You won\'t believe how fast it goes!',
        sidebar: ['Supercars'],
        slug: 'this-is-some-fancy-electric-super-car-you-wont-believe-how-fast-it-goes',
        file: '/Users/alibresinn/Projects/markdown-finder/docs/Electric-Supercar/markdown-file.md',
        href: 'project/supercars/disc-union',
        project: 'project',
      },
      children: []
  }]
}, {
  name: 'F body',
    children: [{
      name: 'Camaro',
      children: [{
        name: 'Black top Camaro',
        metadata: {
          title: 'Black top Camaro',
          sidebar: ['F body', 'Camaro'],
          slug: 'black-top-camaro',
          file: '/Users/alibresinn/Projects/markdown-finder/docs/F-Body/Camaro/Black-Top/markdown-file.md',
          href: 'project/f-body/camaro/disc-union',
          project: 'project',
        },
        children: []
      }, {
        name: '1969 Detroit Speed Camaro. 830 HP',
        metadata: {
          title: '1969 Detroit Speed Camaro. 830 HP',
          sidebar: ['F body', 'Camaro'],
          slug: '1969-detroit-speed-camaro-830-hp',
          file: '/Users/alibresinn/Projects/markdown-finder/docs/F-Body/Camaro/Detroit-Speed-Built-a-Killer-803hp-1969-Chevrolet-Camaro/markdown-file.md',
          href: 'project/f-body/camaro/disc-union',
          project: 'project',
        },
        children: []
      }, {
        name: 'G-Code Camaro. Lame name dope as shit car.',
        metadata: {
          title: 'G-Code Camaro. Lame name dope as shit car.',
          sidebar: ['F body', 'Camaro'],
          slug: 'g-code-camaro-lame-name-dope-as-shit-car',
          file: '/Users/alibresinn/Projects/markdown-finder/docs/F-Body/Camaro/G-Code/markdown-file.md',
          href: 'project/f-body/camaro/disc-union',
          project: 'project',
        },
        children: []
      }, {
        name: 'Inferno Camaro',
        metadata: {
          title: 'Inferno Camaro',
          sidebar: ['F body', 'Camaro'],
          slug: 'inferno-camaro',
          file: '/Users/alibresinn/Projects/markdown-finder/docs/F-Body/Camaro/Inforno-1969-Camaro/markdown-file.md',
          href: 'project/f-body/camaro/disc-union',
          project: 'project',
        },
        children: []
      }, {
        name: 'Misc',
        metadata: {
          title: 'Misc',
          sidebar: ['F body', 'Camaro'],
          slug: 'misc',
          file: '/Users/alibresinn/Projects/markdown-finder/docs/F-Body/Camaro/Misc/markdown-file.md',
          href: 'project/f-body/camaro/disc-union',
          project: 'project',
        },
        children: []
      }, {
        name: 'World War Z 70\'s style wide body Camaro',
      metadata: {
        title: 'World War Z 70\'s style wide body Camaro',
        sidebar: ['F body', 'Camaro'],
        slug: 'world-war-z-70s-style-wide-body-camaro',
        file: '/Users/alibresinn/Projects/markdown-finder/docs/F-Body/Camaro/World-War-Z-Camaro/markdown-file.md',
        href: 'project/f-body/camaro/disc-union',
        project: 'project',
      },
        children: []
    }]
}]
}, {
  name: 'Algebras',
    children: [{
      name: 'Unions',
      children: [{
        name: 'Tagged Subs & ADTs',
        children: [{
          name: 'Generic Camaro',
          metadata: {
            title: 'Generic Camaro',
            sidebar: ['Algebras', 'Unions', 'Tagged Subs & ADTs'],
            slug: 'generic-camaro',
            file: '/Users/alibresinn/Projects/markdown-finder/docs/F-Body/Camaro/markdown-file.md',
            href: 'project/algebras/unions/tagged-subs-adts/disc-union',
            project: 'project',
          },
          children: []
        }, {
          name: 'Check out these all aluminum fixed race seats',
          metadata: {
            title: 'Check out these all aluminum fixed race seats',
            sidebar: ['Algebras', 'Unions', 'Tagged Subs & ADTs'],
            slug: 'check-out-these-all-aluminum-fixed-race-seats',
            file: '/Users/alibresinn/Projects/markdown-finder/docs/Race-seats/markdown-file.md',
            href: 'project/algebras/unions/tagged-subs-adts/disc-union',
            project: 'project',
          },
          children: []
        }]
      }]
    }]
}, {
  name: 'F Body',
    children: [{
      name: 'Stance',
      children: [{
        name: 'Stanced to heck!',
        metadata: {
          title: 'Stanced to heck!',
          sidebar: ['F Body', 'Stance'],
          slug: 'stanced-to-heck',
          file: '/Users/alibresinn/Projects/markdown-finder/docs/F-Body/Stance/markdown-file.md',
          href: 'project/f-body/stance/disc-union',
          project: 'project',
        },
        children: []
      }]
    }]
}]
