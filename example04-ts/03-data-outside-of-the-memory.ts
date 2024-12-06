function getSong(): string {
  let _song = '';
  for (let i = 100; i > 0; i -= 1) {
    setTimeout(function () {
        _song += `${i} beers on  the wall, you take on down and pass it around, ${i - 1} bottles of beer on the wall\n`;
        
        if (i === 1) {
          _song += "Hey let's get some more beer";
        }
    }, 0)
  }

  return _song;
}


function singSong(_song: string) {
  if (!_song) throw new Error("song is '' empty, FEED ME A SONG!");
  console.log(_song);
}

const song = getSong();

singSong(song);