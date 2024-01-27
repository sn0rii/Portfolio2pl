import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nowa wiadomość z twojego portfolio</Preview>
      <Tailwind>
        <Body className="text-black bg-gray-100">
          <Container>
            <Section className="px-10 py-4 my-10 bg-white rounded-md borderBlack">
              <Heading className="leading-tight">
                Otrzymałeś następującą wiadomość z formularza kontaktowego
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>Adres nadawcy: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
