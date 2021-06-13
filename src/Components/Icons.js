import React from 'react'

import { ReactComponent as Javascript } from '../icons/javascript.svg'
import { ReactComponent as Atom } from '../icons/atom-icon.svg'
import { ReactComponent as Bootstrap } from '../icons/bootstrap.svg'
import { ReactComponent as CSS3 } from '../icons/css-3.svg'
import { ReactComponent as Django } from '../icons/django-icon.svg'
import { ReactComponent as Express } from '../icons/express.svg'
import { ReactComponent as Github } from '../icons/github-icon.svg'
import { ReactComponent as Html } from '../icons/html-5.svg'
import { ReactComponent as Jquery } from '../icons/jquery.svg'
import { ReactComponent as Mongodb } from '../icons/mongodb.svg'
import { ReactComponent as Node } from '../icons/nodejs-icon.svg'
import { ReactComponent as Postgres } from '../icons/postgresql.svg'

import { ReactComponent as Heroku } from '../icons/heroku-icon.svg'
import { ReactComponent as Netlify } from '../icons/netlify.svg'
import { ReactComponent as Python } from '../icons/python.svg'
import { ReactComponent as Postman } from '../icons/postman.svg'
import { ReactComponent as ReactLogo } from '../icons/react.svg'
import { ReactComponent as ReactRouter } from '../icons/react-router.svg'


class Icons extends React.Component {

  render() {
    return (
      <div>
        <div className="container-grid">
          <h1 className="text-center">Skills/Technologies</h1>

            <div className="grid-item1">
              <div className="mt-4">
                <Javascript />
                <p className="mb-4 svgTags">Javascript</p>
              </div>


              <div className="grid-item2">
                <Html />
                <p className="mb-4 svgTags">HTML-5</p>
              </div>

              <div className="grid-item3">
                <CSS3 />
                <p className="mb-4 svgTags">CSS-3</p>
              </div>

              <div className="grid-item4">
                <ReactLogo />
                <p className="mb-4 svgTags">React</p>
              </div>

              <div className="grid-item5">
                <ReactRouter />
                <p className="mb-4 svgTags">React Router</p>
              </div>

              <div className="grid-item6">
                <Node />
                <p className="mb-4 svgTags">Node JS</p>
              </div>

              <div className="grid-item7">
                <Express />
                <p className="mb-4 svgTags">Express</p>
              </div>

              <div className="grid-item8">
                <Mongodb />
                <p className="mb-4 svgTags">MongoDB</p>
              </div>grid-item
              <div className="grid-item9">
                <Jquery />
                <p className="mb-4 svgTags">jQuery</p>
              </div>grid-item
              <div className="grid-item10">
                <Postgres />
                <p className="mb-4 svgTags">PostgreSQL</p>
              </div>grid-item
              <div className="grid-item11">
                <Atom />
                <p className="mb-4 svgTags">Atom</p>
              </div>grid-item
              <div className="grid-item12">
                <Heroku />
                <p className="mb-4 svgTags">Heroku</p>
              </div>grid-item
              <div className="grid-item13">
                <Netlify />
                <p className="mb-4 svgTags">Netlify</p>
              </div>grid-item
              <div className="grid-item14">
                <Django />
                <p className="mb-4 svgTags">Django</p>
              </div>grid-item
              <div className="grid-item15">
                <Python />
                <p className="mb-4 svgTags">Python</p>
              </div>

              <div className="grid-item16">
                <Postman />
                <p className="mb-4 svgTags">Postman</p>
              </div>

              <div className="grid-item17">
                <Bootstrap />
                <p className="mb-4 svgTags">Bootstrap</p>
              </div>

              <div className="grid-item18">
                <Github />
                <p className="mb-4 svgTags">Github</p>
              </div>


          </div>
        </div>
      </div>
    )
  }
}

export default Icons
