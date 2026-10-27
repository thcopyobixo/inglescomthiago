# Como ativar o login no FluentDaily

O código do login já está pronto. Faltam só três coisas, que dependem de você:
1. Criar o banco de dados (Supabase).
2. Colocar as chaves no site.
3. Publicar o site na internet.

Tudo é gratuito e leva uns 15 minutos.

---

## 1. Criar o projeto no Supabase (5 min)

1. Acesse **https://supabase.com** e clique em **Start your project**. Entre com sua conta do GitHub ou com um e-mail.
2. Clique em **New project**:
   - **Name:** `fluentdaily`
   - **Database Password:** crie uma senha forte e guarde-a. O site não usa essa senha, mas o Supabase pede.
   - **Region:** `South America (São Paulo)`
   - Clique em **Create new project** e espere cerca de 1 minuto.
3. No menu da esquerda, abra **SQL Editor** e clique em **New query**.
4. Abra o arquivo `supabase/setup.sql` (fica nesta mesma pasta), copie todo o conteúdo, cole no editor e clique em **Run**. Deve aparecer "Success".

Esse script cria a tabela de progresso com uma regra de segurança: cada pessoa só consegue ler e gravar o próprio progresso.

## 2. Colocar as chaves no site (2 min)

1. No Supabase, abra **Project Settings** (ícone de engrenagem) e depois **API**.
2. Copie dois valores:
   - **Project URL**, algo como `https://abcdefgh.supabase.co`
   - **anon public** (em *Project API keys*), uma chave longa que começa com `eyJ...`
3. Abra o arquivo `js/config.js` e cole os valores:

```js
window.FD_CONFIG = {
  supabaseUrl: 'https://abcdefgh.supabase.co',
  supabaseAnonKey: 'eyJhbGciOi...'
};
```

> Pode colocar a chave **anon public** no site sem medo: ela foi feita para isso, e a segurança vem das regras do passo 1.
> **Nunca** use a chave `service_role`. Essa sim é secreta.

Se preferir, mande os dois valores para o Claude, que ele preenche o arquivo para você.

A partir daqui o login já funciona no seu computador, pelo `abrir-site.bat`.

## 3. Publicar online para todos acessarem (5 min)

A opção mais simples é o **Netlify Drop**:
1. Acesse **https://app.netlify.com/drop** e crie uma conta grátis.
2. Arraste a pasta **`ingles`** inteira para a página.
3. Em segundos o Netlify mostra um endereço como `https://nome-aleatorio.netlify.app`. Dá para trocar o nome em *Site configuration > Change site name*.

Para atualizar o site depois, arraste a pasta de novo (em *Deploys*).

## 4. Avisar o Supabase sobre o endereço do site (1 min)

No Supabase, abra **Authentication**, depois **URL Configuration**:
- **Site URL:** o endereço do Netlify, por exemplo `https://fluentdaily.netlify.app`
- **Redirect URLs:** adicione o mesmo endereço e também `http://localhost:8770`

Assim, os links de confirmação de e-mail e de "esqueci minha senha" levam a pessoa de volta ao site.

### Opcional: entrar sem confirmar o e-mail
Por padrão, quem cria uma conta recebe um e-mail de confirmação antes de poder entrar. Para pular essa etapa (útil entre amigos ou família), vá em **Authentication > Sign In / Providers > Email** e desligue **Confirm email**.

---

## Login por nome de usuário
- Cada pessoa cria a conta com **nome, nome de usuário e senha**, sem e-mail. Por baixo dos panos, o Supabase guarda o usuário como `usuario@users.fluentdaily.app`. É só um formato interno: nenhum e-mail é enviado.
- Por isso, a opção **Confirm email** precisa ficar **desligada** (Authentication > Sign In / Providers > Email).
- Em cada aparelho, a pessoa só precisa entrar **uma vez**. O site continua conectado até ela clicar em "Sair".

### Se um amigo esquecer a senha
Como não há e-mail, quem redefine a senha é você, o administrador:
1. No Supabase, abra **SQL Editor > New query**.
2. Cole o texto abaixo, trocando `usuario` pelo nome de usuário do seu amigo e `novaSenha123` pela senha nova:

```sql
update auth.users
set encrypted_password = crypt('novaSenha123', gen_salt('bf'))
where email = 'usuario@users.fluentdaily.app';
```

3. Clique em **Run** e passe a senha nova para ele. Depois ele pode trocá-la em **Ajustes > Trocar senha**.

Para ver a lista de pessoas cadastradas, abra **Authentication > Users**.

## Como funciona
- Cada pessoa cria a própria conta com nome, e-mail e senha.
- O progresso inteiro de cada um (lições, áudios, leituras, vocabulário, redações, tempo de estudo) fica salvo na nuvem e aparece em qualquer computador ou celular onde a pessoa entrar.
- Sem internet, o site continua funcionando e envia o progresso quando a conexão voltar. A bolinha no avatar mostra o estado: verde = salvo, amarela = salvando, vermelha = sem conexão.
- Quem já tinha progresso neste navegador antes do login recebe esse progresso na primeira conta criada aqui.
