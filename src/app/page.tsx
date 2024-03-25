'use client'

import { BannerTemplate } from '@/components/Banner'
import {
  ExampleBannerBodySubmitted,
  ExampleBannerBodyUnsubmitted,
  ExampleBannerHeader,
  ExampleBannerImage,
} from '@/components/Banner/BannerExample'
import { ContactFormDialog } from '@/components/ContactFormDialog'
import { FORM_KEY } from '@/const'
import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  // extra context on these var names as it's in this root
  // component i would usually keep this state lower down
  const [contactFormOpen, setContactFormOpen] = useState(false)
  // casting with Boolean() will not work properly here
  const [contactFormSubmitted, setContactFormSubmitted] = useState(
    localStorage.getItem(FORM_KEY) === 'true' || false,
  )

  const openContactForm = () => setContactFormOpen(true)
  const closeContactForm = () => setContactFormOpen(false)

  const submitContactForm = () => {
    localStorage.setItem(FORM_KEY, 'true')
    setContactFormSubmitted(true)
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
      </div>

      <ContactFormDialog
        open={contactFormOpen}
        onClose={closeContactForm}
        onFormSubmitted={submitContactForm}
      />
      <div className={styles.placeholder}>
        <BannerTemplate
          // would look reconsider refactoring the button props as it looks messy
          onClickActionButton={openContactForm}
          buttonText={
            contactFormSubmitted ? 'Send Another Message' : 'Get In Touch'
          }
          body={
            contactFormSubmitted
              ? ExampleBannerBodySubmitted
              : ExampleBannerBodyUnsubmitted
          }
          header={ExampleBannerHeader}
          image={ExampleBannerImage}
        />
      </div>
    </main>
  )
}
