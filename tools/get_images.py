"""Baixa as imagens 3D (Microsoft Fluent Emoji, licença MIT) usadas nas lições
(js/data/course*.js e course-practice.js) para img/fluent/<nome>.png.
Rode de novo sempre que adicionar imagens novas; as que já existem são puladas."""
import glob, os, re, urllib.parse, urllib.request

root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
names = set()
for f in glob.glob(os.path.join(root, "js", "data", "course*.js")):
    names |= set(re.findall(r"img: '([^']+)'", open(f, encoding="utf-8").read()))
out = os.path.join(root, "img", "fluent")
os.makedirs(out, exist_ok=True)

def slug(n): return re.sub(r"[^a-z0-9]+", "-", n.lower()).strip("-")

ok, fail = 0, []
for n in sorted(names):
    dest = os.path.join(out, slug(n) + ".png")
    if os.path.exists(dest) and os.path.getsize(dest) > 0:
        ok += 1; continue
    file = n.lower().replace(" ", "_") + "_3d.png"
    url = "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/" + urllib.parse.quote(f"{n}/3D/{file}")
    try:
        urllib.request.urlretrieve(url, dest); ok += 1
    except Exception as e:
        fail.append((n, str(e)))
print(ok, "imagens ok;", len(fail), "falhas", fail)
