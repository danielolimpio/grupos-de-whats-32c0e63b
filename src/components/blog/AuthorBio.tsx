import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Linkedin, Globe } from "lucide-react";

export function AuthorBio() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-12 p-8 bg-muted/50 rounded-lg">
      <h3 className="text-2xl font-bold mb-6">Sobre o Desenvolvedor</h3>
      
      <div className="flex flex-col md:flex-row gap-6">
        <img 
          src="/images/daniel-olimpio.jpg" 
          alt="Daniel Olimpio"
          className="w-32 h-32 rounded-lg object-cover"
        />
        
        <div className="flex-1">
          <h4 className="text-xl font-bold mb-1">Daniel Olimpio</h4>
          <p className="text-primary font-medium mb-3">Desenvolvedor Web - Moderador dos Grupos</p>
          
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold mb-2">Sobre Mim</h5>
              <p className="text-muted-foreground">
                Unimos tecnologia e criatividade para desenvolver soluções digitais que transformam — oferecendo uma experiência especializada, com autoridade, confiança e impacto real.
              </p>
            </div>
            
            {expanded && (
              <>
                <div>
                  <h5 className="font-semibold mb-2">Minha Jornada</h5>
                  <p className="text-muted-foreground mb-3">
                    Com mais de 20 anos de atuação no mercado digital, sou especializado em desenvolvimento web e design de interfaces, unindo performance, usabilidade e identidade visual em cada projeto.
                  </p>
                  <p className="text-muted-foreground mb-3">
                    Minha expertise está em transformar ideias complexas em soluções digitais funcionais, escaláveis e visualmente marcantes. Trabalho com foco na harmonia entre código limpo, arquitetura eficiente e design responsivo, sempre priorizando a experiência do usuário e os objetivos do negócio.
                  </p>
                  <p className="text-muted-foreground">
                    Do front-end moderno ao back-end robusto, da prototipagem à entrega final, meu compromisso é construir produtos digitais que unem forma, função e tecnologia.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Full Stack Development
                  </span>
                  <span className="px-4 py-2 bg-secondary/10 text-secondary-foreground rounded-full text-sm font-medium">
                    UI/UX Design
                  </span>
                  <span className="px-4 py-2 bg-accent/10 text-accent-foreground rounded-full text-sm font-medium">
                    Brand Identity
                  </span>
                </div>
              </>
            )}
            
            <Button
              variant="ghost"
              onClick={() => setExpanded(!expanded)}
              className="p-0 h-auto font-semibold text-primary hover:text-primary/80"
            >
              {expanded ? "Ver Menos" : "Ver Mais"}
            </Button>
            
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/danielolimpio.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/danielolimpio_com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/danielolimpio_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/danielolimpio-com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://danielolimpio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
