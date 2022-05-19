const sounds = ['sound-1', 'sound-2', 'sound-3', 'sound-4', 'sound-5', 'sound-6']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSongs()
        document.getElementById(sound).play()
       
    })

    document.getElementById('buttons').
    appendChild(btn)
})

function stopSongs(){
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}