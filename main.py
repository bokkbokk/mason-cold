class ActionKind(Enum):
    Walking = 0
    Idle = 1
    Jumping = 2
@namespace
class SpriteKind:
    Obstacle = SpriteKind.create()

def on_b_pressed():
    pass
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_a_pressed():
    badguy()
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_countdown_end():
    info.change_life_by(-1)
    info.start_countdown(5)
info.on_countdown_end(on_countdown_end)

def game_define():
    global mySprite, mason
    effects.blizzard.start_screen_effect()
    color.set_palette(color.original_palette)
    info.set_life(3)
    scene.set_tile_map(img("""
        2 3 3 3 3 3 3 3 3 1 
                7 9 9 9 9 9 9 9 9 b 
                7 9 9 9 9 9 9 9 9 b 
                7 9 9 9 9 9 9 9 9 b 
                7 9 9 9 9 9 9 9 9 b 
                7 9 9 9 9 9 9 9 9 b 
                7 9 9 9 9 9 9 9 9 b 
                5 8 8 8 8 8 8 8 8 4
    """))
    scene.set_tile(9,
        img("""
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
        """),
        False)
    scene.set_tile(3,
        img("""
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
        """),
        False)
    scene.set_tile(8,
        img("""
            9 9 1 9 9 9 9 9 1 1 9 9 9 9 9 1 
                    1 1 1 9 9 9 1 9 9 9 9 9 9 9 1 9 
                    9 9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 
                    9 9 9 9 9 9 9 9 1 9 9 9 1 9 9 9 
                    9 d b d d d d d d b d d d 1 9 9 
                    d d d d d d b d d d d b d d d d 
                    b d d d d d d d d d d d d d b d 
                    d d d b d d d d b d d d d d d d 
                    d d d d d d d d d d d d d d d d 
                    d d d d d d d d d d d d d d d d 
                    d d d d d d d d d d d d d d d d 
                    d d d d d d d d d d d d d d d d 
                    d d d d d d d d d d d d d d d d 
                    d d d d d d d d d d d d d d d d 
                    d d d d d d d d d d d d d d d d 
                    d b d d d d d b d d d d d d d d
        """),
        False)
    scene.set_tile(7,
        img("""
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
        """),
        False)
    scene.set_tile(11,
        img("""
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
        """),
        False)
    scene.set_tile(2,
        img("""
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
        """),
        False)
    scene.set_tile(5,
        img("""
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
        """),
        False)
    scene.set_tile(4,
        img("""
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
        """),
        False)
    scene.set_tile(1,
        img("""
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
        """),
        False)
    scene.set_background_color(1)
    mySprite = sprites.create(img("""
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
        """),
        SpriteKind.food)
    mason = sprites.create(img("""
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
        """),
        SpriteKind.player)
    mason.set_stay_in_screen(True)
    controller.move_sprite(mason)
def badguy():
    global mySprite2
    mySprite2 = sprites.create(img("""
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
        """),
        SpriteKind.enemy)
    scene.camera_shake(4, 500)
    game.set_dialog_frame(img("""
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
    """))
    game.set_dialog_cursor(img("""
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
    """))
    game.show_long_text("hello i am the evil ratdog man", DialogLayout.BOTTOM)
    effects.blizzard.start_screen_effect()
def music2():
    for index in range(99999):
        music.play_melody("D D E F A E F G ", 276)

def on_life_zero():
    game.over(False)
info.on_life_zero(on_life_zero)

def on_on_overlap(sprite, otherSprite):
    icebreak()
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

def on_overlap_tile(sprite2, location):
    pass
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        transparency16
    """),
    on_overlap_tile)

def icebreak():
    info.stop_countdown()
    animation.run_image_animation(mySprite,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        200,
        False)
    pause(1000)
    info.change_score_by(1)
    mySprite.set_position(randint(0, 120), randint(0, 100))
    animation.run_image_animation(mySprite,
        [img("""
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
        """)],
        500,
        False)
    info.start_countdown(5)
mySprite2: Sprite = None
mason: Sprite = None
mySprite: Sprite = None
game_define()

def on_forever():
    characterAnimations.loop_frames(mason,
        [img("""
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
            """),
            img("""
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
            """)],
        200,
        characterAnimations.rule(Predicate.MOVING))
    characterAnimations.loop_frames(mason,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        200,
        characterAnimations.rule(Predicate.NOT_MOVING))
forever(on_forever)
