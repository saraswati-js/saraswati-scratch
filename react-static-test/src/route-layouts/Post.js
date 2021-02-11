import React from 'react'
import { useRouteData } from 'react-static'

import BreadCrumbs from '../components/nav/breadcrumbs'
import NextPrev from '../components/nav/next-prev'
import Footer from '../components/nav/footer'
import TOC from '../components/nav/table-of-contents'
import Sidebar from '../components/sidebar'
import Nav1 from '../components/nav/header-nav'

const breadcrumbs = (title, href) => ([
  { title: 'Home', link: '/' },
  { title: 'Blog Posts', link: '/blog/' },
  { title: title, link: href },
])

export default function Blog() {
  const { post } = useRouteData()

  return (
    <div className="page-content">
      <div className="top-search">
        <div className="input-group">
          <span className="input-group-addon"><i className="ti-search"></i></span>
          <input type="text" className="form-control" placeholder="Search for snippets ......" />
          <span className="input-group-addon close-search"><i className="ti-close"></i></span>
        </div>
      </div>

      <Nav1 />
      <Sidebar />

      <div className="content-wrapper">
        <div className="row">
          <div className="col-md-9 content">
            <BreadCrumbs crumbs={breadcrumbs(post.title, `/blog/post/${post.id}/`)}/>

            <div className="doc-content">
              <br />
              <h3>{post.title}</h3>
              {/* <p>{post.body}</p> */}

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in iaculis diam. Aliquam id sollicitudin ante. Aliquam tellus mauris, cursus eget egestas at, semper in sem. Nullam lobortis accumsan arcu eu bibendum. Fusce ac leo semper, porta tellus a, ornare velit. Integer elementum nisl nec nunc commodo rhoncus. Praesent blandit ut turpis a fermentum. Phasellus varius magna ac pulvinar luctus. Aliquam erat volutpat. Curabitur luctus lobortis accumsan. Aliquam erat volutpat. Fusce et enim risus. Integer felis lorem, posuere et efficitur sit amet, maximus non diam. Pellentesque luctus sodales sem in faucibus.</p>
              <p>Nullam sit amet aliquet neque. Pellentesque lobortis, dui eu sagittis gravida, nisi quam dignissim nunc, ac pulvinar dui ipsum eu nulla. Fusce consequat faucibus pellentesque. Sed quis tortor interdum, rhoncus risus vel, cursus nisl. Ut nec magna sed nunc suscipit tempor at faucibus ipsum. Pellentesque faucibus, ante ac sodales volutpat, nisl urna dignissim nunc, at placerat nibh diam quis felis. Sed id est tincidunt, tempus turpis sit amet, finibus nibh. Nam hendrerit sagittis ante ut ultricies.</p>
              <p>Nulla blandit magna augue, at pellentesque dolor fermentum eget. Etiam sagittis eros urna, eget placerat mi posuere sit amet. Nulla feugiat iaculis dolor ac pretium. Pellentesque eleifend dolor at diam placerat, id gravida augue volutpat. Praesent est erat, tincidunt luctus augue vel, semper vehicula elit. Vestibulum a nibh magna. Aliquam eu mi nibh. Proin ut dui sit amet enim fermentum dapibus. Vivamus in sagittis dolor. In vel nunc ut erat consectetur dignissim. Sed luctus vestibulum tellus. Aenean scelerisque, massa in placerat auctor, est nulla pulvinar ipsum, ac porttitor est risus ac ipsum. Praesent eu lacus non est ullamcorper gravida sit amet et nisi. Vestibulum sed tortor ut nibh egestas malesuada. Sed vel arcu lacus.</p>
              <p>Praesent viverra diam eu enim pulvinar vestibulum. Vestibulum pulvinar bibendum tortor, quis tincidunt mi ornare vitae. Phasellus quis magna odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eget justo mattis, luctus lorem ac, finibus eros. Duis et turpis sed nisi tincidunt faucibus. Vestibulum nec ullamcorper odio, posuere bibendum nisi. Ut sed facilisis nisi. Proin ullamcorper tellus ac erat sodales, ac tempor ante malesuada.</p>
              
              {/* <p>Etiam a massa nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus laoreet rutrum volutpat. Duis vitae interdum ligula. Etiam semper nisl in magna molestie, non imperdiet ex posuere. In ut nisi vel dui sollicitudin faucibus. Phasellus rutrum iaculis interdum.</p>
              <p>Donec suscipit ante ac tempus venenatis. Curabitur ut velit tellus. Mauris placerat felis interdum porttitor sollicitudin. Suspendisse magna tellus, tincidunt quis maximus nec, gravida ac quam. Integer congue dolor ut velit sollicitudin, quis faucibus tortor vestibulum. Maecenas eros dolor, pellentesque in accumsan eget, accumsan et velit. Fusce nec turpis massa. Nulla ornare velit consequat, dignissim enim ac, porttitor mauris. Praesent sit amet feugiat nunc, at varius quam. Vivamus lacinia justo nec varius mollis. Integer suscipit sagittis sodales. Mauris felis tellus, venenatis in vestibulum eu, condimentum et neque. Phasellus rutrum erat nec magna eleifend euismod.</p>
              <p>Donec euismod elit turpis, in mattis felis mattis vel. Vestibulum ut fermentum lectus, sit amet ullamcorper diam. Sed tempor, urna eget efficitur tempus, nulla erat rhoncus metus, non ultrices risus libero et arcu. Cras in posuere lectus, quis vulputate justo. Ut ac cursus lectus, eu ultrices sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis lectus neque, aliquam vel posuere at, faucibus non tortor. Praesent vitae justo in justo aliquam feugiat. Nullam eget mi sed massa tempus lobortis. Aenean placerat est ut posuere vehicula. Nunc maximus ligula laoreet leo dapibus ultrices. Curabitur quis felis eu arcu mattis fermentum. Ut feugiat elementum enim, vel lobortis eros congue sed.</p>
              <p>Fusce faucibus tortor sed sagittis tempor. In hac habitasse platea dictumst. Donec vitae blandit ante. Aenean efficitur a libero in cursus. Aenean sapien ex, lobortis ac auctor at, molestie at nisi. Mauris sagittis arcu nibh, malesuada fermentum quam iaculis nec. Quisque dictum nec erat quis convallis. Sed facilisis et leo id mollis. Donec hendrerit tortor ut augue ornare placerat. Aliquam leo velit, tincidunt sed aliquam et, vehicula non lacus.</p>
              <p>In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec fermentum augue eget tristique feugiat. Maecenas et libero id quam lobortis eleifend sodales sed urna. Curabitur auctor elit pretium, maximus elit et, vestibulum neque. Phasellus porttitor fermentum tellus at rutrum. Maecenas vel purus semper mauris sollicitudin pharetra nec id urna. Cras tristique convallis elit, sit amet facilisis ex ullamcorper vel.</p>
              <p>Proin libero purus, maximus sit amet faucibus sed, lobortis nec nisi. Suspendisse in ultricies odio, id sagittis velit. Suspendisse ac lectus aliquam, ullamcorper ex ac, viverra sapien. Nullam mauris urna, elementum id lorem sed, suscipit congue dolor. Vivamus consequat turpis mattis quam posuere accumsan quis eget lectus. Praesent sed erat et risus tincidunt suscipit. Integer iaculis eleifend porttitor. Donec venenatis convallis leo non efficitur. Aliquam volutpat mollis lacus, vel accumsan augue semper at.</p> */}
            </div>
            
            <NextPrev />
          </div>
            <TOC />
        </div>
      </div>
      <Footer />
    </div>
  )
}

