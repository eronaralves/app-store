import { Clock, Mail, MapPin, Phone } from 'lucide-react';

// Components
import { Card, CardContent } from '@/components/ui/card';

export function ContactInformations() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'contato@ecostore.com',
      description: 'Respondemos em até 24h',
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '+55 (11) 9999-9999',
      description: 'Seg-Sex: 9h às 18h',
    },
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'São Paulo, SP',
      description: 'Rua das Flores, 123',
    },
    {
      icon: Clock,
      title: 'Horário',
      content: '9h às 18h',
      description: 'Segunda a Sexta-feira',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {contactInfo.map((info, index) => {
        const Icon = info.icon;

        return (
          <Card
            key={index}
            className="text-center hover:shadow-lg transition-shadow"
          >
            <CardContent className="pt-6">
              <div className="w-12 h-12 mx-auto bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mb-4">
                <Icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
              <p className="font-medium text-foreground mb-1">{info.content}</p>
              <p className="text-sm text-muted-foreground">
                {info.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
