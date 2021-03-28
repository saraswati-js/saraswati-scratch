import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import { oldContent as content } from '../../_sample-data'
import SidebarItem from './sidebar/item'

// https://codesandbox.io/s/o7n912o1o9?file=/index.js
// https://dev.to/jsmanifest/create-a-modern-dynamic-sidebar-menu-in-react-using-recursion-36eo
// https://jsmanifest.com/create-a-modern-dynamic-sidebar-in-react-using-recursion/
// const content = [{ "name": "Audi", "children": [{ "name": "Supercars", "children": [{ "name": "Audi R8 super", "metadata": { "title": "Audi R8 super", "sidebar": ["Audi", "Supercars"], "slug": "audi-r8-super", "file": "/Users/alibresinn/Projects/markdown-finder/docs/Audi-R8/another.md", "href": "main/audi/supercars/audi-r8-super", "project": "main" }, "children": [] }, { "name": "Audi R8", "metadata": { "title": "Audi R8", "sidebar": ["Audi", "Supercars"], "slug": "try-out-this-slug-on-for-size", "file": "/Users/alibresinn/Projects/markdown-finder/docs/Audi-R8/markdown-file.md", "href": "main/audi/supercars/this-audi-r8-project", "project": "main" }, "children": [] }] }] }, { "name": "Jeeps", "children": [{ "name": "Cherokee", "children": [{ "name": "Grand", "children": [{ "name": "Another", "metadata": { "title": "Another", "sidebar": ["Jeeps", "Cherokee", "Grand"], "slug": "another", "file": "/Users/alibresinn/Projects/markdown-finder/docs/Cherokee/markdown-file.md", "href": "project/jeeps/cherokee/grand/disc-union", "project": "project" }, "children": [] }] }] }] }, { "name": "Chevrolet", "children": [{ "name": "Chevette Shark V8 GT. Baller car you won't believe how cool!", "metadata": { "title": "Chevette Shark V8 GT. Baller car you won't believe how cool!", "sidebar": ["Chevrolet"], "slug": "chevette-shark-v8-gt-baller-car-you-wont-believe-how-cool", "file": "/Users/alibresinn/Projects/markdown-finder/docs/Chevette-Shark-V8-GT/markdown-file.md", "href": "project/chevrolet/disc-union", "project": "project" }, "children": [] }] }, { "name": "Datsun", "children": [{ "name": "510", "children": [{ "name": "1973 Datsun 510 Widebody", "metadata": { "title": "1973 Datsun 510 Widebody", "sidebar": ["Datsun", 510], "slug": "1973-datsun-510-widebody", "file": "/Users/alibresinn/Projects/markdown-finder/docs/Datusn/1973-Datsun-510-Widebody/markdown-file.md", "href": "project/datsun/510/disc-union", "project": "project" }, "children": [] }] }] }, { "name": "Supercars", "children": [{ "name": "This is some fancy electric super car. You won't believe how fast it goes!", "metadata": { "title": "This is some fancy electric super car. You won't believe how fast it goes!", "sidebar": ["Supercars"], "slug": "this-is-some-fancy-electric-super-car-you-wont-believe-how-fast-it-goes", "file": "/Users/alibresinn/Projects/markdown-finder/docs/Electric-Supercar/markdown-file.md", "href": "project/supercars/disc-union", "project": "project" }, "children": [] }] }, { "name": "F body", "children": [{ "name": "Camaro", "children": [{ "name": "Black top Camaro", "metadata": { "title": "Black top Camaro", "sidebar": ["F body", "Camaro"], "slug": "black-top-camaro", "file": "/Users/alibresinn/Projects/markdown-finder/docs/F-Body/Camaro/Black-Top/markdown-file.md", "href": "project/f-body/camaro/disc-union", "project": "project" }, "children": [] }, { "name": "1969 Detroit Speed Camaro. 830 HP", "metadata": { "title": "1969 Detroit Speed Camaro. 830 HP", "sidebar": ["F body", "Camaro"], "slug": "1969-detroit-speed-camaro-830-hp", "file": "/Users/alibresinn/Projects/markdown-finder/docs/F-Body/Camaro/Detroit-Speed-Built-a-Killer-803hp-1969-Chevrolet-Camaro/markdown-file.md", "href": "project/f-body/camaro/disc-union", "project": "project" }, "children": [] }, { "name": "G-Code Camaro. Lame name dope as shit car.", "metadata": { "title": "G-Code Camaro. Lame name dope as shit car.", "sidebar": ["F body", "Camaro"], "slug": "g-code-camaro-lame-name-dope-as-shit-car", "file": "/Users/alibresinn/Projects/markdown-finder/docs/F-Body/Camaro/G-Code/markdown-file.md", "href": "project/f-body/camaro/disc-union", "project": "project" }, "children": [] }, { "name": "Inferno Camaro", "metadata": { "title": "Inferno Camaro", "sidebar": ["F body", "Camaro"], "slug": "inferno-camaro", "file": "/Users/alibresinn/Projects/markdown-finder/docs/F-Body/Camaro/Inforno-1969-Camaro/markdown-file.md", "href": "project/f-body/camaro/disc-union", "project": "project" }, "children": [] }, { "name": "Misc", "metadata": { "title": "Misc", "sidebar": ["F body", "Camaro"], "slug": "misc", "file": "/Users/alibresinn/Projects/markdown-finder/docs/F-Body/Camaro/Misc/markdown-file.md", "href": "project/f-body/camaro/disc-union", "project": "project" }, "children": [] }, { "name": "World War Z 70's style wide body Camaro", "metadata": { "title": "World War Z 70's style wide body Camaro", "sidebar": ["F body", "Camaro"], "slug": "world-war-z-70s-style-wide-body-camaro", "file": "/Users/alibresinn/Projects/markdown-finder/docs/F-Body/Camaro/World-War-Z-Camaro/markdown-file.md", "href": "project/f-body/camaro/disc-union", "project": "project" }, "children": [] }] }] }, { "name": "Algebras", "children": [{ "name": "Unions", "children": [{ "name": "Tagged Subs & ADTs", "children": [{ "name": "Generic Camaro", "metadata": { "title": "Generic Camaro", "sidebar": ["Algebras", "Unions", "Tagged Subs & ADTs"], "slug": "generic-camaro", "file": "/Users/alibresinn/Projects/markdown-finder/docs/F-Body/Camaro/markdown-file.md", "href": "project/algebras/unions/tagged-subs-adts/disc-union", "project": "project" }, "children": [] }, { "name": "Check out these all aluminum fixed race seats", "metadata": { "title": "Check out these all aluminum fixed race seats", "sidebar": ["Algebras", "Unions", "Tagged Subs & ADTs"], "slug": "check-out-these-all-aluminum-fixed-race-seats", "file": "/Users/alibresinn/Projects/markdown-finder/docs/Race-seats/markdown-file.md", "href": "project/algebras/unions/tagged-subs-adts/disc-union", "project": "project" }, "children": [] }] }] }] }, { "name": "F Body", "children": [{ "name": "Stance", "children": [{ "name": "Stanced to heck!", "metadata": { "title": "Stanced to heck!", "sidebar": ["F Body", "Stance"], "slug": "stanced-to-heck", "file": "/Users/alibresinn/Projects/markdown-finder/docs/F-Body/Stance/markdown-file.md", "href": "project/f-body/stance/disc-union", "project": "project" }, "children": [] }] }] }]
// 
// function Sidebah({ items }) { return (
//     <ul>
//       {items.map(item => (
//         <li key={item.name}>
//           <a href="#">{item.name}</a>
//           {item.children && <Sidebah items={item.children} />}
//         </li>
//       ))}
//     </ul>
// )}
// 
// /**
//  * https://github.com/azouaoui-med/react-pro-sidebar
//  * https://github.com/abhijithvijayan/react-minimal-side-navigation#usage
//  * https://rsuitejs.com/components/sidenav
//  */
// export default function Sidebar({ allPosts }) {
//   // Mabe a hook to get the data? I dunno yet.
//   // const morePosts = Object.values(allPosts).slice(1)
// 
//   return (
//     <div className="sidebar">
//       <Sidebah items={sidebar} />
//     </div>
//   )
// }

function Sidebar({ items = content, depthStep, depth, expanded }) {
  return (
    <div className="sidebar">
      <List disablePadding dense>
        {items.map((sidebarItem, index) => (
          <React.Fragment key={`${sidebarItem.name}${index}`}>
            {sidebarItem === "divider" ? (<Divider style={{ margin: "6px 0" }} />) : (
              <SidebarItem
                depthStep={depthStep}
                depth={depth}
                expanded={expanded}
                item={sidebarItem}
              />
            )}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}

export default Sidebar;
