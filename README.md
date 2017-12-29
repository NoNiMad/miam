# miam
## MongoDB Interface for Administration and Management
(Yup, you're right, I just wanted the acronym to be miam)

For now, the interface is quite limited and probably not ready for production, but it's still useful when the data set is simple enough.
In this version, you can:
- Add/Delete/View databases
- Add/Delete/View/Rename collections
- Add/Delete/View/Edit/Duplicate documents

And you can do all of this using a neat, clean and intuitive (I hope) interface.

## Planned
- System collections
  - Users, with login and add / edit / delete
  - Functions
- Statistics for databases and collections
- Main menu for monitoring, global statistics...
- Pagination
- More AJAX to avoid refresh after every operation (maybe switch to vue.js)
- An idea? Just use the issue tracker!

## Librairies and frameworks
- [Spectre.css](https://picturepan2.github.io/spectre/)
- [ACE](https://ace.c9.io/)
- [Server.js](https://serverjs.io/)
- [warf](https://github.com/NoNiMad/warf)