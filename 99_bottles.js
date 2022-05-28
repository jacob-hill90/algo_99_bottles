const end = '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.'

function bottleSong(num) {
  for(let i = num; i > 1; i--){
    if(i > 2){
      console.log(`${i} bottles of beer on the wall, ${i} bottles of beer. \nTake one down and pass it around, ${i-1} bottles of beer on the wall.`)
    }
    else console.log(end)
  }
}

bottleSong(99)