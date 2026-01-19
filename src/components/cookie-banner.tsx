import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 animate-slide-up">
      <Card className="max-w-md mx-auto md:mx-0 md:max-w-lg shadow-lg border-2">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <Cookie className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="font-semibold text-sm mb-2">Cookies e Privacidade</h3>
              <p className="text-xs text-muted-foreground mb-3">
                Usamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{" "}
                <button className="text-primary hover:underline">
                  Política de Privacidade
                </button>
                .
              </p>
              <div className="flex space-x-2">
                <Button 
                  size="sm" 
                  onClick={acceptCookies}
                  className="bg-[hsl(220_10%_25%)] hover:bg-[hsl(220_10%_20%)] text-white text-xs"
                >
                  Aceitar
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={rejectCookies}
                  className="text-xs"
                >
                  Rejeitar
                </Button>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsVisible(false)}
              className="p-1 h-auto"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}