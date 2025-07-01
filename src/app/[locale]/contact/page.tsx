// Components
import { FAQ } from '@/components/sections/contact/faq';
import { Form } from '@/components/sections/contact/form';
import { ContactInformations } from '@/components/sections/contact/informations';

export default function Contact() {
  return (
    <div className="min-h-screen py-8">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Entre em Contato
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estamos aqui para ajudar! Entre em contato conosco através dos
            canais abaixo ou envie uma mensagem usando o formulário.
          </p>
        </div>

        <ContactInformations />

        <Form />

        <FAQ />
      </div>
    </div>
  );
}
