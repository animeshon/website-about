import React from 'react'
import * as styles from './blog-hero.module.scss'
import cn from 'classnames'
import Author from './author'

const BlogHero = ({ title, date, author, target, overline, subtitle }) => (
  <>
    <div className={styles.title}>
      <div className="container-fluid">
        <div className="row">
          <div
            className={cn(
              'col-sm-10 col-sm-offset-1  col-md-8 col-md-offset-2  col-lg-8 col-lg-offset-2',
              styles.line
            )}
          >
            {overline && <p className={styles.subtitle}>{target &&<b>{target} | </b>}{overline}</p>}
            <h1>{title}</h1>
            {subtitle && <h2>{subtitle}</h2>}
            <p className={styles.info}>
              <span>
                <Author className={styles.author} name={author} />
                <br />
                {date}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default BlogHero
