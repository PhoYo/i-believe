namespace SpriteKind {
    export const Alien = SpriteKind.create()
    export const bar = SpriteKind.create()
    export const Text = SpriteKind.create()
}
function CreateTones (tones: any[], amount: number) {
    for (let index = 0; index <= amount; index++) {
        currentTune.push(tones._pickRandom())
        currentBars.push(Bars._pickRandom())
    }
    for (let index = 0; index <= amount; index++) {
        if (true) {
            currentBarSprites.push(sprites.create(currentBars[index], SpriteKind.bar))
        }
    }
}
function drawBars (bars: any[]) {
    for (let index = 0; index <= bars.length - 1; index++) {
        bars[index].setPosition(barStartOffset + index * 22, music.tempo() / 36 * index + barYOffset)
        bars[index].setVelocity(0, music.tempo() / (bars.length - 1))
    }
    PlayTones(currentTune)
}
function PlayTones (tones: any[]) {
    music.rest(music.beat(BeatFraction.Double))
    for (let value of tones) {
        console.log(value)
        music.playTone(value, music.beat(BeatFraction.Whole))
    }
}
let Bars: Image[] = []
let barYOffset = 0
let barStartOffset = 0
let currentBarSprites: Sprite[] = []
let currentBars: Image[] = []
let currentTune: any[] = []
scene.setBackgroundImage(assets.image`background`)
let Alien = sprites.create(assets.image`myImage1`, SpriteKind.Alien)
Alien.setPosition(84, 38)
currentTune = []
currentBars = []
currentBarSprites = []
barStartOffset = 26
barYOffset = 60
Bars = [
assets.image`myImage2`,
assets.image`myImage3`,
assets.image`myImage4`,
assets.image`myImage5`
]
let LowTones = [
220,
208,
196,
185,
175,
165,
156,
147,
139,
131,
0
]
CreateTones(LowTones, 5)
drawBars(currentBarSprites)
