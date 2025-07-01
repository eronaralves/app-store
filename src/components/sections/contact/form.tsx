// Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Form() {
  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Envie uma Mensagem
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name">Nome</label>
                <Input id="name" name="name" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email">Email</label>
                <Input id="email" name="email" type="email" required />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject">Assunto</label>
              <Input id="subject" name="subject" required />
            </div>

            <div className="space-y-2">
              <label htmlFor="message">Mensagem</label>
              <Textarea id="message" name="message" rows={6} required />
            </div>

            <Button type="submit" className="w-full">
              Enviar Mensagem
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
