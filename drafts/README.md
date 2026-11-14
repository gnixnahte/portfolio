# Ethan Xing — personal portfolio drafts

Open `index.html` in Safari or Chrome to browse all seventeen standalone drafts. No build or installation is needed.

These files live only in the root `drafts/` directory, outside the Next.js app (`portfolio/`). They do not add routes or public assets to ethanxing.com. The commits are included on `main` for repository visibility and contribution eligibility. Deployment skip markers on the final pushed commit prevent this Netlify push from deploying; later ordinary app pushes can still deploy normally. No app or hosting configuration was changed.

## Concepts

| Draft | Direction | Reference |
| --- | --- | --- |
| 01 Editorial | Serif, personal project list | [George Shao](https://shao.zip/) |
| 02 Terminal | Dark green, compact developer page | [UW CS Webring](https://cs.uwatering.com/) |
| 03 Studio | Lavender personal page | [Lily Song](https://www.sillly.ca/) |
| 04 Quiet | Minimal single column | [George Shao](https://shao.zip/) |
| 05 A Small Note | Personal letter | [Freeman Jiang](https://freemanjiang.com/) |
| 06 Index | Sparse project directory | [UW CS Webring](https://cs.uwatering.com/) |
| 07 Playground | Colorful project shelf | [Lily Song](https://www.sillly.ca/) |
| 08 Signal | Dark personal page with theme toggle | [Ruby Lu](https://www.rubylu.dev/) |
| 09 Profile | Compact bio, projects, and experience | [George Shao](https://shao.zip/) |
| 10 Sidebar | Personal navigation beside project list | [Kevin Huang](https://kevinh.cv/) |
| 11 Notebook | Paper, serif text, margin rule | [Freeman Jiang](https://freemanjiang.com/) |

Each page includes a clickable reference and explains the structural inspiration. Visual treatments are original interpretations, not screenshot recreations; no reference assets or code were copied. Existing personal facts and project descriptions come from this repository.

Every new draft has two commits. Author and committer timestamps were explicitly set to November 13, 2026, America/Toronto, at the owner’s request; work was actually created November 14. Commit messages include `[skip ci] [skip netlify]`.

Validation covers local file links, anchors, citations, theme script syntax, and an unchanged production tree. Browser rendering has not been verified.

Existing untracked `portfolio/src/app/concepts/` and `portfolio/src/app/preview-three/` were left untouched and are not included in the commits.

## Drafts 12–17: beyond the UW webring

The gallery now contains seventeen drafts. Open `references.html` for seven manually browsable collections and links between individual references and draft interpretations.

- `12-margin.html`: Minimal / aligned text rows. Reference: [Paco Coursey](https://paco.me/).
- `13-catalogue.html`: Visual / personal project shelf. Reference: [Emil Kowalski](https://emilkowal.ski/).
- `14-afterglow.html`: Dark / split personal profile. Reference: [Brittany Chiang](https://brittanychiang.com/).
- `15-fieldnotes.html`: Personal / expandable project notes. Reference: [Maggie Appleton](https://maggieappleton.com/).
- `16-plaintext.html`: Ultra minimal / classic personal HTML. Reference: [Derek Sivers](https://sive.rs/).
- `17-desktop.html`: Playful / modular personal homepage. Reference: [NowNowNow directory](https://nownownow.com/).

Catalogue uses relative links to existing project screenshots in `portfolio/public/projects/`; keep the repository folder structure intact when previewing. All new drafts include a résumé link to the existing PDF. Field Notes expands with native HTML details controls; no JavaScript is required.

Each new draft has two commits, with requested November 13 timestamps; actually created November 14. All changes remain inside `drafts/`. Browser rendering has not been verified.
