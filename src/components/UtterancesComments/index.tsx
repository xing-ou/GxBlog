import {useColorMode} from '@docusaurus/theme-common';
import React, { useEffect, useRef } from 'react'

export const UtterancesComments: React.FC = () => {
  const { colorMode } = useColorMode()
  const elementRef = useRef<HTMLDivElement>(null)
  const theme = colorMode == 'dark' ? 'github-dark' : 'github-light'

  // first load
  useEffect(() => {
    if (!elementRef.current) {
      return
    }

    const scriptElem = document.createElement('script')
    scriptElem.src = 'https://utteranc.es/client.js'
    scriptElem.async = true
    scriptElem.crossOrigin = 'anonymous'
    scriptElem.setAttribute('repo', 'xing-ou/GxBlog')
    scriptElem.setAttribute('issue-term', 'pathname')
    scriptElem.setAttribute('label', 'blog-comment')
    scriptElem.setAttribute('theme', theme)
    elementRef.current.appendChild(scriptElem)
  }, [])

  // when theme change
  useEffect(() => {
    if (document.querySelector('.utterances-frame')) {
      const iframe = document.querySelector<HTMLIFrameElement>('.utterances-frame')

      if (!iframe) {
        return
      }

      iframe?.contentWindow?.postMessage({ type: 'set-theme', theme: theme }, 'https://utteranc.es')
    }
  }, [theme])

  return <section ref={elementRef} />
}