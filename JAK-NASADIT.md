# Trhlina — jak hru dostat do telefonu

Hra je obyčejná webová stránka (PWA). Aby fungovala poloha, musí běžet
na adrese **https**. Soubor otevřený přímo z telefonu (`file://`) polohu nedostane.

## Nasazení z počítače (nejjednodušší)
1. Rozbal zip do složky.
2. Otevři **app.netlify.com/drop** a přetáhni tam **celou složku** (ne jednotlivé soubory).
3. Dostaneš adresu `https://…netlify.app`. Tu otevři v telefonu.

## Nasazení jen z telefonu (GitHub Pages)
Netlify Drop na telefonu nejde, protože neumí nahrát složku. Místo toho:
1. Na **github.com** si založ účet a nový veřejný repozitář (třeba `trhlina`).
2. V repozitáři **Add file → Upload files** a vyber všechny soubory ze zipu
   (`index.html`, `manifest.webmanifest`, `sw.js` a tři ikony). Potvrď **Commit**.
3. **Settings → Pages → Branch: main → Save.** Za minutu je hra na
   `https://tvoje-jmeno.github.io/trhlina/`.

Soubory stažené v mobilním Chromu najdeš ve **Files / Soubory → Stažené** (Download).

## V telefonu
- Otevři adresu v Chromu (Android) nebo Safari (iPhone) a zvol **Přidat na plochu**.
  Hra se pak spouští na celou obrazovku a jde otevřít i bez signálu.
- Při prvním „Hrát venku s GPS“ se prohlížeč zeptá na polohu → **Povolit**.
  Když jsi dřív odmítl: ikona zámku vedle adresy → Oprávnění → Poloha → Povolit.
  Na iPhonu: Nastavení → Soukromí → Polohové služby → Safari → Při používání.
- Na Androidu zkontroluj, že má Chrome zapnutou **přesnou polohu**.

## Venku
- Věž postav doma nebo tam, odkud vycházíš.
- Displej při hře s GPS nezhasíná sám. Hra jede 30 snímků za vteřinu, ať šetří baterii.
- Po procházce: Menu → **Záznam procházky** → Kopírovat. Z toho jde vyladit hustota míst,
  dosah a síla nepřátel podle skutečné chůze.

## Nová verze
Nahraj nové soubory na stejné místo. Hra se při dalším otevření s internetem
aktualizuje sama. Postup (věž, kronika, rozsvícené ulice) zůstane — je uložený v telefonu.
