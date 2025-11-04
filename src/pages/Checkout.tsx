import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, CreditCard, Tag, Loader2 } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';
import { useToast } from '@/hooks/use-toast';

// Mapeamento de dias para Stripe Price IDs
const STRIPE_PRICES: Record<number, { priceId: string; productId: string; amount: number }> = {
  1: { priceId: 'price_1SL4TqAglZhgVhrDBe5GrcEf', productId: 'prod_THdlnsMUOTY44Y', amount: 9.90 },
  2: { priceId: 'price_1SL4n6AglZhgVhrDYypdcuK9', productId: 'prod_THe5Q7BoKXdIyp', amount: 19.80 },
  3: { priceId: 'price_1SL4o5AglZhgVhrDuAurLIG8', productId: 'prod_THe6xev7LRatL8', amount: 27.70 },
  4: { priceId: 'price_1SL4oyAglZhgVhrDEF3X3Wyb', productId: 'prod_THe70h2nYPL9BC', amount: 39.60 },
  5: { priceId: 'price_1SL4qGAglZhgVhrDhQsylzu0', productId: 'prod_THe8vtTda3y8oA', amount: 49.50 },
  7: { priceId: 'price_1SL4rAAglZhgVhrDryeAjLHY', productId: 'prod_THe9uoQeAFRWOS', amount: 69.30 },
  12: { priceId: 'price_1SL4rvAglZhgVhrDv6tMkIZm', productId: 'prod_THeA990TwPMWzB', amount: 118.80 },
  15: { priceId: 'price_1SL4slAglZhgVhrD1yf2lxR0', productId: 'prod_THeBIrnffoeMGJ', amount: 148.50 },
};

const BASE_PRICE = 9.90;

export default function Checkout() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [days, setDays] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [groupId, setGroupId] = useState<string | null>(null);

  useEffect(() => {
    // Recupera o ID do grupo do sessionStorage
    const storedGroupId = sessionStorage.getItem('checkout-group-id');
    if (storedGroupId) {
      setGroupId(storedGroupId);
    }
  }, []);

  const calculateDiscount = (numDays: number): number => {
    if (numDays >= 30) return 0.50; // 50% desconto
    if (numDays >= 20) return 0.40; // 40% desconto
    if (numDays >= 10) return 0.30; // 30% desconto
    return 0;
  };

  const calculateTotal = (): { subtotal: number; discount: number; total: number; discountPercent: number } => {
    const subtotal = BASE_PRICE * days;
    const discountPercent = calculateDiscount(days);
    const discount = subtotal * discountPercent;
    const total = subtotal - discount;
    
    return {
      subtotal,
      discount,
      total,
      discountPercent: discountPercent * 100
    };
  };

  const { subtotal, discount, total, discountPercent } = calculateTotal();

  const handleDaysChange = (value: string) => {
    const numValue = parseInt(value) || 0;
    if (numValue >= 0 && numValue <= 365) {
      setDays(numValue);
    }
  };

  const getClosestStripePrice = (numDays: number) => {
    // Encontra o preço mais próximo configurado no Stripe
    const availableDays = Object.keys(STRIPE_PRICES).map(Number).sort((a, b) => a - b);
    
    // Se o número exato existe, retorna
    if (STRIPE_PRICES[numDays]) {
      return STRIPE_PRICES[numDays];
    }
    
    // Caso contrário, calcula manualmente baseado no preço base
    return null;
  };

  const handleCheckout = async () => {
    if (!groupId) {
      toast({
        title: "Erro",
        description: "Grupo não identificado. Por favor, tente novamente.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    
    try {
      // Aqui você integraria com seu backend para criar uma sessão Stripe
      // Por enquanto, vamos simular o processo
      
      const stripePrice = getClosestStripePrice(days);
      
      toast({
        title: "Processando Pagamento",
        description: `Redirecionando para checkout seguro (${days} dias - R$ ${total.toFixed(2)})...`,
      });

      // TODO: Integrar com Stripe Checkout Session
      // const response = await fetch('/api/create-checkout-session', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     groupId,
      //     days,
      //     priceId: stripePrice?.priceId || 'custom',
      //     amount: total
      //   })
      // });
      // const { sessionId } = await response.json();
      // const stripe = await loadStripe('sua_publishable_key');
      // await stripe?.redirectToCheckout({ sessionId });
      
      console.log('Payment info:', {
        groupId,
        days,
        total,
        stripePrice
      });
      
    } catch (error) {
      console.error('Checkout error:', error);
      toast({
        title: "Erro",
        description: "Falha ao processar pagamento. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <Button
          variant="ghost"
          onClick={() => navigate('/dashboard')}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar para Dashboard
        </Button>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column - Calculator */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Calcular Valor
              </CardTitle>
              <CardDescription>
                Escolha quantos dias deseja anunciar seu grupo
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="days">Número de Dias</Label>
                <Input
                  id="days"
                  type="number"
                  min="1"
                  max="365"
                  value={days}
                  onChange={(e) => handleDaysChange(e.target.value)}
                  className="text-lg"
                />
                <p className="text-sm text-muted-foreground">
                  Valor base: R$ {BASE_PRICE.toFixed(2)} por 24 horas
                </p>
              </div>

              {/* Discount Badges */}
              <div className="space-y-2">
                <p className="text-sm font-medium">Descontos Disponíveis:</p>
                <div className="flex flex-wrap gap-2">
                  <Badge 
                    variant={days >= 10 ? "default" : "outline"}
                    className="gap-1"
                  >
                    <Tag className="h-3 w-3" />
                    10+ dias: 30% OFF
                  </Badge>
                  <Badge 
                    variant={days >= 20 ? "default" : "outline"}
                    className="gap-1"
                  >
                    <Tag className="h-3 w-3" />
                    20+ dias: 40% OFF
                  </Badge>
                  <Badge 
                    variant={days >= 30 ? "default" : "outline"}
                    className="gap-1"
                  >
                    <Tag className="h-3 w-3" />
                    30+ dias: 50% OFF
                  </Badge>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal ({days} {days === 1 ? 'dia' : 'dias'})</span>
                  <span>R$ {subtotal.toFixed(2)}</span>
                </div>
                
                {discountPercent > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-green-600 font-medium">
                      Desconto ({discountPercent}%)
                    </span>
                    <span className="text-green-600 font-medium">
                      -R$ {discount.toFixed(2)}
                    </span>
                  </div>
                )}

                <div className="flex justify-between text-lg font-bold pt-2 border-t">
                  <span>Total</span>
                  <span className="text-primary">R$ {total.toFixed(2)}</span>
                </div>

                {discountPercent > 0 && (
                  <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded-lg">
                    <p className="text-sm text-green-700 dark:text-green-400 font-medium text-center">
                      🎉 Você está economizando R$ {discount.toFixed(2)}!
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Right Column - Payment Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-primary" />
                Resumo do Pedido
              </CardTitle>
              <CardDescription>
                Confira os detalhes antes de finalizar
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg space-y-2">
                  <h3 className="font-medium">O que você receberá:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Anúncio do seu grupo por <strong>{days} {days === 1 ? 'dia' : 'dias'}</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Destaque premium na plataforma</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Maior visibilidade para seu grupo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Estatísticas de acesso detalhadas</span>
                    </li>
                  </ul>
                </div>

                {days < 10 && (
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                    <p className="text-sm text-blue-700 dark:text-blue-400">
                      💡 <strong>Dica:</strong> Adicionando mais {10 - days} {10 - days === 1 ? 'dia' : 'dias'}, 
                      você ganha 30% de desconto!
                    </p>
                  </div>
                )}

                {days >= 10 && days < 20 && (
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                    <p className="text-sm text-blue-700 dark:text-blue-400">
                      💡 <strong>Dica:</strong> Adicionando mais {20 - days} {20 - days === 1 ? 'dia' : 'dias'}, 
                      você aumenta o desconto para 40%!
                    </p>
                  </div>
                )}

                {days >= 20 && days < 30 && (
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                    <p className="text-sm text-blue-700 dark:text-blue-400">
                      💡 <strong>Dica:</strong> Adicionando mais {30 - days} {30 - days === 1 ? 'dia' : 'dias'}, 
                      você consegue o máximo desconto de 50%!
                    </p>
                  </div>
                )}
              </div>

              <Button 
                className="w-full"
                size="lg"
                onClick={handleCheckout}
                disabled={days < 1 || loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processando...
                  </>
                ) : (
                  `Finalizar Pagamento - R$ ${total.toFixed(2)}`
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Pagamento seguro e protegido
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
