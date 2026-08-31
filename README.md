# RLMarmores

Site institucional da empresa **RLMarmores**, construído com Django e seguindo princípios da Arquitetura Hexagonal (Portas e Adaptadores) e DDD (Domain-Driven Design).

## Tecnologias e Versões Utilizadas

*   **Python**: 3.12+
*   **Django**: 6.1+
*   **PostgreSQL**: 16+
*   **Psycopg**: 3
*   **pytest** & **pytest-django**: Testes unitários e de integração
*   **python-dotenv**: Configurações via variáveis de ambiente

---

## Estrutura do Projeto

O projeto utiliza a seguinte estrutura organizacional:

*   `config/`: Configurações centrais do Django divididas por ambiente (`base.py`, `local.py`, `production.py`).
*   `src/`: Camadas da Arquitetura Hexagonal & DDD.
    *   `shared/`: Código compartilhado por múltiplos submódulos.
    *   `institutional/`: Submódulo institucional (Home, Sobre, etc.).
        *   `domain/`: Entidades de negócio e interfaces/ports de persistência puros em Python.
        *   `application/`: Casos de uso e orquestradores (Use Cases, DTOs).
        *   `infrastructure/`: Adaptadores externos (Django Models, Admin, Repositórios concretos).
        *   `interfaces/`: Portas de entrada (Views, URLs, API).
*   `templates/`: Modelos HTML do Django.
*   `static/`: Ativos estáticos estruturados (`css`, `js`, `images`, `icons`, `fonts`).
*   `tests/`: Suíte de testes integrados.
*   `docs/`: Documentações técnicas adicionais.

---

## Estratégia de Migração do Template

> O template HTML original é apenas referência visual. As páginas são migradas individualmente para Django, evitando importação massiva de templates, rotas, CSS e JavaScript não utilizados.

---

## Configuração do Ambiente de Desenvolvimento

### 1. Criar e Ativar Ambiente Virtual

```bash
python3.12 -m venv .venv
source .venv/bin/activate
```

### 2. Instalar Dependências

```bash
pip install -r requirements.txt
```

### 3. Configurar Banco de Dados PostgreSQL

Certifique-se de que o PostgreSQL está rodando. Crie o banco e o usuário executando no terminal:

```bash
sudo -u postgres psql -c "CREATE USER rlmarmores WITH PASSWORD 'change-me' SUPERUSER;"
sudo -u postgres psql -c "CREATE DATABASE rlmarmores OWNER rlmarmores;"
```

### 4. Configurar Arquivo `.env`

Crie o arquivo `.env` baseado no `.env.example`:

```bash
cp .env.example .env
```

Ajuste as credenciais do PostgreSQL no arquivo `.env` caso tenha alterado o usuário ou a senha.

### 5. Rodar as Migrations do Banco

```bash
python manage.py makemigrations
python manage.py migrate
```

---

## Execução

### Rodar os Testes

Para garantir que a fundação e a rota de health-check estão corretas:

```bash
pytest
```

### Iniciar Servidor Local

```bash
python manage.py runserver
```

Acesse em seu navegador: [http://127.0.0.1:8000/health/](http://127.0.0.1:8000/health/)
