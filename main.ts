function drawTurtle(cmds: number[][]) {
    for (let i = 0; i < cmds.length; i++) {
        console.log(cmds[i])
        if (cmds[i][0] == 1) {
            //forwards
            vanGogh.fd(cmds[i][1])
        } else if (cmds[i][0] == 2) {
            //left
            vanGogh.re(cmds[i][1], false)
        } else if (cmds[i][0] == 3) {
            //right
            vanGogh.re(cmds[i][1], true)
        } else if (cmds[i][0] == 4) {
            vanGogh.penDown()
        } else if (cmds[i][0] == 5) {
            //penup
            vanGogh.penUp()
        }
    }
}
vanGogh.penUp()
vanGogh.penDown()
vanGogh.penUp()
let cmds: number[][] = [[3]]
bluetooth.onBluetoothConnected(function() {
    
})

input.onButtonPressed(Button.A, () => drawTurtle(cmds))

