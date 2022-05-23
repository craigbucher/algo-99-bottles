function bottleSong(bottles) {	
  let tmpBottles = Number(bottles);	
  while (tmpBottles > 2){	
    console.log(`${tmpBottles} bottles of beer on the wall, ${tmpBottles}	bottles of beer.\nTake one down and pass it around, ${tmpBottles - 1} bottles of beer on the wall.`);	
    tmpBottles --;	
  }	
  if (tmpBottles === 2){	
    console.log(`${tmpBottles} bottles of beer on the wall, ${tmpBottles}	bottles of beer.\nTake one down and pass it around, ${tmpBottles - 1} bottle of beer on the wall.`);	
    tmpBottles --;	
  }	
  if (tmpBottles === 1){	
  console.log(`1 bottle of beer on the wall, 1 bottle of beer.\nTake one down	and pass it around, no more bottles of beer on the wall.\nGo to the store and	buy some more, ${bottles} bottles of beer on the wall.`);	
  }	
};

bottleSong(99);
