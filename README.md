[![Build status](https://ci.appveyor.com/api/projects/status/j0khiapxc9d22g1y?svg=true)](https://ci.appveyor.com/project/Tryd0g0lik/dom-netologe-g28hn)
[![Build status](https://ci.appveyor.com/api/projects/status/j0khiapxc9d22g1y/branch/master?svg=true)](https://ci.appveyor.com/project/Tryd0g0lik/dom-netologe-g28hn/branch/master)


### Перемещение элемента

Решил развлечься и реализовать некое подобие игры, где гномы (или другие существа), выскакивают из "отверстий" и по ним нужно бить молотком:

Copyright gfycat.com

#### Описание

Собераня инфраструктура проекта на базе Webpack, ESLint, Babel, Jest, Webpack Dev Server.

Реализовано лишь - перемещение объекта в DOM Tree.
Игровое поле 4x4 и персонажа в виде картинки `img` (при загрузке страницы должен программно генерироваться и ставиться в рандомную позицию внутри игрового поля). 
С помощью функции `setInterval` запланировано перемещение существующего объекта `img` в другое поле (алгоритм - рандомное перемещение, без перемещения в то же самое поле).

Всё собирается через Webpack (включая картинки и стили).
