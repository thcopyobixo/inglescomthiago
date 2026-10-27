"""Gera um MP3 com voz neural para cada texto e escreve audio/manifest.js (texto -> arquivo)."""
import asyncio, hashlib, json, os, sys
import edge_tts

items = json.load(open(sys.argv[1], encoding="utf-8"))
out_dir = sys.argv[2]
os.makedirs(out_dir, exist_ok=True)
sem = asyncio.Semaphore(6)
manifest, failed = {}, []

async def one(it):
    name = hashlib.sha1((it["voice"] + "|" + it["text"]).encode()).hexdigest()[:12] + ".mp3"
    path = os.path.join(out_dir, name)
    if not os.path.exists(path) or os.path.getsize(path) == 0:
        async with sem:
            for attempt in range(3):
                try:
                    await edge_tts.Communicate(it["text"], it["voice"]).save(path)
                    break
                except Exception as e:
                    if attempt == 2:
                        failed.append((it["text"][:40], str(e)))
                        return
                    await asyncio.sleep(2)
    manifest[it["text"]] = name

async def main():
    await asyncio.gather(*(one(it) for it in items))

asyncio.run(main())
with open(os.path.join(out_dir, "manifest.js"), "w", encoding="utf-8") as f:
    f.write("// Gerado automaticamente: texto -> arquivo MP3 (vozes neurais)\nwindow.AUDIO = ")
    json.dump(manifest, f, ensure_ascii=False)
    f.write(";\n")
print(len(manifest), "audios ok,", len(failed), "falhas", failed[:3])
