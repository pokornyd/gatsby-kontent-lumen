import React from 'react'
import { Link } from 'gatsby'
import * as _ from 'lodash'

class Testex extends React.Component {
  render() {
    const title = _.get(this.props, 'data.elements.title.value', 'N/A')
    const content = _.get(this.props, 'data.elements.content.value', 'N/A')
    const itemId = _.get(this.props, 'data.system.id')

    return (
      <div className="article" data-kontent-item-id={itemId}>
        <div className="article__meta">

        </div>
        <h2 className="article__title" data-kontent-element-codename="title">
          <Link className="article__title-link" to="">
            {title}
          </Link>
        </h2>
        <p className="article__description"  data-kontent-element-codename="description">{content}</p>
        <Link className="article__readmore" to="">
          Read
        </Link>
      </div>
    )
  }
}

export default Testex
