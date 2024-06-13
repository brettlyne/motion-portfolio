uniform float u_time;
varying vec2 vUv;

vec3 colorA = vec3(0.912, 0.191, 0.652);
vec3 colorB = vec3(1.000, 0.777, 0.052);

void main() {
  vec3 color = mix(colorA, colorB, vUv.x);

  gl_FragColor = vec4(color, 1.0);

  vec4 backColor = vec4(0.0, 0.0, 0.0, 0.0);

  // back wave
  float amplitude2 = 0.35;
  float angularVelocity2 = 8.0;
  float frequency2 = 0.5;
  float offset2 = 0.55;
  float y2 = amplitude2 * sin((angularVelocity2 * vUv.x) + (frequency2 * u_time)) + offset2;
  vec4 blueColor2 = vec4(0.0, 0.4, 0.6, 1.0); // Darker blue for the second wave

  // front wave
  float amplitude1 = 0.3;
  float angularVelocity1 = 10.0;
  float frequency1 = 1.;
  float offset1 = 0.45;
  float y1 = amplitude1 * sin((angularVelocity1 * vUv.x) + (frequency1 * u_time)) + offset1;
  // modify y1 at the edges
  float edgeFactor = smoothstep(0.0, 0.25, vUv.x) * smoothstep(1.0, 0.9, vUv.x);
  y1 = y1 - vUv.x * vUv.x * 0.5;
  vec4 blueColor1 = vec4(0.0, 0.7, 0.9, 1.0);

  // antialias edges
  float blendFactor1 = smoothstep(0.01, 0.0, y1 - vUv.y);
  float blendFactor2 = smoothstep(0.01, 0.0, y2 - vUv.y);

  vec4 color1 = mix(blueColor1, backColor, blendFactor1);
  vec4 color2 = mix(blueColor2, backColor, blendFactor2);

  if(color1.a > 0.0) {
    gl_FragColor = color1;
  } else {
    gl_FragColor = color2;
  }
}
