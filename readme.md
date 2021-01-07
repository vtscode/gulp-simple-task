# Running

- yarn global add gulp-cli
- yarn install

See the package.json for running gulp command

for running <b>default</b> task type 
```sh
gulp
```
for running <b>server</b> task type 
```sh
gulp server
```
for running <b>build</b> task type 
```sh
gulp build
```
- gulp-connect : livereload and making server
- task <b>watch</b> : for watching changing css,js,html.
  
Untuk melakukan minify, kita membutuhkan beberapa modul:

    gulp-htmlmin untuk minify file HTML;
    gulp-minify-css untuk minify file CSS;
    gulp-uglify untuk minify fule Javascript;
    gulp-concat untuk menggabungkan beberapa file javascript.

Untuk melakukan build dan clean proyek dengan Gulp, kita membutuhkan dua modul:

    gulp-clean untuk menghapus hasil build;
    dan gulp-sequence untuk menjalankan task secara berurutan (kita akan menggunakan gulp.series()).

Kita hanya perlu menginstal gulp-clean saja, karena gulp-sequence bisa digantikan dengan fungsi series().