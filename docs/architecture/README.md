# Arquitetura do Projeto RLMarmores

Este projeto segue os princípios da **Arquitetura Hexagonal (Ports & Adapters)** e **Domain-Driven Design (DDD)**. A separação estrita de camadas garante que a lógica de negócios da empresa permaneça isolada das tecnologias de infraestrutura e entrega web.

## Fluxo de Dependências

A direção permitida para importações e dependências é estritamente de fora para dentro:

```text
Domain
   ↑
Application
   ↑
Infrastructure / Interfaces
```

*   **Domain** não depende de nada externo.
*   **Application** depende apenas do domínio.
*   **Infrastructure / Interfaces** dependem da aplicação e do domínio.

---

## Descrição das Camadas (`src/institutional/`)

### 1. Domain
Representa o núcleo do negócio. Contém a lógica independente de tecnologia:
*   `entities/`: Entidades de domínio ricas com regras de validação.
*   `value_objects/`: Objetos de valor imutáveis (Ex: e-mail, telefone).
*   `services/`: Lógica de domínio que envolve múltiplas entidades.
*   `repositories/`: Interfaces (ports de saída) puras em Python descrevendo como carregar/salvar entidades.

> **Regra**: Esta camada **NÃO** importa Django, ORMs, frameworks HTTP ou bibliotecas de persistência.

### 2. Application
Implementa os casos de uso orquestrando a lógica de negócios:
*   `use_cases/`: Lógica específica das ações do sistema (Ex: enviar lead, solicitar orçamento).
*   `dto/`: Data Transfer Objects para transferir dados de e para a aplicação.
*   `ports/`: Interfaces/portas adicionais de comunicação (Ex: enviadores de e-mail, gateways de integração).

### 3. Infrastructure
Implementa as portas e adaptadores de tecnologia (persitência, e-mail, integrações externas):
*   `django/`: Modelos do Django ORM, Admin do Django, Migrações do Banco de Dados.
*   `repositories/`: Implementações concretas dos repositórios de domínio usando o Django ORM.

### 4. Interfaces
Adaptadores de entrada para comunicação externa:
*   `web/`: Controllers de apresentação (views) HTTP, formulários de validação de request, arquivos de URL.
