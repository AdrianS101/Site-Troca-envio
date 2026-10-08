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
| Integrações: Mercado Livre, Shopee, Correios + Jadlog, Loggi, Total Express, J&T Express, Pegaki, Melhor Envio | Todas mantidas. Os arquivos originais (pacote `Trocaenvio_Arquivos_Claude.zip`) agora ficam em `frontend/public/logos/`, só sem a margem transparente e reduzidos, sem alteração de cor ou proporção |
| CTA final: "Pare de perder tempo!!!!!", texto, WhatsApp, Rápido/Simples/Eficiente | "Pare de perder tempo." + mesmo texto + "Acessar o app" + "Falar no WhatsApp" + os 3 pilares |
| Rodapé: logo, frase, navegação, telefone, e-mail, localização, Instagram/LinkedIn/Facebook, horário, lockers 24/7, links legais | Tudo mantido. Telefone e e-mail agora são clicáveis. O logo não usa mais o filtro que invertia as cores (o rodapé ficou claro) |

## Configuração

`frontend/src/config/site.js` centraliza:
- `APP_URL`: endereço do PWA usado em todos os botões "Acessar o app";
- `APP_STORES`: links futuros das lojas, desativados (`enabled: false`). Ainda não há componente que os exiba;
- WhatsApp, contatos, redes sociais, links legais e logo.

## Validação de conteúdo

Em 08/10/2026 o cliente validou os indicadores (5h, 24/7, 0 filas), a avaliação 4.9/5.0 com 2.847 avaliações, os depoimentos, as alegações comerciais, as integrações, a redação sobre o 24/7 e as instruções de tela inicial apresentadas na entrega.

## Páginas legais

- `/politica-de-privacidade` e `/termos-de-uso` (`frontend/src/pages/legalContent.js`), com links no rodapé.
- São versões simples, criadas a pedido do cliente e baseadas na LGPD e no CDC. A lista de itens não permitidos foi aprovada pelo cliente em 08/10/2026.
- CNPJ 66.321.444/0001-37 (informado pelo cliente em 08/10/2026), exibido nas páginas legais e no rodapé. A razão social ainda não foi definida: quando houver, preencher `COMPANY.legalName` em `frontend/src/config/site.js`.
- Recomenda-se revisão jurídica, sobretudo para nomear o encarregado (DPO) e confirmar os fornecedores (a ferramenta de análise do site é o PostHog).

## Imagens usadas

- **Hero**: foto do homem usando o locker preto, recortada da área fotográfica da arte `referencia-arte-locker-preto.png`, a pedido do cliente. Todos os textos, o botão e o fundo azul da arte ficaram fora do recorte (`hero-locker-preto.webp`).
- **"Sua logística resolvida"**: moradora no saguão (`locker-moradora.webp`).
- **Bloco "tempo"**: `foto-locker-em-uso.jpg` da V1 (`locker-em-uso.webp`). A foto da mulher descansando da prévia não existe como arquivo separado.
- **Seção do app**: captura original da tela de login do PWA enviada pelo cliente (`app-tela-login.webp`, 478×963).
- As imagens são descritas como ilustrativas no texto alternativo: a origem e a fidelidade ao equipamento real não foram verificadas (ver INSTRUCOES-CLAUDE.txt).

## Logo

`frontend/public/logo-trocaenvio.png` vem de `Logo Trocaenvio.png` (pacote LOGO_TROCAENVIO_2). O fundo claro opaco (#F4F4F4) foi convertido em transparência e as margens recortadas. As cores, a proporção e a assinatura não mudaram. É usado apenas sobre fundos claros (cabeçalho e rodapé). A versão branca (`Trocaenvio Branco.png`) tem fundo preto opaco e não foi usada.

## Materiais e links pendentes

- **Endereço do PWA**: https://trocaenvio-clientes.ecoiamais.com.br/ (informado pelo cliente). Não foi possível abri-lo a partir do ambiente de desenvolvimento.
- **Foto original do hero**: o recorte vem de uma arte publicitária. Se houver a fotografia original em alta resolução, substituir `hero-locker-preto.webp`.
- **Razão social**: a preencher em `COMPANY.legalName` (`frontend/src/config/site.js`).
- **Lojas**: App Store e Google Play ficam desativados até a publicação.
