(function() {
  var folded = new OriDomi(document.getElementById('topFrame'), {
    vPanels:          0,     // number of panels when folding left or right (vertically oriented)
    hPanels:          1,     // number of panels when folding top or bottom
    speed:            1200,  // folding duration in ms
    ripple:           2,     // backwards ripple effect when animating
    shadingIntensity: .5,    // lessen the shading effect
    perspective:      800,   // smaller values exaggerate 3D distortion
    maxAngle:         40,    // keep the user's folds within a range of -40 to 40 degrees
    shading:          'soft' // change the shading type
  });
  var unfolded = true;
  if (!OriDomi.isSupported) {
    document.getElementById('unsupported').style.display = 'block';
    return;
  }
  function effect() {
      unfolded ? folded.foldUp() : folded.unfold();
      unfolded = !unfolded;
  }
  effect();
  document.getElementById('base').addEventListener('click', effect);
})(.call(this));
