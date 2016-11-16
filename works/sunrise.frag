#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution; // Canvas size (width,height)
uniform vec2 u_mouse;      // mouse position in screen pixels
uniform float u_time;     // Time in seconds since load 

varying vec2 pixVec;
varying float timeDivisor;

float red(vec2 pixVec) {
	//return abs((pixVec.y-u_resolution.y)/u_resolution.y); 
	float base = (smoothstep(0.4*u_resolution.y,1.0*u_resolution.y,pixVec.y));
	return clamp(base * abs(cos( (u_time/1.5)), 0.1, 0.8);
	 // * abs(cos(u_time));
}

float green(vec2 pixVec) {
	float base = clamp( smoothstep(0.2*u_resolution.y,0.7*u_resolution.y,u_resolution.y-pixVec.y), 0.2, 0.4);
	return base + (pixVec.x/(u_resolution.x/0.35));
}

float blue(vec2 pixVec) {
	float base = smoothstep(0.3*u_resolution.y,0.75*u_resolution.y,pixVec.y);
	base =  clamp(base * abs(sin(u_time)), 0.63, 0.75);
	return base;// + (pixVec.x/u_resolution.x/2.0);
}

float alpha() {
	return clamp(abs(sin(u_time/2.0)), 0.3, 1.0);
}

void main () {
	vec2 pixVec = gl_FragCoord.xy;
	gl_FragColor = vec4(red(pixVec),green(pixVec),blue(pixVec), alpha());
}
