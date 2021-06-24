import Bootloader from './bootloader.js'
import EscenaLobby from './scenes/EscenaLobby.js'
import MenuPrincipal from './scenes/MenuPrincipal.js'
import scene_Play from './scenes/scene_Play.js'
import EscenaPausa from './scenes/EscenaPausa.js'
import EscenaSonido from './scenes/EscenaSonido.js'
import PantallaFinal from './scenes/PantallaFinal.js'
import SelectorNiveles from './scenes/SelectorNiveles.js'
import lvl_1 from './scenes/lvl_1.js'
import lvl_2 from './scenes/lvl_2.js'
import lvl_3 from './scenes/lvl_3.js'
import lvl_4 from './scenes/lvl_4.js'
import lvl_5 from './scenes/lvl_5.js'
import scene_PlayBORRAR from './scenes/scene_PlayBORRAR.js'
import StartTutorial from './scenes/StartTutorial.js'
import NuevoSelectorNiveles from './scenes/NuevoSelectorNiveles.js'
import Infinitus from './scenes/Infinitus.js'
import SeleccionJugador from './scenes/SeleccionJugador.js'
const config = {
    type: Phaser.CANVAS,
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'container',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 900,
        height: 500
    },
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }

    },
    //QUITAR LA ESCENA DE BORRAR CUANDO SE TERMINEN DE HACER LOS CAMBIOS
    scene: [Bootloader, PantallaFinal, EscenaSonido, EscenaPausa, scene_Play, scene_PlayBORRAR, SeleccionJugador, Infinitus, lvl_5, lvl_4, lvl_3, lvl_2, lvl_1, SelectorNiveles, EscenaLobby, NuevoSelectorNiveles, StartTutorial, MenuPrincipal]
};


new Phaser.Game(config);

OcultarTodo();
