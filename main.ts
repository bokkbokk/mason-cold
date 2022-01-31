enum ActionKind {
    Walking,
    Idle,
    Jumping
}
enum RadioMessage {
    message1 = 49434
}
namespace SpriteKind {
    export const Obstacle = SpriteKind.create()
    export const Button = SpriteKind.create()
    export const Cursor = SpriteKind.create()
    export const Buttonshop = SpriteKind.create()
    export const Money = SpriteKind.create()
    export const backbtn = SpriteKind.create()
    export const settingbtn = SpriteKind.create()
    export const Mudbtn = SpriteKind.create()
    export const backsettingbtn = SpriteKind.create()
    export const gogglebuy = SpriteKind.create()
    export const Goggleremove = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.over(true, effects.blizzard)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Obstacle, function (sprite, otherSprite) {
    cone.destroy()
    scene.cameraShake(5, 5000)
    info.changeScoreBy(-1)
    cone = sprites.create(assets.image`myImage4`, SpriteKind.Obstacle)
    cone.setPosition(randint(0, 120), randint(0, 100))
    pause(5000)
    cone.setPosition(randint(0, 120), randint(0, 100))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Money, function (sprite, otherSprite) {
    shard.destroy(effects.disintegrate, 500)
    Shards += 1
    info.changeScoreBy(5)
    if (Shards < blockSettings.readNumber("Shardstore")) {
        blockSettings.writeNumber("Shardstore", Shards)
    }
})
function settings2 () {
    scene.setTileMap(img`
        3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 
        `)
    scene.setTile(3, img`
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        b b b b b b b b b b b b b b b b 
        `, false)
    Mud = sprites.create(img`
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e f f e e 
        e e e f e f e e f e f e f e f e 
        e e f e f e f e f e f e f f e e 
        e e f e f e f e e f e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        `, SpriteKind.Mudbtn)
    Mud.setPosition(66, 21)
    backsetbtn = sprites.create(img`
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 e e e e e e e e e e e e e e 6 
        6 e f f f f f e e e e e e e e 6 
        6 e f f f f f e e e e e e e e 6 
        6 e f f f f f e e e e e e e e 6 
        6 e f f f e e e e e e e e e e 6 
        6 e f f f e e e e e e e e e e 6 
        6 e f f f f f f f f f f f f e 6 
        6 e f f f f f f f f f f f f e 6 
        6 e f f f f f f f f f f f f e 6 
        6 e f f f e e e e e e e e e e 6 
        6 e f f f e e e e e e e e e e 6 
        6 e f f f f f e e e e e e e e 6 
        6 e f f f f f e e e e e e e e 6 
        6 e f f f f f e e e e e e e e 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        `, SpriteKind.backsettingbtn)
    backsetbtn.setPosition(24, 104)
}
sprites.onOverlap(SpriteKind.Cursor, SpriteKind.Button, function (sprite, otherSprite) {
    Cursor2.destroy()
    Playbutton.destroy()
    shopbtn.destroy()
    Settings.destroy()
    game_define()
})
info.onCountdownEnd(function () {
    info.changeLifeBy(-1)
    info.startCountdown(5)
})
sprites.onOverlap(SpriteKind.Cursor, SpriteKind.backsettingbtn, function (sprite, otherSprite) {
    Cursor2.destroy()
    Mud.destroy()
    backsetbtn.destroy()
    Menu()
})
sprites.onDestroyed(SpriteKind.Money, function (sprite) {
    shardishere = 0
})
function badguy () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 2 . . . 2 . . . . . . 
        . . . . . 2 2 . 2 2 . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . 2 f 2 . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . c c c . . . . . . . 
        . . . f f c c c c c f f . . . . 
        . . . f . c c c c c . f . . . . 
        . . . 2 . c c c c c . 2 . . . . 
        . . . . . c c c c c . . . . . . 
        . . . . . c c c c c . . . . . . 
        . . . . . c . . . c . . . . . . 
        . . . . . c . . . c . . . . . . 
        . . . . 2 2 . . . 2 2 . . . . . 
        `, SpriteKind.Enemy)
    scene.cameraShake(4, 500)
    game.setDialogFrame(img`
        .............9...........
        ..9.......9999.........9.
        .99......999999.......99.
        99ccccccccccccccccccccc9.
        .9cbbbbbbbbbbbbbbbbbbbc9.
        ..cbbbbbbbbbbbbbbbbbbbc9.
        ..cbbbbbbbbbbbbbbbbbbbc..
        ..cbbbbbbbbbbbbbbbbbbbc..
        ..cbbbbbbbbbbbbbbbbbbbc..
        ..cbbbbbbbbbbbbbbbbbbbc..
        ..cbbbbbbbbbbbbbbbbbbbc..
        .9cbbbbbbbbbbbbbbbbbbbc..
        99cbbbbbbbbbbbbbbbbbbbc..
        .9cbbbbbbbbbbbbbbbbbbbc..
        ..cbbbbbbbbbbbbbbbbbbbc..
        ..cbbbbbbbbbbbbbbbbbbbc..
        ..cbbbbbbbbbbbbbbbbbbbc..
        ..cbbbbbbbbbbbbbbbbbbbc..
        ..cbbbbbbbbbbbbbbbbbbbc..
        .9cbbbbbbbbbbbbbbbbbbbc.9
        .9ccccccccccccccccccccc9.
        .99....999...99......999.
        ..9....99.....9........99
        .......................9.
        ..9......................
        `)
    game.setDialogCursor(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f f . . . . . 
        . . . . . . . f 9 9 f . . . . . 
        . . . . . . c 9 f 9 f . . . . . 
        . . . . . . c f 9 f . . . . . . 
        . . . . . c f c c . . . . . . . 
        . . . . . c c . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    game.showLongText("hello i am the evil ratdog man", DialogLayout.Bottom)
    effects.blizzard.startScreenEffect()
}
function mudtime () {
    color.setPalette(
    color.Adventure
    )
}
// To do:
// 
// Fix monehs
// 
// make obstacles
// 
// make enemys
// 
// cosmetics/powerups
function game_define () {
    effects.blizzard.startScreenEffect()
    info.setLife(3)
    scene.setTileMap(img`
        2 3 3 3 3 3 3 3 3 1 
        7 9 9 9 9 9 9 9 9 b 
        7 9 9 9 9 9 9 9 9 b 
        7 9 9 9 9 9 9 9 9 b 
        7 9 9 9 9 9 9 9 9 b 
        7 9 9 9 9 9 9 9 9 b 
        7 9 9 9 9 9 9 9 9 b 
        5 8 8 8 8 8 8 8 8 4 
        f f f f f f f f f f 
        `)
    scene.setTile(9, img`
        9 9 9 9 9 9 9 1 1 9 9 9 1 9 9 1 
        9 9 1 9 9 9 9 1 9 9 9 9 1 9 9 9 
        9 9 1 1 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 1 1 9 9 9 9 9 1 9 
        9 9 9 1 9 9 9 9 9 1 9 9 9 1 9 9 
        9 9 1 1 9 9 9 9 9 9 9 9 1 9 9 9 
        9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 1 9 9 9 9 1 9 9 9 9 1 9 9 9 9 
        9 9 9 9 9 1 1 1 9 9 9 9 1 9 9 9 
        9 9 9 9 1 9 1 1 9 1 9 9 1 1 9 9 
        9 9 9 9 9 9 1 9 9 1 9 1 1 1 9 9 
        9 9 9 9 9 9 9 9 1 9 9 9 1 9 9 9 
        9 9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 
        1 1 1 9 9 9 1 9 9 9 9 9 9 9 1 9 
        9 9 1 9 9 9 9 9 1 1 9 9 9 9 9 1 
        `, false)
    scene.setTile(3, img`
        d b d d d d d b d d d d d b d d 
        d d d d b d d d d d b d d d d b 
        9 9 1 1 d d b d d d d d 9 9 9 9 
        9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 1 1 9 9 9 9 9 1 9 
        9 9 9 1 9 9 9 9 9 1 9 9 9 1 9 9 
        9 9 1 1 9 9 9 9 9 9 9 9 1 9 9 9 
        9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 1 9 9 9 9 1 9 9 9 9 1 9 9 9 9 
        9 9 9 9 9 1 1 1 9 9 9 9 1 9 9 9 
        9 9 9 9 1 9 1 1 9 1 9 9 1 1 9 9 
        9 9 9 9 9 9 1 9 9 1 9 1 1 1 9 9 
        9 9 9 9 9 9 9 9 1 9 9 9 1 9 9 9 
        9 9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 
        1 1 1 9 9 9 1 9 9 9 9 9 9 9 1 9 
        9 9 1 9 9 9 9 9 1 1 9 9 9 9 9 1 
        `, false)
    scene.setTile(8, img`
        9 9 1 9 9 9 9 9 1 1 9 9 9 9 9 1 
        1 1 1 9 9 9 1 9 9 9 9 9 9 9 1 9 
        9 9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 1 9 9 9 1 9 9 9 
        9 d b d d d d d d b d d d 1 9 9 
        d d d d d d b d d d d b d d d d 
        b d d d d d d d d d d d d d b d 
        d d d b d d d d b d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d b d d d d d d d d d 
        d d d d d d d d d d d d d b d d 
        d d b d b d d d b d d d d d d d 
        d d d d b d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d b b d d d 
        d b d d d d d b d d d d d d d d 
        `, false)
    scene.setTile(15, img`
        d d b d d d d d b d d d d d d b 
        b d d d d d b d d d d d d d b d 
        d d d d d d d d d d b d d d d d 
        d d d d d d d d d b b d b d d d 
        d d d d d d d d d d b b d b d d 
        d d d d b d d d d d d d d d d d 
        b d d d d d d d d d d d d d b d 
        d d d d d d d d b d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d b b d d d d d d d b d d d d d 
        d d d d d d b d d d b b d d d d 
        d d d d d d d d d d d d d d d d 
        d d b d d d d d d d d d d d d d 
        d d d d d d d d d d d d b d d d 
        d b d d d d d b d d d d d d d d 
        `, false)
    scene.setTile(7, img`
        d b 9 9 9 9 9 1 1 9 9 9 1 9 9 1 
        d d 1 9 9 9 9 1 9 9 9 9 1 9 9 9 
        b d 1 1 9 9 9 9 9 9 9 9 9 9 9 9 
        d d 9 9 9 9 9 9 1 9 9 9 9 9 9 9 
        d d d 9 9 9 9 1 1 9 9 9 9 9 1 9 
        d d d 1 9 9 9 9 9 1 9 9 9 1 9 9 
        d b d 1 9 9 9 9 9 9 9 9 1 9 9 9 
        d d 1 9 9 9 9 9 9 9 9 9 9 9 9 9 
        d d 9 9 9 9 1 9 9 9 9 1 9 9 9 9 
        d d 9 9 9 1 1 1 9 9 9 9 1 9 9 9 
        d d 9 9 1 9 1 1 9 1 9 9 1 1 9 9 
        d d d 9 9 9 1 9 9 1 9 1 1 1 9 9 
        b d d 9 9 9 9 9 1 9 9 9 1 9 9 9 
        d d d 1 9 9 9 9 9 9 9 9 9 9 9 9 
        d d d 9 9 9 1 9 9 9 9 9 9 9 1 9 
        d b d 9 9 9 9 9 1 1 9 9 9 9 9 1 
        `, false)
    scene.setTile(11, img`
        1 9 9 1 9 9 9 1 1 9 9 9 9 9 b d 
        9 9 9 1 9 9 9 9 1 9 9 9 9 1 d d 
        9 9 9 9 9 9 9 9 9 9 9 9 1 1 d b 
        9 9 9 9 9 9 9 1 9 9 9 9 9 9 d d 
        9 1 9 9 9 9 9 1 1 9 9 9 9 d d d 
        9 9 1 9 9 9 1 9 9 9 9 9 1 d d d 
        9 9 9 1 9 9 9 9 9 9 9 9 1 d b d 
        9 9 9 9 9 9 9 9 9 9 9 9 9 1 d d 
        9 9 9 9 1 9 9 9 9 1 9 9 9 9 d d 
        9 9 9 1 9 9 9 9 1 1 1 9 9 9 d d 
        9 9 1 1 9 9 1 9 1 1 9 1 9 9 d d 
        9 9 1 1 1 9 1 9 9 1 9 9 9 d d d 
        9 9 9 1 9 9 9 1 9 9 9 9 9 d d b 
        9 9 9 9 9 9 9 9 9 9 9 9 1 d d d 
        9 1 9 9 9 9 9 9 9 1 9 9 9 d d d 
        1 9 9 9 9 9 1 1 9 9 9 9 9 d b d 
        `, false)
    scene.setTile(2, img`
        d b d d b d d d d d d b d d d b 
        d d d d d b d d b d d d d d d d 
        b d 1 1 9 9 d d d 9 9 9 d d d d 
        d d 9 9 9 9 9 9 1 9 9 9 9 b d d 
        d d d 9 9 9 9 1 1 9 9 9 9 9 1 9 
        d d d 1 9 9 9 9 9 1 9 9 9 1 9 9 
        d b d 1 9 9 9 9 9 9 9 9 1 9 9 9 
        d d 1 9 9 9 9 9 9 9 9 9 9 9 9 9 
        d d 9 9 9 9 1 9 9 9 9 1 9 9 9 9 
        d d 9 9 9 1 1 1 9 9 9 9 1 9 9 9 
        d d 9 9 1 9 1 1 9 1 9 9 1 1 9 9 
        d d d 9 9 9 1 9 9 1 9 1 1 1 9 9 
        b d d 9 9 9 9 9 1 9 9 9 1 9 9 9 
        d d d 1 9 9 9 9 9 9 9 9 9 9 9 9 
        d d d 9 9 9 1 9 9 9 9 9 9 9 1 9 
        d b d 9 9 9 9 9 1 1 9 9 9 9 9 1 
        `, false)
    scene.setTile(5, img`
        d b d 9 9 9 9 9 1 1 9 9 9 9 9 1 
        d d d 9 9 9 1 9 9 9 9 9 9 9 1 9 
        d d d 1 9 9 9 9 9 9 9 9 9 9 9 9 
        b d d 9 9 9 9 9 1 9 9 9 1 9 9 9 
        d d d 9 9 9 1 9 9 1 9 1 1 1 9 9 
        d d 9 9 1 9 1 1 9 1 9 9 1 1 9 9 
        d d d d d 1 1 b d b d d d 9 9 9 
        d b d b d d d d d d d b d d d b 
        d d d d d b d d b d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d b d d d d d d d b d d d d d 
        d d d d d d b d d d d d d b d d 
        d d d d d d d d d d d d d d d d 
        b d d d d d d d d d d d d d d d 
        d d d d d b d d b d d d d d d d 
        d b d d b d d d d d d b d d d b 
        `, false)
    scene.setTile(4, img`
        1 9 9 9 9 9 1 1 9 9 9 9 9 d b d 
        9 1 9 9 9 9 9 9 9 1 9 9 9 d d d 
        9 9 9 9 9 9 9 9 9 9 9 9 1 d d d 
        9 9 9 1 9 9 9 1 9 9 9 9 9 d d b 
        9 9 1 1 1 9 1 9 9 1 9 9 9 d d d 
        9 9 1 1 9 9 1 9 1 1 9 1 9 9 d d 
        9 9 9 d d d b d b 1 1 d d d d d 
        b d d d b d d d d d d d b d b d 
        d d d d d d d b d d b d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d b d d d d d d d b d d 
        d d b d d d d d d b d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d b 
        d d d d d d d b d d b d d d d d 
        b d d d b d d d d d d b d d b d 
        `, false)
    scene.setTile(1, img`
        b d d d b d d d d d d b d d b d 
        d d d d d d d b d d b d d d d d 
        d d d d 9 9 9 d d d 9 9 1 1 d b 
        d d b 9 9 9 9 1 9 9 9 9 9 9 d d 
        9 1 9 9 9 9 9 1 1 9 9 9 9 d d d 
        9 9 1 9 9 9 1 9 9 9 9 9 1 d d d 
        9 9 9 1 9 9 9 9 9 9 9 9 1 d b d 
        9 9 9 9 9 9 9 9 9 9 9 9 9 1 d d 
        9 9 9 9 1 9 9 9 9 1 9 9 9 9 d d 
        9 9 9 1 9 9 9 9 1 1 1 9 9 9 d d 
        9 9 1 1 9 9 1 9 1 1 9 1 9 9 d d 
        9 9 1 1 1 9 1 9 9 1 9 9 9 d d d 
        9 9 9 1 9 9 9 1 9 9 9 9 9 d d b 
        9 9 9 9 9 9 9 9 9 9 9 9 1 d d d 
        9 1 9 9 9 9 9 9 9 1 9 9 9 d d d 
        1 9 9 9 9 9 1 1 9 9 9 9 9 d b d 
        `, false)
    scene.setBackgroundColor(1)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . f f f f . . 
        . . . . . . . . . f f . . . . . 
        . f . . . . . . f f . . . . . . 
        . f . . . . f f . f . . . . . . 
        . f f . . . . f . f . . . . . . 
        . . f . . f . f f f f f . . . . 
        . . f f f . . . f f . f . . . . 
        . . . . . . . f f f . f . . . . 
        . . . . . . f f . f . . f . . . 
        . . . . . . f . . f . . f f f f 
        . . . . . . . . . f . . . . f f 
        . . . . . . . . . f . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    mason = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f c c f . . . . . . 
        . . . . . . c d d c . . . . . . 
        . . . . . . c d d c . . . . . . 
        . . . . . c c c c c c . . . . . 
        . . . . c c c c c c c c . . . . 
        . . . . c . c c c c . c . . . . 
        . . . . c . c c c c . c . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    cone = sprites.create(assets.image`myImage4`, SpriteKind.Obstacle)
    shopbtn = sprites.create(img`
        ..............................
        ...............ddd............
        ........ddd....ddddd..........
        ....dddddddddddddddddddd......
        .ddddddddddddddddddddddd...ddd
        dddddddddddddddddddddddddddddd
        dddddddddddddddddddddddbdddddd
        dddbddddddddbddddbdddddddddddd
        dddddddddddddddddddddddddddddd
        ddffffdddddddddddddddffffddddd
        ddfddddfddddfffffddddfddfddddd
        ddfddddfddddfdddfddddfddfddddd
        ddffffdfddddfdddfddddffffddddd
        bddddfdfddddfdddfddddfdddddddd
        dddddfdffffdfffffddddfdddddddd
        ddffffdfddfddddddddddfdddddddd
        dddddddfddfddddddddddfdddddddd
        dddddddfddfddddddddddddddddddd
        dddddddddddddddddddddddddddddd
        ddddddddddddddddddddbddddddbdd
        dddddddddddddddddddddddddddddd
        ..dddddddddddddddddddddddddd..
        ...dddddbdddddddddddddddddd...
        ...ddddddddddddddddd....ddd...
        ....ddddd.dddd.ddddd....dddd..
        .d..dd.dd..dd....d.......ddd..
        ..............................
        ..............................
        ..............................
        ..............................
        `, SpriteKind.Buttonshop)
    shopbtn.setPosition(30, 130)
    cone.setPosition(23, 73)
    mason.setStayInScreen(true)
    controller.moveSprite(mason)
}
function shop () {
    isfirst = 0
    scene.setTileMap(img`
        7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 
        7 f 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 
        `)
    scene.setTile(7, img`
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 e e e e e e e e e e e e e e 6 
        6 e e e e e e e e e e e e e e 6 
        6 e e e e e e e e e e e e e e 6 
        6 e e e e e e e e e e e e e e 6 
        6 e e e e e e e e e e e e e e 6 
        6 e e e e e e e e e e e e e e 6 
        6 e e e e e e e e e e e e e e 6 
        6 e e e e e e e e e e e e e e 6 
        6 e e e e e e e e e e e e e e 6 
        6 e e e e e e e e e e e e e e 6 
        6 e e e e e e e e e e e e e e 6 
        6 e e e e e e e e e e e e e e 6 
        6 e e e e e e e e e e e e e e 6 
        6 e e e e e e e e e e e e e e 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        `, false)
    Goggle = sprites.create(assets.image`myImage1`, SpriteKind.gogglebuy)
    Goggle.setPosition(25, 26)
    Backbtn = sprites.create(img`
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 e e e e e e e e e e e e e e 6 
        6 e f f f f f e e e e e e e e 6 
        6 e f f f f f e e e e e e e e 6 
        6 e f f f f f e e e e e e e e 6 
        6 e f f f e e e e e e e e e e 6 
        6 e f f f e e e e e e e e e e 6 
        6 e f f f f f f f f f f f f e 6 
        6 e f f f f f f f f f f f f e 6 
        6 e f f f f f f f f f f f f e 6 
        6 e f f f e e e e e e e e e e 6 
        6 e f f f e e e e e e e e e e 6 
        6 e f f f f f e e e e e e e e 6 
        6 e f f f f f e e e e e e e e 6 
        6 e f f f f f e e e e e e e e 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        `, SpriteKind.backbtn)
    Backbtn.setPosition(24, 104)
}
info.onLifeZero(function () {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    icebreak()
    if (randint(0, 6) == 1) {
        shard = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 3 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 3 . . 9 . 3 . . . . . 
            . . . . . . . 6 9 . . . . . . . 
            . . . 3 . . 6 9 9 . . . . . . . 
            . . . . . 8 9 9 6 . . . . . . . 
            . . . . . . 6 9 9 . . . . . . . 
            . . . 3 . . . 8 . . 3 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 3 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Money)
        shard.setPosition(randint(0, 120), randint(0, 100))
    }
})
function Menu () {
    scene.setTileMap(img`
        3 9 5 5 5 3 5 9 9 9 
        3 3 3 5 3 5 5 5 9 5 
        3 5 3 5 5 9 5 9 9 9 
        3 3 3 5 9 5 5 9 9 3 
        5 3 9 5 5 5 3 9 9 9 
        3 3 3 5 5 5 5 9 9 9 
        3 5 3 5 5 9 5 9 9 5 
        3 3 3 3 5 5 5 9 9 9 
        `)
    scene.setTile(3, img`
        9 9 1 9 9 9 9 9 1 1 9 9 9 9 9 1 
        1 1 1 9 9 9 1 9 9 9 9 9 9 9 1 9 
        9 9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 1 9 9 9 1 9 9 9 
        9 9 9 9 9 9 1 9 9 1 9 1 1 1 9 9 
        9 9 9 9 1 9 1 1 9 1 9 9 1 1 9 9 
        9 9 9 9 9 1 1 1 9 9 9 9 1 9 9 9 
        9 1 9 9 9 9 1 9 9 9 9 1 9 9 9 9 
        9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 1 1 9 9 9 9 9 9 9 9 1 9 9 9 
        9 9 9 1 9 9 9 9 9 1 9 9 9 1 9 9 
        9 9 9 9 9 9 9 1 1 9 9 9 9 9 1 9 
        9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 
        9 9 1 1 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 1 9 9 9 9 1 9 9 9 9 1 9 9 9 
        9 9 9 9 9 9 9 1 1 9 9 9 1 9 9 1 
        `, false)
    scene.setTile(9, img`
        9 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 1 9 9 9 9 9 1 9 9 9 9 9 9 9 9 
        1 1 9 9 9 9 9 9 1 1 9 9 9 1 1 9 
        9 9 1 9 9 9 9 9 9 1 1 9 9 1 9 9 
        9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 
        9 1 9 9 1 1 1 1 9 9 9 9 9 9 9 9 
        9 9 9 9 9 1 1 9 9 9 9 1 9 9 1 1 
        1 9 9 1 9 9 9 9 9 9 9 1 1 9 9 1 
        1 9 9 9 1 1 9 9 9 9 1 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 1 9 9 1 9 9 9 9 9 9 9 9 
        9 9 9 1 1 1 1 9 9 1 9 9 9 9 1 1 
        9 9 9 9 1 1 9 9 9 9 1 9 9 9 9 9 
        9 1 9 9 9 9 9 9 9 9 9 1 9 9 9 9 
        1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 
        `, false)
    scene.setTile(5, img`
        9 9 9 9 9 9 9 1 1 9 9 9 1 9 9 1 
        9 9 1 9 9 9 9 1 9 9 9 9 1 9 9 9 
        9 9 1 1 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 1 1 9 9 9 9 9 1 9 
        9 9 9 1 9 9 9 9 9 1 9 9 9 1 9 9 
        9 9 1 1 9 9 9 9 9 9 9 9 1 9 9 9 
        9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 1 9 9 9 9 1 9 9 9 9 1 9 9 9 9 
        9 9 9 9 9 1 1 1 9 9 9 9 1 9 9 9 
        9 9 9 9 1 9 1 1 9 1 9 9 1 1 9 9 
        9 9 9 9 9 9 1 9 9 1 9 1 1 1 9 9 
        9 9 9 9 9 9 9 9 1 9 9 9 1 9 9 9 
        9 9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 
        1 1 1 9 9 9 1 9 9 9 9 9 9 9 1 9 
        9 9 1 9 9 9 9 9 1 1 9 9 9 9 9 1 
        `, false)
    Playbutton = sprites.create(img`
        ..............................
        ...............ddd............
        ........ddd....ddddd..........
        ....dddddddddddddddddddd......
        .ddddddddddddddddddddddd...ddd
        dddddddddddddddddddddddddddddd
        dddddddddddddddddddddddbdddddd
        dddbddddddddbddddbdddddddddddd
        dddfffdddddddddddddddddddddddd
        dddfdfdddddddddddddddddddddddd
        dddfffdbdddddddffdddfdddddfddd
        dddfdddddddddddfffdddfdddfdddd
        dddfdddfddddddffdfddddfdfddddd
        bddfdddfddddddfddfdddddfdddddd
        dddfdddfdddddffddfdddddfdddddd
        dddfdddfdddddffffffddddfdddddd
        dddfdddfdddddfddddfddddfdddddd
        dddfdddfffddffddddffdddfdddddd
        dddddddddddddddddddddddddddddd
        ddddddddddddddddddddbddddddbdd
        dddddddddddddddddddddddddddddd
        ..dddddddddddddddddddddddddd..
        ...dddddbdddddddddddddddddd...
        ...ddddddddddddddddd....ddd...
        ....ddddd.dddd.ddddd....dddd..
        .d..dd.dd..dd....d.......ddd..
        ..............................
        ..............................
        ..............................
        ..............................
        `, SpriteKind.Button)
    Playbutton.setPosition(24, 66)
    Cursor2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f f . . . . . 
        . . . . . . . f 9 9 f . . . . . 
        . . . . . . c 9 f 9 f . . . . . 
        . . . . . . c f 9 f . . . . . . 
        . . . . . c f c c . . . . . . . 
        . . . . . c c . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Cursor)
    controller.moveSprite(Cursor2, 150, 150)
    Cursor2.setStayInScreen(true)
    shopbtn = sprites.create(img`
        ..............................
        ...............ddd............
        ........ddd....ddddd..........
        ....dddddddddddddddddddd......
        .ddddddddddddddddddddddd...ddd
        dddddddddddddddddddddddddddddd
        dddddddddddddddddddddddbdddddd
        dddbddddddddbddddbdddddddddddd
        dddddddddddddddddddddddddddddd
        ddffffdddddddddddddddffffddddd
        ddfddddfddddfffffddddfddfddddd
        ddfddddfddddfdddfddddfddfddddd
        ddffffdfddddfdddfddddffffddddd
        bddddfdfddddfdddfddddfdddddddd
        dddddfdffffdfffffddddfdddddddd
        ddffffdfddfddddddddddfdddddddd
        dddddddfddfddddddddddfdddddddd
        dddddddfddfddddddddddddddddddd
        dddddddddddddddddddddddddddddd
        ddddddddddddddddddddbddddddbdd
        dddddddddddddddddddddddddddddd
        ..dddddddddddddddddddddddddd..
        ...dddddbdddddddddddddddddd...
        ...ddddddddddddddddd....ddd...
        ....ddddd.dddd.ddddd....dddd..
        .d..dd.dd..dd....d.......ddd..
        ..............................
        ..............................
        ..............................
        ..............................
        `, SpriteKind.Buttonshop)
    shopbtn.setPosition(119, 66)
    Settings = sprites.create(img`
        ..............................
        ...............ddd............
        ........ddd....ddddd..........
        ....dddddddddddddddddddd......
        .ddddddddddddddddddddddd...ddd
        dddddddddddddfffdddddddddddddd
        dddddddddddddfffdddddddbdddddd
        dddbddddddddbfffdbdddddddddddd
        dddddddddddfffffffdddddddddddd
        ddddddddddfdddddddfddddddddddd
        dddddddddfdddddddddfdddddddddd
        dddddddddfddfffffddfdddddddddd
        ddddddffffddfdddfddffffddddddd
        bdddddffffddfdddfddffffddddddd
        ddddddffffddfdddfddffffddddddd
        dddddddddfddfffffddfdddddddddd
        dddddddddfdddddddddfdddddddddd
        ddddddddddfdddddddfddddddddddd
        dddddddddddfffffffdddddddddddd
        dddddddddddddfffddddbddddddbdd
        dddddddddddddfffdddddddddddddd
        ..dddddddddddfffdddddddddddd..
        ...dddddbdddddddddddddddddd...
        ...ddddddddddddddddd....ddd...
        ....ddddd.dddd.ddddd....dddd..
        .d..dd.dd..dd....d.......ddd..
        ..............................
        ..............................
        ..............................
        ..............................
        `, SpriteKind.settingbtn)
    Settings.setPosition(72, 34)
}
sprites.onOverlap(SpriteKind.Cursor, SpriteKind.backbtn, function (sprite, otherSprite) {
    Cursor2.destroy()
    Backbtn.destroy()
    Goggle.destroy()
    Menu()
})
function start () {
    scene.setBackgroundImage(img`
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbdddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbdddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbdddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbdddddddddddddddddddddddddddddddddddddddddddddddd
        dddddbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbdddddddddddddddddddddddddddddddddddddddddddddddd
        dddddbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbddddddd
        dddddddddddddddddddddfffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbddddddd
        dddddddddddddddddddddfffffffffddddddddddddddddddddddddddddddddddddddddddddddddddffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbddddddd
        ddddddddddddddddddddffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbddddddd
        dddddddddddddddddddffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddfffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbddddddd
        dddddddddddddddddddffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddfffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddffffffffffffffffffffffffffddddddffffffffffddddddddddddddddddffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddfffffffddfffffffffffffffffddddddfffffffffffdddddddddddddddddffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddffffffffddfffffffffdddfffffdddddffffffffffffddddddddddddddddfffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddfffffffdddfffffffdddddfffffdddddfffffffffffffdddddddddddddddfffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddfffffffdddfffffffddddddfffffdddddfffffffffffffdddddddddddddddffffffdddddddddddddddddddddddddddddddddddddddddddddffffffffffddddddddddddddddddddddd
        ddddddddddddddffffffffdddfffffffddddddfffffdddddffffffdfffffffddddddddddddddffffffddddddddddddddddddddddddddddddddddddddddddddffffffffffffdddddddddddddddddddddd
        ddddddddddddddfffffffddddffffffdddddddfffffdddddfffffddfffffffddddddddddddddffffffdddddddddddddddddddddddddddddddddddddddddddfffffffffffffdddddddddddddddddddddd
        ddddddddddddddfffffffddddffffffdddddddfffffdddddfffffdddfffffffdddddddddddddfffffffddddddddddddddddddddddddddddddddddddddddddfffffffffffffdddddddddddddddddddddd
        ddddddddddddddffffffdddddffffffddddddffffffdddddfffffdddffffffffddddddddddddffffffffddddddddddddffffffffffffddddddddddddddddfffffffffffffffddddddddddddddddddddd
        ddddddddddddddfffffddddddffffffddddddffffffdddddfffffdddfffffffffdddddddddddfffffffffdddddddddffffffffffffffffddddddddddddddfffffffffffffffddddddddddddddddddddd
        ddddddddddddddfffffddddddfffffdddddddffffffdddddfffffdddfffffffffddddddddddddffffffffddddddddfffffffffffffffffdddddddddddddfffffffdddffffffddddddddddddddddddddd
        ddddddddddddddfffffdddddddddddddddddfffffffdddddffffffddffffffffffddddddddddddffffffffddddddffffffffffffffffffdddddddddddddfffffffdddfffffffdddddddddddddddddddd
        ddddddddddddddfffffdddddddddddddddddffffffddddddfffffffdfffffffffffddddddddddddfffffffdddddfffffffffffffffffffdddddddddddddffffffdddddffffffdddddddddddddddddddd
        ddddddddddddddfffffdddddddddddddddddffffffddddddfffffffdfffffffffffffdddddddddddffffffddddffffffffffdddddfffffdddddddddddddffffffdddddffffffdddddddddddddddddddd
        ddddddddddddddfffffdddddddddddddddddffffffddddddfffffffffffffffffffffdddddddddddffffffdddfffffffffdddddddfffffdddddddddddddfffffddddddffffffdddddddddddddddddddd
        ddddddddddddddfffffdddddddddddddddddffffffdddddddfffffffffffffffffffffdddddddddddfffffdddffffffffddddddddfffffdddddddddddddfffffdddddddffffffddddddddddddddddddd
        ddddddddddddddfffffdddddddddddddddddfffffbdddddddffffffffffffdffffffffdddddddddddfffffdddfffffffdddddddddfffffdddddddddddddfffffdddddddffffffddddddddddddddddddd
        ddddddddddddddfffffddddddddddddddddddbbbbbddddddddfffffffffffddfffffffdddddddddddfffffdddffffffddddddddddffffffddddddddddddfffffdddddddffffffddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffdddffffffddddffffffffffffdddfffffdddddddddddffffffddddddddddddfffffdddddddffffffddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffddddffffffdddfffffffffffffdddfffffdddddddddddffffffddddddddddddfffffddddddddfffffddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddfffffffffffffdddfffffdddddddddddffffffddddddddddddfffffddddddddfffffddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffdddffffffdddddddddddfffffddddddddddddfffffddddddddfffffddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffdddfffffffddddddddddfffffddddddddddddfffffddddddddfffffddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddffffffffdddddddddfffffddddddddddddfffffddddddddfffffddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffddddddddfffffddddddddddddfffffddddddddfffffddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffddddddffffffddddddddddddfffffddddddddfffffddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffddddfffffffddddddddddddfffffddddddddfffffddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffddddddddddddfffffddddddddfffffddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddfffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddfffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddfffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddffffffffdddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddffffffffdddddddddddddddddddddffffffdddddddddddddddddddddddddddddddddddfffffffffdddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddfffffffdddddddddddddddddddddfffffffdddddddddddddddddddddddddddddddddddfffffffffffffffdddddddddddddddddfffffddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddffffffddddddddddddddddddddddfffffffdddddddddddddddddddddddddddddddddddfffffffffffffffffdddddddddddddddfffffddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddffffffddddddddddddddddddddddffffffffffddddddddddddddddddddddddddddddddffffffffffffffffffddddddddddddddfffffddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddfffffdddddddddddddddddddddddffffffffffffddddddddddddddddddddddddddddddfffffffffffffffffffdddddddddddddfffffddddddddddddddddddddddddddddddddddddd
        dddddddddddddddffffffdddddddddddddddddddddddfffffffffffffffdddddddddddddddddddddddddddddffffffffffffffffffddddddddddddfffffddddddddddddddddddddddddddddddddddddd
        dddddddddddddddffffffdddddddddddddddddddddddfffffffffffffffffdddddddddddddfffffdddddddddfffffdddfffffffffffdddddddddddfffffddddddddddddddddddddddddddddddddddddd
        dddddddddddddddffffffdddddddddddddddddddddddffffffffffffffffffffddddddddddfffffdddddddddfffffdddddfffffffffdddddddddddfffffddddddddddddddddddddddddddddddddddddd
        ddddddddddddddfffffffdddddddddddddddddddddddfffffffffffffffffffffdddddddddfffffdddddddddfffffddddddffffffffdddddddddddfffffddddddddddddddddddddddddddddddddddddd
        ddddddddddddddffffffddddddddddddddddddddddddfffffddfffffffffffffffddddddddfffffdddddddddfffffdddddddfffffffdddddddddddfffffddddddddddddddddddddddddddddddddddddd
        ddddddddddddddffffffddddddddddddddddddddddddfffffddddddfffffffffffddddddddffffffddddddddffffffddddddddfffffdddddddddddfffffddddddddddddddddddddddddddddddddddddd
        ddddddddddddddffffffddddddddddddddddddddddddfffffddddddddfffffffffddddddddffffffddddddddffffffddddddddfffffdddddddddddfffffddddddddddddddddddddddddddddddddddddd
        dddddddddddddffffffdddddddddddddddddddddddddfffffdddddddddddffffffddddddddffffffddddddddfffffffdddddddfffffdddddddddddfffffddddddddddddddddddddddddddddddddddddd
        dddddddddddddffffffdddddddddddddddddddddddddfffffddddddddddddfffffddddddddffffffddddddddfffffffdddddddfffffdddddddddddfffffddddddddddddddddddddddddddddddddddddd
        dddddddddddddffffffdddddddddddddddddddddddddfffffddddddddddddfffffddddddddfffffffddddddddffffffdddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddffffffdddddddddddddddddddddddddfffffddddddddddddfffffdddddddddffffffddddddddfffffffddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddfffffddddddddddddddddddddddddddfffffdddddddddddffffffdddddddddffffffdddddddddffffffddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddfffffffddddddddddddddddddddddddffffffddddddddddffffffdddddddddffffffdddddddddffffffddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddffffffffffdddddddddddddddddddddffffffdddddddddfffffffddddddddddfffffdddddddddfffffffdddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddfffffffffffffffddddddddddddddddfffffffdddddddffffffffddddddddddfffffddddddddddffffffdddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddfffffffffffffffffffffddddddddddffffffffdddddffffffffdddddddddddfffffddddddddddffffffddddffffffddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddfffffffffffffffffffffdddddddddddffffffffffdfffffffffdddddddddddfffffddddddddddffffffddddffffffdddddddddddfffffffddddddddddddddddddddddddddddddddddd
        dddddddddddddddfffffffffffffffffffdddddddddddfffffffffffffffffffddddddddddddffffffddddddddddffffffddfffffffdddddddddddfffffffddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddffffffffffffffffddddddddddddfffffffffffffffffdddddddddddddffffffddddddddddffffffddfffffffdddddddddddfffffffddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddffffffffffddddddddbbbbbffffffffffffffffdddddddddddddffffffddddddddddffffffffffffffddddddddddddfffffffddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddbbbbbdffffffffffffffddddddddddddddffffffddddddddddffffffffffffffddddddddddddfffffffddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddbbbbbdddfffffffffffddddddddddddddddfffffdddddddddddffffffffffffdddddddddddddfffffffddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddbbbbbddddddddddddddddddddddddddddddfffffdddddddddddffffffffffffdddddddddddddfffffffddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddbbbbbddddddddddddddddddddddddddddddfffffddddddddddffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffddddddddddffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffddddddddddffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffddddddddddfffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffddddddddddffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        `)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Buttonshop, function (sprite, otherSprite) {
    info.stopCountdown()
    info.setScore(0)
    mySprite.destroy()
    if (shardishere == 1) {
        shard.destroy()
    }
    mason.destroy()
    shopbtn.destroy()
    cone.destroy()
    Cursor2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f f . . . . . 
        . . . . . . . f 9 9 f . . . . . 
        . . . . . . c 9 f 9 f . . . . . 
        . . . . . . c f 9 f . . . . . . 
        . . . . . c f c c . . . . . . . 
        . . . . . c c . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Cursor)
    controller.moveSprite(Cursor2)
    effects.blizzard.endScreenEffect()
    shop()
})
sprites.onCreated(SpriteKind.Money, function (sprite) {
    shardishere = 1
})
function icebreak () {
    info.stopCountdown()
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f . . f . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . f f f . . . f f f . . 
        . . . . f f . f f f . . f . . . 
        . . . f f . . . . f f . . . . . 
        . f f f . . . . . . f f f f f . 
        . . . . . . . . . . . . . . f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 9 9 . . . . . . . . 
        . . . . 9 9 8 8 9 . . . . . . . 
        . . . . 8 9 8 8 9 . 9 . . . . . 
        . . 9 9 8 8 8 8 8 8 8 9 . . . . 
        . 9 8 8 8 8 8 8 8 8 8 9 . . . . 
        . 9 8 8 8 8 8 8 8 8 8 . . . . . 
        . 9 8 8 8 8 8 8 8 8 8 f . . . . 
        . . 9 8 8 f 8 8 8 8 8 f f f . . 
        . . . 9 f f 9 f 8 8 8 . f . . . 
        . . . f f . . . . f f . . . . . 
        . f f f . . . . . . f f f f f . 
        . . . . . . . . . . . . . . f . 
        `,img`
        . 9 9 . 9 . . . . . . . . . . . 
        . 9 8 8 9 . . . . . . 9 9 8 . . 
        . 9 8 8 8 . 9 9 . . . 9 8 8 . . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 
        9 8 9 8 8 8 8 8 8 8 8 8 8 8 8 9 
        . 9 . 9 8 8 9 8 8 8 8 8 8 8 9 . 
        . . . 9 8 8 8 8 8 8 8 8 8 . . . 
        . . . 9 8 8 8 8 8 8 8 8 8 9 . . 
        . . . 9 8 8 8 8 8 8 8 8 9 . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 f f . . 
        . . . . 8 8 8 8 8 8 8 8 f . . . 
        . . . f f 8 8 8 8 8 8 8 . . . . 
        . f f f . . . . . . . f f f f . 
        . . . . . . . . . . . . . . f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 9 9 . . . . 
        . . . . . . . 9 . 9 8 8 9 . . . 
        . . . . . . 9 8 8 8 8 8 9 . . . 
        . . . . 9 8 8 8 8 8 8 8 8 8 8 9 
        . . . 9 8 8 9 8 8 8 8 8 8 8 9 . 
        . . . 9 8 8 8 8 8 8 8 8 8 . . . 
        . . . 9 8 8 8 8 8 8 8 8 8 9 . . 
        . . . 9 8 8 8 8 8 8 8 8 9 . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 f f . . 
        . . . . 8 8 8 8 8 8 8 8 f . . . 
        . . . f f 8 8 8 8 8 8 8 . . . . 
        . f f f . . . . . . . f f f f . 
        . . . . . . . . . . . . . . f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f c f . . . . . . 
        . . . f f c f c 8 8 c . . . . . 
        . . . f c 8 8 8 8 8 f f . . . . 
        . . . f c 8 8 8 8 8 . f f f . . 
        . . . . f 8 8 8 8 8 . . f . . . 
        . . . f f . 8 8 8 8 f . . . . . 
        . f f f . . . . . . f f f f f . 
        . . . . . . . . . . . . . . f . 
        `],
    200,
    false
    )
    pause(1000)
    info.changeScoreBy(1)
    mySprite.setPosition(randint(0, 120), randint(0, 100))
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f . . f . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . f f f . . . f f f . . 
        . . . . f f . f f f . . f . . . 
        . . . f f . . . . f f . . . . . 
        . f f f . . . . . . f f f f f . 
        . . . . . . . . . . . . . . f . 
        `],
    500,
    false
    )
    info.startCountdown(5)
}
sprites.onOverlap(SpriteKind.Cursor, SpriteKind.Buttonshop, function (sprite, otherSprite) {
    Playbutton.destroy()
    shopbtn.destroy()
    Settings.destroy()
    shop()
})
sprites.onOverlap(SpriteKind.Cursor, SpriteKind.settingbtn, function (sprite, otherSprite) {
    settings2()
    Playbutton.destroy()
    shopbtn.destroy()
    Settings.destroy()
})
sprites.onOverlap(SpriteKind.Cursor, SpriteKind.Mudbtn, function (sprite, otherSprite) {
    mudtime()
})
function music2 () {
    for (let index = 0; index < 696969; index++) {
        music.playMelody("D D E F A E F G ", 276)
    }
}
let Backbtn: Sprite = null
let Goggle: Sprite = null
let isfirst = 0
let mason: Sprite = null
let mySprite: Sprite = null
let mySprite2: Sprite = null
let shardishere = 0
let Settings: Sprite = null
let shopbtn: Sprite = null
let Playbutton: Sprite = null
let Cursor2: Sprite = null
let backsetbtn: Sprite = null
let Mud: Sprite = null
let Shards = 0
let shard: Sprite = null
let cone: Sprite = null
start()
pause(1000)
Menu()
forever(function () {
    scene.cameraFollowSprite(mason)
    characterAnimations.loopFrames(
    mason,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f c c f . . . . . . 
        . . . . . . c d d c . . . . . . 
        . . . . . . c d d c . . . . . . 
        . . . . c c c c c c c c . . . . 
        . . . . c . c c c c . c . . . . 
        . . . . c . c c c c . c . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . . . . c . . . . . . 
        . . . . . . . . . c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f c c f . . . . . . 
        . . . . . . c d d c . . . . . . 
        . . . . . . c d d c . . . . . . 
        . . . . c c c c c c c c . . . . 
        . . . . c . c c c c . c . . . . 
        . . . . c . c c c c . c . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . . . . . . . . 
        . . . . . . c . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.Moving)
    )
    characterAnimations.loopFrames(
    mason,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f c c f . . . . . . 
        . . . . . . c d d c . . . . . . 
        . . . . . . c d d c . . . . . . 
        . c c c . c c c c c c c . . . . 
        . . . c c c c c c c . c . . . . 
        . . . . . . c c c c . c . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f c c f . . . . . . 
        . . . . . . c d d c . . . . . . 
        . . . . . . c d d c . . . . . . 
        . c c . c c c c c c c c . . . . 
        . . c c c . c c c c . c . . . . 
        . . . . . . c c c c . c . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f c c f . . . . . . 
        . . . . . . c d d c . . . . . . 
        . . . . . . c d d c . . . . . . 
        . c . c c c c c c c c c . . . . 
        . c c c . . c c c c . c . . . . 
        . . . . . . c c c c . c . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f c c f . . . . . . 
        . . . . . . c d d c . . . . . . 
        . . . c c c c d d c . . . . . . 
        . c c c . c c c c c c c . . . . 
        . . . . . . c c c c . c . . . . 
        . . . . . . c c c c . c . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f c c f . . . . . . 
        . . . . . . c d d c . . . . . . 
        . . c c c . c d d c . . . . . . 
        . c c . c c c c c c c c . . . . 
        . . . . . . c c c c . c . . . . 
        . . . . . . c c c c . c . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f c c f . . . . . . 
        . . . . . . c d d c . . . . . . 
        . c c c . . c d d c . . . . . . 
        . c . c c c c c c c c c . . . . 
        . . . . . . c c c c . c . . . . 
        . . . . . . c c c c . c . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f c c f . . . . . . 
        . . . . . . c d d c . . . . . . 
        . . . . . . c d d c . . c c c . 
        . . . . c c c c c c c c c . c . 
        . . . . c . c c c c . . . . . . 
        . . . . c . c c c c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f c c f . . . . . . 
        . . . . . . c d d c . . . . . . 
        . . . . . . c d d c . c c c . . 
        . . . . c c c c c c c c . c c . 
        . . . . c . c c c c . . . . . . 
        . . . . c . c c c c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f c c f . . . . . . 
        . . . . . . c d d c . . . . . . 
        . . . . . . c d d c c c c . . . 
        . . . . c c c c c c c . c c c . 
        . . . . c . c c c c . . . . . . 
        . . . . c . c c c c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f c c f . . . . . . 
        . . . . . . c d d c . . . . . . 
        . . . . . . c d d c . . . . . . 
        . . . . c c c c c c c . c c c . 
        . . . . c . c c c c c c c . . . 
        . . . . c . c c c c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f c c f . . . . . . 
        . . . . . . c d d c . . . . . . 
        . . . . . . c d d c . . . . . . 
        . . . . c c c c c c c c . c c . 
        . . . . c . c c c c . c c c . . 
        . . . . c . c c c c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f c c f . . . . . . 
        . . . . . . c d d c . . . . . . 
        . . . . . . c d d c . . . . . . 
        . . . . c c c c c c c c c . c . 
        . . . . c . c c c c . . c c c . 
        . . . . c . c c c c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.NotMoving)
    )
})
forever(function () {
	
})
