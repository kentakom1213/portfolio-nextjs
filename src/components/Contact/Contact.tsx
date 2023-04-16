import Image from 'next/image';
import { useForm, ValidationError } from '@formspree/react';
import { ContactIconBox, ContactIcons, ContactSuccessed, ContactFormButton, ContactFormTextarea, ContactFormInput, ContactFormLabel, ContactFormLabelFrame, ContactButtonFrame } from './ContactStyles';

export const ContactContents = () => {
  return (
    <>
      <ContactIcons>
        <ContactIconLink link="https://github.com/kentakom1213/" src="/images/contact/github-fill.svg" alt="github" />
        <ContactIconLink link="mailto:kentakom1213@gmail.com" src="/images/contact/mail-fill.svg" alt="mail" />
        <ContactIconLink link="https://powell1213.com" src="/images/contact/links-fill.svg" alt="blog" />
      </ContactIcons>
    </>
  );
};

const ContactIconLink = ({ link, src, alt }: { link: string, src: string, alt: string }) => {
  return (
    <ContactIconBox>
      <a href={link}>
        <Image src={src} alt={alt} fill></Image>
      </a>
    </ContactIconBox>
  );
};

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("mrgvovpl");
  if (state.succeeded) {
    return (
      <ContactSuccessed>
        <h1>送信が完了しました</h1>
        <br />
        <p>ありがとうございます。返信をお待ちください。</p>
      </ContactSuccessed>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>お問い合わせ</h1>
      <ContactFormLabelFrame>
        <ContactFormLabel htmlFor="name">
          名前
        </ContactFormLabel>
      </ContactFormLabelFrame>
      <ContactFormInput
        id="name"
        name="name"
        placeholder="甲本健太"
      />
      <ValidationError
        prefix="Name"
        field="name"
        errors={state.errors}
      />
      <ContactFormLabelFrame>
        <ContactFormLabel htmlFor="email">
          メールアドレス
        </ContactFormLabel>
      </ContactFormLabelFrame>
      <ContactFormInput
        id="email"
        type="email"
        name="email"
        placeholder='example@email.com'
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <ContactFormLabelFrame>
        <ContactFormLabel htmlFor="message">
          お問い合わせ内容
        </ContactFormLabel>
      </ContactFormLabelFrame>
      <ContactFormTextarea
        id="message"
        name="message"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <ContactButtonFrame>
        <ContactFormButton type="submit" disabled={state.submitting}>
          送信
        </ContactFormButton>
      </ContactButtonFrame>
    </form>
  );
};