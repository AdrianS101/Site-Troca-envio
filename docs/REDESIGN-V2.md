# Redesign V2 — TROCAENVIO

Documento interno: não é publicado no site.

## Inventário da V1 e onde ficou na V2

| V1 | V2 |
|---|---|
| Header: Como Funciona, Diferenciais, Integrações, "Falar Conosco" (WhatsApp) | Header: Como funciona, Benefícios (#diferenciais), Integrações, Contato + "Acessar o app". WhatsApp segue no botão flutuante, no hero e na chamada final |
| Hero: "Quem disse que precisa sair do condomínio para DEVOLVER ou ENVIAR sua encomenda?" | Substituído pelo título "Sua encomenda vai. Você fica." (pedido). A ideia de envio e devolução sem sair do condomínio está no texto de apoio e no selo "Envio e devolução no condomínio" |
| Hero: "E se isso estiver no 'quintal' de casa, sem filas, sem estacionamento e em poucos cliques." | Mantido como texto de apoio no hero |
| Hero: "Quero a trocaenvio no meu condomínio" (WhatsApp) | Mantido como botão secundário (WhatsApp) |
| Problemas: 4 cartões + "Sabemos que seu tempo é precioso…" | Mantidos com textos completos |
| Solução: título, explicação, 6 benefícios, frase de destaque | Mantidos ("Disponível 24/7" → "Lockers disponíveis 24/7") |
| Como funciona: 5 etapas, badges App Store/Google Play, "Pronto para começar?", "Falar com especialista" | 5 etapas mantidas; etapa 1 virou "Acesse o aplicativo" (PWA); badges removidos; "Acessar o app" + "Falar com especialista" |
| — | Nova seção do app (PWA), entre Como funciona e Diferenciais |
| Diferenciais: 6 cartões | Mantidos com textos completos |
| Posicionamento: texto e indicadores 5h / 24/7 / 0 | Mantidos, em bloco azul |
| Depoimentos: 6 textos, nomes, identificações, 5 estrelas, 4.9/5.0 com 2.847 avaliações | Mantidos integralmente. As fotos do Unsplash foram trocadas por iniciais |
| Integrações: Mercado Livre, Shopee, Correios + Jadlog, Loggi, Total Express, J&T Express, Pegaki, Melhor Envio | Todas mantidas, com os mesmos arquivos de logo. Os locais (J&T, Pegaki, Melhor Envio) receberam versões só sem a margem transparente (`*-recorte.png`), sem alteração de cor ou proporção |
| CTA final: "Pare de perder tempo!!!!!", texto, WhatsApp, Rápido/Simples/Eficiente | "Pare de perder tempo." + mesmo texto + "Acessar o app" + "Falar no WhatsApp" + os 3 pilares |
| Rodapé: logo, frase, navegação, telefone, e-mail, localização, Instagram/LinkedIn/Facebook, horário, lockers 24/7, links legais | Tudo mantido. Telefone e e-mail agora são clicáveis. O logo não usa mais o filtro que invertia as cores (o rodapé ficou claro) |

## Configuração

`frontend/src/config/site.js` centraliza:
- `APP_URL`: endereço do PWA usado em todos os botões "Acessar o app";
- `APP_STORES`: links futuros das lojas, desativados (`enabled: false`). Ainda não há componente que os exiba;
- WhatsApp, contatos, redes sociais, links legais e logo.

## Pendências de validação (comercial/jurídico)

1. **Indicadores**: "5h economizadas por semana" e "0 filas ou esperas" (mantidos da V1, sem fonte).
2. **Avaliação**: "4.9/5.0 baseado em 2.847 avaliações" (sem fonte).
3. **Depoimentos**: confirmar que os 6 são reais e autorizados. Inclui o "aumentou 300%" (Carlos Eduardo) e o subtítulo "Milhares de pessoas já recuperaram seu tempo".
4. **Alegações comerciais**: "Implementação em dias", "Resultados imediatos", "Junte-se aos condomínios que já transformaram…", "Segurança garantida", "Rastreamento em tempo real", "Integração completa / Conectado com Mercado Livre, Shopee, Correios…".
5. **Integrações**: confirmar que a compatibilidade com cada marca é real. Elas não são apresentadas como parceria formal; há uma nota de titularidade das marcas.
6. **24/7**: o site informa que 24/7 vale apenas para o depósito no locker e que coleta, atendimento e entrega não são 24/7. Confirmar a redação com a operação.
7. **Instruções de tela inicial**: os caminhos do Safari (Compartilhar > Adicionar à Tela de Início) e do Chrome Android são genéricos. Validar no PWA real, incluindo se ele tem manifest próprio.

## Materiais e links pendentes

- **Endereço do PWA**: https://trocaenvio-clientes.ecoiamais.com.br/ (informado pelo cliente). Não foi possível abrir a partir do ambiente de desenvolvimento por bloqueio de rede.
- **Logo principal**: continua no arquivo hospedado em `customer-assets.emergentagent.com` (mesmo da V1), que não pôde ser verificado. Recomendado: enviar a logo original em PNG/SVG transparente e sem margens para salvar em `frontend/public/` e apontar `LOGO_URL` para ela.
- **Logos externos de integrações**: Mercado Livre, Shopee, Correios, Jadlog, Loggi e Total Express estão hospedados no mesmo domínio externo. Se algum falhar, o site mostra o nome em texto. Recomendado: copiar os arquivos para o repositório.
- **Foto do hero**: a fotografia original do homem usando o locker preto não estava disponível isolada (só na arte publicitária). Foi usada a `foto-principal.png` do projeto (locker branco). Enviar a foto original para substituir.
- **Foto do bloco "tempo"**: a foto da mulher descansando não estava disponível. Foi usada uma composição gráfica com elementos da marca.
- **Tela do app**: o mockup usa a tela de login recortada da arte "Seu tempo é precioso" (`app-tela-login.webp`, 427×906). Para mais nitidez, enviar uma captura original do PWA.
- **Links legais**: Política de Privacidade e Termos de Uso continuam com `#` (como na V1).
- **Lojas**: App Store e Google Play ficam desativados até a publicação.
