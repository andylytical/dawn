function delay_open_links () {
  var delay_min = 10000;
  var delay_max = 21000;
  var num_links = 30;
  var links_per_phase = 4;
  var phase_pause = 20 * 60000; //10 minutes in ms
  var url_base = "https://www.bing.com/search?qs=n&form=QBRE&sp=-1&q="
  var search_word;
  var link;
  var prev_delay = 0;
  var delay;
  for (i=0; i < num_links; i++) {
    // make url
    search_word = GPW.pronounceable( rand_int(8, 11) );
    link = url_base + search_word;
    console.log(i + " " + link);
    // calculate delay
    delay = prev_delay + rand_int( delay_min, delay_max );
    if ( i > 0 ) {
      if ( i % links_per_phase === 0 ) {
        // start of a new phase
        delay += phase_pause;
      }
    }
    else {
      delay = 0;
    }
    // schedule open new link
    setTimeout( open_link_in_new_tab, delay, link );
    console.log( "  scheduled in " + delay + " milliseconds" );
    // save last delay
    prev_delay = delay;
  }
  console.log( "END" );
}


function open_link_in_new_tab( url ) {
  var now = new Date();
  console.log( now.toLocaleTimeString() + ": window.open(" + url + ")" );
  window.open( url, "_blank" );
}


function rand_int(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
