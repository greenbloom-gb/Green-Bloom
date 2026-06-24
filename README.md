# 🌿 Green Bloom

Sistema de gerenciamento de conteúdo para marketing de afiliados.

O Green Bloom foi desenvolvido para centralizar o cadastro de produtos, geração de conteúdo, organização de campanhas e publicação de links de afiliados em um único painel administrativo.

---

# Objetivos

* Centralizar o gerenciamento dos produtos.
* Publicar automaticamente no site.
* Facilitar a divulgação em grupos de WhatsApp.
* Gerar copies para redes sociais.
* Organizar campanhas de marketing.
* Manter toda a estrutura utilizando Google Sheets como banco de dados.

---

# Tecnologias

## Front-end

* HTML5
* CSS3
* JavaScript

## Hospedagem

* GitHub
* Vercel

## Banco de dados

* Google Sheets

## API

* Google Apps Script

---

# Estrutura do Projeto

```
GreenBloom/

│
├── index.html
├── painel.html
├── entrar.html
├── favicon.svg
├── assets/
└── README.md
```

---

# Estrutura da API

```
GreenBloom_API

│
├── Código.gs
├── Utils.gs
├── Produtos.gs
├── Categorias.gs
├── Marketing.gs
├── Configuracoes.gs
└── Dashboard.gs
```

---

# Estrutura da Planilha

## produtos

| Campo             |
| ----------------- |
| id                |
| slug              |
| name              |
| subtitle          |
| description       |
| category          |
| badge             |
| image             |
| video             |
| preco             |
| preco_antigo      |
| cupom             |
| desconto          |
| emoji             |
| shopee_link       |
| mercadolivre_link |
| amazon_link       |
| tiktok_link       |
| ativo             |
| status            |
| destaque          |
| novidade          |
| ordem             |
| clicks            |
| compartilhamentos |
| copy_whatsapp     |
| created_at        |
| updated_at        |

---

## categorias

Responsável pelas categorias exibidas no site.

Campos:

* id
* nome
* emoji
* ordem
* ativo

---

## marketing

Responsável por armazenar conteúdos para divulgação.

Campos:

* id_produto
* whatsapp_copy
* hashtags
* observacoes

---

## configuracoes

Responsável por todas as configurações do site.

Campos:

* chave
* valor

Exemplos:

* site_name
* instagram
* whatsapp
* footer
* logo
* bio
* cor_primaria
* cor_secundaria

---

# Arquitetura da API

## Código.gs

Responsável apenas pelo roteamento da API.

Funções:

* doGet()
* doPost()

---

## Utils.gs

Funções reutilizadas em toda a API.

Exemplos:

* json()
* response()
* sheet()
* getHeaders()
* getValues()
* findRow()
* uuid()
* now()
* slugify()

---

## Produtos.gs

Responsável pelo CRUD de produtos.

Funções:

* getProducts()
* getAllProducts()
* getProduct()
* createProduct()
* updateProduct()
* inactivateProduct()
* activateProduct()
* deleteProduct()
* updateOrder()
* incrementClicks()
* incrementShares()
* searchProducts()
* getFeaturedProducts()
* getNewProducts()

---

## Categorias.gs

Responsável pelo gerenciamento das categorias.

Funções:

* getCategories()
* createCategory()
* updateCategory()
* archiveCategory()
* restoreCategory()

---

## Marketing.gs

Responsável pelas campanhas.

Funções:

* getMarketing()
* saveMarketing()
* getWhatsappCopy()
* getInstagramCopy()
* getTikTokCopy()
* getTelegramCopy()

---

## Configuracoes.gs

Responsável pelas configurações gerais.

Funções:

* getConfig()
* saveConfig()

---

## Dashboard.gs

Responsável pelos indicadores do sistema.

Funções:

* getDashboard()
* getStatistics()
* getRecentProducts()
* getMostClicked()
* getMostShared()

---

# Fluxo do Sistema

```
Painel Administrativo

↓

Google Apps Script

↓

Google Sheets

↓

API JSON

↓

Index.html

↓

Usuário Final
```

---

# Fluxo do Produto

Cadastrar Produto

↓

Salvar na planilha

↓

API

↓

Site

↓

Cliques

↓

Compartilhamentos

↓

Dashboard

---

# Funcionalidades da V1

* Cadastro de produtos
* Edição de produtos
* Exclusão de produtos
* Ativar/Inativar produtos
* Categorias
* Configurações do site
* Dashboard básico
* Pesquisa
* Ordenação
* Produtos em destaque
* Produtos novos
* Contador de cliques
* Contador de compartilhamentos

---

# Roadmap

## V1

* API
* Painel
* Site
* Dashboard

## V2

* IA para geração de copies
* Geração automática de hashtags
* Agendamento de campanhas
* Dashboard avançado
* Analytics

## V3

* Multiusuário
* Controle de permissões
* Aplicativo mobile
* Integração com marketplaces

---

# Convenções

* Nunca excluir produtos por padrão.
* Priorizar inativação.
* Todo produto possui UUID.
* Toda alteração atualiza updated_at.
* Toda resposta da API segue o padrão JSON.
* Todo módulo possui responsabilidade única.

---

# Projeto

Green Bloom © 2026

Sistema de gerenciamento de conteúdo para afiliados, desenvolvido para crescer de forma modular, organizada e escalável.
