import { Card, CardContent } from '@/components/ui/card';

export function FAQ() {
  const faq = [
    {
      question: 'Qual o prazo de entrega?',
      answer:
        'O prazo varia de 3 a 7 dias úteis, dependendo da sua localização.',
    },
    {
      question: 'Como faço para trocar um produto?',
      answer:
        'Você tem até 30 dias para solicitar a troca. Entre em contato conosco.',
    },
    {
      question: 'Vocês entregam em todo o Brasil?',
      answer: 'Sim, entregamos em todo território nacional.',
    },
    {
      question: 'Como acompanho meu pedido?',
      answer:
        'Você receberá um código de rastreamento por email após a compra.',
    },
  ];

  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        Perguntas Frequentes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {faq.map((faq, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
