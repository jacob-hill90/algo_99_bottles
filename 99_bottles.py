end = "2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall."

def bottle_song(num):
	for i in range(num, 2, -1):
		print(f'{i} bottles of beer on the wall, {i} bottles of beer. \nTake one down and pass it around, {i-1} bottles of beer on the wall.')
	print(end)
bottle_song(5)