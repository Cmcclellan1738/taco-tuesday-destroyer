//  Setup the game
info.setScore(0)
info.setLife(3)
//  Setup the player
let tacotruck = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . f f f f f f f f f f f f f f f f f f f f f f . . . . . . .
    . . f f f f f f f f f f f f f f f f f f f f f f f f . . . . . .
    . . 9 9 9 6 5 6 6 a 6 e 6 6 2 2 6 6 6 8 8 8 6 6 9 . . . . . . .
    . . 9 9 8 6 5 6 6 a 6 e e 6 6 2 2 6 8 6 d d d d 9 9 . . . . . .
    . . 9 6 8 6 6 5 6 a 6 6 e e 6 6 2 6 8 6 d d d 1 d 9 . . . . . .
    . . 9 6 8 8 6 d d d d d d d d d d d 8 6 d d d d 1 9 . . . . . .
    . . 9 6 6 8 6 d d d d d 1 d d d d d 6 8 d 1 d d d 9 . . . . . .
    5 4 f 6 8 8 6 d d d d d d 1 d d d d 6 8 6 d 1 d d 9 9 . . . . .
    5 4 f 6 8 6 6 d d d d d d d 1 d d d 6 8 6 d d 1 d d 9 . . . . .
    5 4 f 6 8 8 6 d 1 d d d d d d 1 d d 6 8 6 6 8 6 6 6 9 9 . . . .
    5 4 f 6 6 8 6 d d 1 d d d d d d d d 6 8 6 8 8 6 3 3 3 9 9 . . .
    5 4 f 6 8 8 6 d d d 1 d d d d d d d 6 8 8 6 6 6 3 6 6 6 9 9 . .
    . . 9 6 8 6 6 5 6 6 a 6 6 e 6 2 6 6 6 6 6 6 3 3 3 6 3 3 3 9 . .
    . . 9 6 8 6 5 6 6 a 6 6 e e 6 2 2 6 6 6 3 3 3 6 6 6 3 6 6 9 . .
    . . 9 9 6 6 5 6 a 6 6 e 6 6 6 6 2 2 6 6 3 6 6 6 3 3 3 6 3 9 . .
    . . 9 9 9 9 9 f f f f 9 9 9 9 9 9 9 9 9 9 f f f f 9 9 9 9 9 . .
    . . d d d d . f 1 1 f . d d d d d d d d . f 1 1 f . d d d d . .
    . . . . . . . f 1 1 f . . . . . . . . . . f 1 1 f . . . . . . .
    . . . . . . . f f f f . . . . . . . . . . f f f f . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`)
tacotruck.setPosition(20, scene.screenHeight() / 2)
tacotruck.setFlag(SpriteFlag.StayInScreen, true)
//  Configure Player Controls
controller.moveSprite(tacotruck, 150, 150)
//  Generate Enemies
game.onUpdateInterval(900, function on_update_interval() {
    let taco = sprites.create(img`
    . . . . . . . e e e e . . . . .
    . . . . . e e 4 5 5 5 e e . . .
    . . . . e 4 5 6 7 6 7 6 6 e . .
    . . . e 5 6 6 7 7 7 6 4 4 4 e .
    . . e 5 6 7 7 6 6 4 5 5 5 5 4 .
    . e 5 6 7 7 8 8 5 5 5 5 5 4 5 4
    . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4
    e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4
    e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4
    e 5 c c e 5 4 5 5 5 4 5 5 5 e .
    e 5 c c 5 5 5 5 5 5 5 5 4 e . .
    e 5 e c 5 4 5 4 5 5 5 e e . . .
    e 5 e e 5 5 5 5 5 4 e . . . . .
    4 5 4 e 5 5 5 5 e e . . . . . .
    . 4 5 4 5 5 4 e . . . . . . . .
    . . 4 4 e e e . . . . . . . . .
    `)
    taco.setPosition(scene.screenWidth(), randint(0, scene.screenHeight()))
    taco.setVelocity(-50, 0)
})
//  Shoot enemies with projectiles
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function on_button_event_a_pressed() {
    let tomatoeblast = sprites.createProjectileFromSprite(img`
    . . . . . . . 7 2 2 . . . . . .
    . . . . e e e 2 7 2 7 7 . . . .
    . . e e e 7 7 2 7 7 7 7 e e . .
    . e e e e e 7 7 7 e 7 2 2 2 e .
    . e e e e 2 e 7 7 7 7 2 4 2 e .
    e e e e 2 2 7 7 2 2 7 7 2 2 2 e
    e e e 2 2 2 7 2 2 2 2 4 4 2 2 e
    e e e 2 2 2 2 2 4 2 2 2 2 2 2 e
    e e e 2 2 2 4 4 2 2 2 2 2 2 2 e
    e e e 2 2 2 2 2 2 2 2 2 2 2 2 e
    e e e 2 2 2 2 2 2 2 2 2 2 4 2 e
    . e e e 2 2 2 2 2 2 2 2 2 4 e .
    . 2 e e 2 2 2 2 2 2 2 2 4 2 e .
    . . 2 e e 2 2 2 2 2 4 4 2 e . .
    . . . 2 2 e e 4 4 4 2 e e . . .
    . . . . . 2 2 e e e e . . . . .
    `, tacotruck, 50, 0)
})
