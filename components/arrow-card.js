import React from 'react'
import cn from 'classnames'
import * as styles from './arrow-card.module.scss'
import { useRouter } from 'next/router'

import Link from 'next/link'

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const ArrowCard = ({ theme, href, left = false, fullpage, children }) => (
  <Link href={href} locale={useRouter().locale}>
    <div className={cn(styles.arrow, left ? styles.left : styles.right, fullpage ? styles.rise : "", styles[`arrow-${theme}`])}>
      {left && <FaArrowLeft className={styles.icon} />}
      {children}
      {!left && <FaArrowRight size={"1em"} className={styles.icon} />}
    </div>
  </Link>
)

export default ArrowCard
