namespace SpriteKind {
    export const sword = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f f 2 f e f . . 
        . . f f f 2 f e e 2 2 f f f . . 
        . . f e 2 f f e e 2 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 2 2 2 2 2 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e f 2 f f f 2 f 2 e f . . 
        . . f f f 2 2 e e f 2 f f f . . 
        . . f e e f 2 e e f f 2 e f . . 
        . f f e e e f e e e f f e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 2 2 2 2 2 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `],
    100,
    true
    )
    dir = 2
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (dir == 0) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . 
            . . . f . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 1 1 f . 
            f f f f f f f f f f f f f 1 1 1 f . . 
            f f f f f f f f f f 1 1 1 1 f f . . . 
            . . . f f f f f f f f f f f f . . . . 
            . . . f . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . 
            `, SpriteKind.sword)
        animation.runImageAnimation(
        mySprite2,
        [img`
            ........................
            ........................
            ........................
            ........................
            ............fffffff.....
            ...f...ffffffff11f......
            ...ffffffffff111f.......
            ffffffffffff11ff........
            ffffffffff11fff.........
            ffffffffffff............
            ...ffff.................
            ...f....................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ...f....................
            ...ffffffffffffffff.....
            fffffffffffffff11f......
            fffffffffffff111f.......
            ffffffffff1111ff........
            ...ffffffffffff.........
            ...f....................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ...f....................
            ...ffff.................
            ffffffffffff............
            fffffffffffffffffff.....
            fffffffffffffff11f......
            ...fffffff11f111f.......
            ...f...fffff11ff........
            ............fff.........
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `],
        120,
        true
        )
        mySprite2.setPosition(mySprite.x, mySprite.y)
        mySprite2.z += -1
        mySprite2.x += 10
        pause(150)
        sprites.destroy(mySprite2)
        pause(150)
    } else if (dir == 1) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . f . . . 
            f f f f f f f f f f f f f f f f . . . 
            . f 1 1 f f f f f f f f f f f f f f f 
            . . f 1 1 1 f f f f f f f f f f f f f 
            . . . f f 1 1 1 1 f f f f f f f f f f 
            . . . . f f f f f f f f f f f f . . . 
            . . . . . . . . . . . . . . . f . . . 
            . . . . . . . . . . . . . . . . . . . 
            `, SpriteKind.sword)
        animation.runImageAnimation(
        mySprite2,
        [img`
            ........................
            ........................
            ........................
            ........................
            fffffff.................
            .f11ffffffff...f........
            ..f111ffffffffff........
            ...ff11ffffffffffff.....
            ....fff11ffffffffff.....
            .......ffffffffffff.....
            ............ffff........
            ...............f........
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ...............f........
            ffffffffffffffff........
            .f11fffffffffffffff.....
            ..f111fffffffffffff.....
            ...ff1111ffffffffff.....
            ....ffffffffffff........
            ...............f........
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ...............f........
            ............ffff........
            .......ffffffffffff.....
            fffffffffffffffffff.....
            .f11fffffffffffffff.....
            ..f111f11fffffff........
            ...ff11fffff...f........
            ....fff.................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `],
        120,
        true
        )
        mySprite2.setPosition(mySprite.x, mySprite.y)
        mySprite2.z += -1
        mySprite2.x += -10
        pause(150)
        sprites.destroy(mySprite2)
        pause(150)
    } else if (dir == 2) {
        mySprite2 = sprites.create(img`
            . . . . . . f . . . . . . 
            . . . . . . f f . . . . . 
            . . . . . . f 1 f . . . . 
            . . . . . . f 1 1 f . . . 
            . . . . . . f f 1 f f . . 
            . . . . . . f f 1 1 f . . 
            . . . . . . f f f 1 f . . 
            . . . . . . f f f 1 f . . 
            . . . . . . f f f 1 f . . 
            . . . . . . f f f f f . . 
            . . . . . . f f f f f . . 
            . . . . . . f f f f f . . 
            . . . . . . f f f f f . . 
            . . . . . . f f f f f . . 
            . . . . . . f f f f f . . 
            . . . . . f f f f f f f . 
            . . . . . . . f f f . . . 
            . . . . . . . f f f . . . 
            . . . . . . . f f f . . . 
            `, SpriteKind.sword)
        animation.runImageAnimation(
        mySprite2,
        [img`
            ....f...................
            ....ff..................
            ....f1f.................
            ....f11f................
            ....ff1ff...............
            ....ff11f...............
            ....fff1f...............
            .....fff1f..............
            .....fff1f..............
            .....fffff..............
            .....fffff..............
            .....fffff..............
            ......fffff.............
            ......fffff.............
            ......fffff.............
            .....fffffff............
            .......fff..............
            .......fff..............
            .......fff..............
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ......f.................
            ......ff................
            ......f1f...............
            ......f11f..............
            ......ff1ff.............
            ......ff11f.............
            ......fff1f.............
            ......fff1f.............
            ......fff1f.............
            ......fffff.............
            ......fffff.............
            ......fffff.............
            ......fffff.............
            ......fffff.............
            ......fffff.............
            .....fffffff............
            .......fff..............
            .......fff..............
            .......fff..............
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........f...............
            ........ff..............
            ........f1f.............
            ........f11f............
            ........ff1ff...........
            ........ff11f...........
            ........fff1f...........
            .......fff1f............
            .......fff1f............
            .......fffff............
            .......fffff............
            .......fffff............
            ......fffff.............
            ......fffff.............
            ......fffff.............
            .....fffffff............
            .......fff..............
            .......fff..............
            .......fff..............
            ........................
            ........................
            ........................
            ........................
            ........................
            `],
        120,
        true
        )
        mySprite2.setPosition(mySprite.x, mySprite.y)
        mySprite2.z += -1
        mySprite2.y += -10
        pause(150)
        sprites.destroy(mySprite2)
        pause(150)
    } else if (dir == 3) {
        mySprite2 = sprites.create(img`
            . . . f f f . . . . . . . 
            . . . f f f . . . . . . . 
            . . . f f f . . . . . . . 
            . f f f f f f f . . . . . 
            . . f f f f f . . . . . . 
            . . f f f f f . . . . . . 
            . . f f f f f . . . . . . 
            . . f f f f f . . . . . . 
            . . f f f f f . . . . . . 
            . . f f f f f . . . . . . 
            . . f 1 f f f . . . . . . 
            . . f 1 f f f . . . . . . 
            . . f 1 f f f . . . . . . 
            . . f 1 1 f f . . . . . . 
            . . f f 1 f f . . . . . . 
            . . . f 1 1 f . . . . . . 
            . . . . f 1 f . . . . . . 
            . . . . . f f . . . . . . 
            . . . . . . f . . . . . . 
            `, SpriteKind.sword)
        animation.runImageAnimation(
        mySprite2,
        [img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ......fff...............
            ......fff...............
            ......fff...............
            ....fffffff.............
            .....fffff..............
            .....fffff..............
            .....fffff..............
            ......fffff.............
            ......fffff.............
            ......fffff.............
            ......f1fff.............
            ......f1fff.............
            .......f1fff............
            .......f11ff............
            .......ff1ff............
            ........f11f............
            .........f1f............
            ..........ff............
            ...........f............
            `,img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ......fff...............
            ......fff...............
            ......fff...............
            ....fffffff.............
            .....fffff..............
            .....fffff..............
            .....fffff..............
            .....fffff..............
            .....fffff..............
            .....fffff..............
            .....f1fff..............
            .....f1fff..............
            .....f1fff..............
            .....f11ff..............
            .....ff1ff..............
            ......f11f..............
            .......f1f..............
            ........ff..............
            .........f..............
            `,img`
            ........................
            ........................
            ........................
            ........................
            ........................
            .......fff..............
            .......fff..............
            .......fff..............
            .....fffffff............
            ......fffff.............
            ......fffff.............
            ......fffff.............
            .....fffff..............
            .....fffff..............
            .....fffff..............
            .....f1fff..............
            .....f1fff..............
            ....f1fff...............
            ....f11ff...............
            ....ff1ff...............
            .....f11f...............
            ......f1f...............
            .......ff...............
            ........f...............
            `],
        120,
        true
        )
        mySprite2.setPosition(mySprite.x, mySprite.y)
        mySprite2.z += -1
        mySprite2.y += 10
        pause(150)
        sprites.destroy(mySprite2)
        pause(150)
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    100,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    true
    )
    dir = 1
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    100,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    100,
    true
    )
    dir = 0
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f f 2 f e f . . 
        . . f f f 2 f e e 2 2 f f f . . 
        . . f e 2 f f e e 2 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 2 2 2 2 2 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e f 2 f f f 2 f 2 e f . . 
        . . f f f 2 2 e e f 2 f f f . . 
        . . f e e f 2 e e f f 2 e f . . 
        . f f e e e f e e e f f e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 2 2 2 2 2 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `],
    100,
    false
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    100,
    true
    )
    dir = 3
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
})
let mySprite2: Sprite = null
let dir = 0
let mySprite: Sprite = null
scene.setBackgroundColor(7)
info.setScore(0)
info.setLife(5)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 50, 50)
tiles.setCurrentTilemap(tilemap`level2`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorDarkDiamond)
let bad_guy = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
    bad_guy = sprites.create(img`
        . . . . . . c . . . . . . . . 
        . . . . . c b c . . . . . . . 
        . . . . . c c b c . . . . . . 
        . . . . . c c b b c . . . . . 
        . . . . . c c c b c . . . . . 
        . . . . . c c c b c . . . . . 
        . . . . . c c c b c . . . . . 
        . . . . . c c c b c . . . . . 
        . . . . . c c c b c . . . . . 
        . . . . . c c c b c . . . . . 
        . . . 8 8 8 8 8 8 8 8 8 . . . 
        . . . 8 8 8 8 8 8 8 8 8 . . . 
        . . . . . f f f f f . . . . . 
        . . . . . . f f f . . . . . . 
        . . . . . . f f f . . . . . . 
        . . . . . . f f f . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(bad_guy, value)
    bad_guy.follow(mySprite, 30)
    animation.runImageAnimation(
        bad_guy,
        [img`
        . . . . . . c . . . . . . . . . 
        . . . . . c b c . . . . . . . . 
        . . . . . c c b c . . . . . . . 
        . . . . . c c b b c . . . . . . 
        . . . . . c c c b c . . . . . . 
        . . . . . c c c b c . . . . . . 
        . . . . . c c c b c . . . . . . 
        . . . . . c c c b c . . . . . . 
        . . . . . c c c b c . . . . . . 
        . . . . . c c c b c . . . . . . 
        . . . 8 8 8 8 8 8 8 8 8 . . . . 
        . . . 8 8 8 8 8 8 8 8 8 . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 8 8 . . . . . . . . . . 
        . . . . 8 8 . . . . . . . . . . 
        . . . f 8 8 c c c c c c c c c . 
        f f f f 8 8 c c c c c c c c b c 
        f f f f 8 8 c c c c c c b b c . 
        f f f f 8 8 b b b b b b b c . . 
        . . . f 8 8 c c c c c c c . . . 
        . . . . 8 8 . . . . . . . . . . 
        . . . . 8 8 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . f f f . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . 8 8 8 8 8 8 8 8 8 . . . 
        . . . . 8 8 8 8 8 8 8 8 8 . . . 
        . . . . . . c b c c c . . . . . 
        . . . . . . c b c c c . . . . . 
        . . . . . . c b c c c . . . . . 
        . . . . . . c b c c c . . . . . 
        . . . . . . c b c c c . . . . . 
        . . . . . . c b c c c . . . . . 
        . . . . . . c b b c c . . . . . 
        . . . . . . . c b c c . . . . . 
        . . . . . . . . c b c . . . . . 
        . . . . . . . . . c . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 8 8 . . . . 
        . . . . . . . . . . 8 8 . . . . 
        . . . c c c c c c c 8 8 f . . . 
        . . c b b b b b b b 8 8 f f f f 
        . c b b c c c c c c 8 8 f f f f 
        c b c c c c c c c c 8 8 f f f f 
        . c c c c c c c c c 8 8 f . . . 
        . . . . . . . . . . 8 8 . . . . 
        . . . . . . . . . . 8 8 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
        100,
        true
    )
}
sprites.onOverlap(SpriteKind.sword, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.showLongText("A fireWall has opened!", DialogLayout.Bottom)
    tiles.setTileAt(tiles.getTileLocation(12, 1), sprites.dungeon.floorDark2)
    tiles.setWallAt(tiles.getTileLocation(29, 13), false)
    tiles.setWallAt(tiles.getTileLocation(30, 13), false)
    tiles.setWallAt(tiles.getTileLocation(31, 13), false)
    tiles.setTileAt(tiles.getTileLocation(29, 13), assets.tile`myTile1`)
    tiles.setTileAt(tiles.getTileLocation(30, 13), assets.tile`myTile1`)
    tiles.setTileAt(tiles.getTileLocation(31, 13), assets.tile`myTile1`)
    tiles.setWallAt(tiles.getTileLocation(24, 16), false)
    tiles.setWallAt(tiles.getTileLocation(24, 17), false)
    tiles.setWallAt(tiles.getTileLocation(24, 18), false)
    tiles.setWallAt(tiles.getTileLocation(24, 19), false)
    tiles.setTileAt(tiles.getTileLocation(24, 16), assets.tile`myTile1`)
    tiles.setTileAt(tiles.getTileLocation(24, 17), assets.tile`myTile1`)
    tiles.setTileAt(tiles.getTileLocation(24, 18), assets.tile`myTile1`)
    tiles.setTileAt(tiles.getTileLocation(24, 19), assets.tile`myTile1`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.showLongText("A fireWall has opened!", DialogLayout.Bottom)
    tiles.setTileAt(tiles.getTileLocation(4, 18), sprites.dungeon.floorDark2)
    tiles.setTileAt(tiles.getTileLocation(6, 4), assets.tile`myTile1`)
    tiles.setTileAt(tiles.getTileLocation(7, 4), assets.tile`myTile1`)
    tiles.setTileAt(tiles.getTileLocation(8, 4), assets.tile`myTile1`)
    tiles.setTileAt(tiles.getTileLocation(9, 4), assets.tile`myTile1`)
    tiles.setTileAt(tiles.getTileLocation(10, 4), assets.tile`myTile1`)
    tiles.setWallAt(tiles.getTileLocation(6, 4), false)
    tiles.setWallAt(tiles.getTileLocation(7, 4), false)
    tiles.setWallAt(tiles.getTileLocation(8, 4), false)
    tiles.setWallAt(tiles.getTileLocation(9, 4), false)
    tiles.setWallAt(tiles.getTileLocation(10, 4), false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.showLongText("A fireWall has opened!", DialogLayout.Bottom)
    tiles.setTileAt(tiles.getTileLocation(21, 22), sprites.dungeon.floorDark2)
    tiles.setTileAt(tiles.getTileLocation(6, 20), assets.tile`myTile1`)
    tiles.setTileAt(tiles.getTileLocation(7, 20), assets.tile`myTile1`)
    tiles.setTileAt(tiles.getTileLocation(8, 20), assets.tile`myTile1`)
    tiles.setTileAt(tiles.getTileLocation(9, 20), assets.tile`myTile1`)
    tiles.setWallAt(tiles.getTileLocation(9, 20), false)
    tiles.setWallAt(tiles.getTileLocation(8, 20), false)
    tiles.setWallAt(tiles.getTileLocation(7, 20), false)
    tiles.setWallAt(tiles.getTileLocation(6, 20), false)
    tiles.setTileAt(tiles.getTileLocation(5, 22), assets.tile`myTile1`)
    tiles.setTileAt(tiles.getTileLocation(5, 23), assets.tile`myTile1`)
    tiles.setTileAt(tiles.getTileLocation(5, 24), assets.tile`myTile1`)
    tiles.setWallAt(tiles.getTileLocation(5, 22), false)
    tiles.setWallAt(tiles.getTileLocation(5, 23), false)
    tiles.setWallAt(tiles.getTileLocation(5, 24), false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.showLongText("You found...", DialogLayout.Bottom)
    tiles.setTileAt(tiles.getTileLocation(8, 1), assets.tile`myTile5`)
    game.showLongText("A Golden Orb!", DialogLayout.Bottom)
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.showLongText("A fireWall has opened!", DialogLayout.Bottom)
    tiles.setTileAt(tiles.getTileLocation(30, 30), sprites.dungeon.floorDark2)
    tiles.setWallAt(tiles.getTileLocation(14, 21), false)
    tiles.setWallAt(tiles.getTileLocation(14, 22), false)
    tiles.setTileAt(tiles.getTileLocation(14, 21), assets.tile`myTile1`)
    tiles.setTileAt(tiles.getTileLocation(14, 22), assets.tile`myTile1`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    game.showLongText("A fireWall has opened!", DialogLayout.Bottom)
    tiles.setTileAt(tiles.getTileLocation(0, 26), sprites.dungeon.floorDark2)
    tiles.setWallAt(tiles.getTileLocation(12, 9), false)
    tiles.setTileAt(tiles.getTileLocation(12, 9), assets.tile`myTile1`)
    tiles.setWallAt(tiles.getTileLocation(13, 9), false)
    tiles.setTileAt(tiles.getTileLocation(13, 9), assets.tile`myTile1`)
    tiles.setWallAt(tiles.getTileLocation(14, 9), false)
    tiles.setTileAt(tiles.getTileLocation(14, 9), assets.tile`myTile1`)
    tiles.setWallAt(tiles.getTileLocation(15, 9), false)
    tiles.setTileAt(tiles.getTileLocation(15, 9), assets.tile`myTile1`)
    tiles.setWallAt(tiles.getTileLocation(16, 9), false)
    tiles.setTileAt(tiles.getTileLocation(16, 9), assets.tile`myTile1`)
    tiles.setWallAt(tiles.getTileLocation(17, 9), false)
    tiles.setTileAt(tiles.getTileLocation(17, 9), assets.tile`myTile1`)
})