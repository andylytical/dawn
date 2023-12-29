async function delay_open_links () {
  var delay_min = 10000;
  var delay_max = 21000;
  var url_base = "https://www.bing.com/search?qs=n&form=QBRE&sp=-1&q="
  var html = "";
  var search_word;
  var size;
  var link;
  for (i=0; i<=4; i++) {
    size = rand_int( 8, 11 );
    search_word = GPW.pronounceable( size );
    console.log( "Size:" + size + " Word:" + search_word );
    link = url_base + search_word;
    console.log(i + " " + link);
    window.open( link, "_blank" );
    await sleep_random( delay_min, delay_max );
    console.log( "wake up" );
  }
  console.log( "END" );
}

function rand_int(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function sleep_random(min, max) {
  var pause = rand_int(min, max);
  console.log("pause " + pause);
  return new Promise( resolve => setTimeout( resolve, pause ) );
}
