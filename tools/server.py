"""Servidor local do FluentDaily (http://localhost:8770) sem cache.

O http.server padrão deixa o navegador guardar cópias antigas dos arquivos; aí, depois de
gerar áudios novos, o site continua usando a lista antiga e cai na voz robótica do navegador.
Este servidor manda o navegador sempre conferir se há versão nova.
"""
import http.server
import os
import sys


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-cache, must-revalidate")
        super().end_headers()


class SingleServer(http.server.ThreadingHTTPServer):
    # No Windows, o padrão deixa vários servidores ocuparem a mesma porta ao mesmo tempo
    # (e um antigo pode responder no lugar do novo). Assim, um segundo servidor não sobe.
    allow_reuse_address = False


if __name__ == "__main__":
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # pasta ingles/
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8770
    os.chdir(root)
    try:
        server = SingleServer(("", port), NoCacheHandler)
    except OSError:
        print(f"O FluentDaily ja esta aberto em http://localhost:{port} (pode fechar esta janela).")
        sys.exit(0)
    print(f"FluentDaily rodando em http://localhost:{port}  (feche esta janela para desligar)")
    server.serve_forever()
