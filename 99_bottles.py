def bottle_song(bottles):
	# write your code here!
    tmpBottles = bottles
    while tmpBottles > 2:
      print('%s bottles of beer on the wall. %s bottles of beer. Take one down, pass it around, %s bottles of beer on the wall.' % (tmpBottles, tmpBottles, tmpBottles-1))
      tmpBottles -=1
    print('%s bottles of beer on the wall. %s bottles of beer. Take one down, pass it around, %s bottle of beer on the wall.' % (tmpBottles, tmpBottles, tmpBottles-1))
    tmpBottles -=1
    print('1 bottle of beer on the wall. 1 bottle of beer. Take one down, pass it around, no more bottles of beer on the wall')
    print('No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, %s bottles of beer on the wall.' % bottles)

bottle_song(99)
