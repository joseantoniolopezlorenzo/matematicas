!function(t){t.Options.text.useMathJax=!0,t.Options.text.useMathJax.display="html";function e(e){return t.JSXGraph.initBoard(e,{boundingbox:[-11,1,11,-1],axis:!1,showCopyright:!1,showNavigation:!1})}function a(e){e.create("point",[0,0],{face:"+",name:"0",strokeColor:"black",size:2,fixed:!0}),e.create("line",[[-10,0],[10,0]],{strokeColor:"red",fixed:!0}),e.create("point",[-10.7,0],{size:0,name:"\\[-\\infty\\]"}),e.create("point",[9,0],{size:0,name:"\\[+\\infty\\]"})}var r=function(e,t){let a="";return a="a"===e?"white":"black",{strokeColor:"black",fillColor:a,name:t,size:3,fixed:!0}};const o=e("intervalo1");a(o);var n=o.create("point",[-5,0],r("a","-5")),i=o.create("point",[2,0],r("a","2"));o.create("segment",[n,i]);const c=e("intervalo2");a(c);n=c.create("point",[-5,0],r("b","-5")),i=c.create("point",[2,0],r("b","2"));c.create("segment",[n,i]);const s=e("intervalo3");a(s);n=s.create("point",[-5,0],r("b","-5")),i=s.create("point",[2,0],r("a","2"));s.create("segment",[n,i]);const p=e("intervalo4");a(p);n=p.create("point",[-5,0],r("a","-5")),i=p.create("point",[2,0],r("b","2"));p.create("segment",[n,i]);const l=e("semirecta1");a(l);i=l.create("point",[2,0],r("a","a"));l.create("arrow",[i,[-10,0]]);const m=e("semirecta2");a(m);i=m.create("point",[5,0],r("b","a"));m.create("arrow",[i,[-10,0]]);const b=e("semirecta3");a(b);i=b.create("point",[1,0],r("a","a"));b.create("arrow",[i,[10,0]]);const f=e("semirecta4");a(f);r=f.create("point",[-2,0],r("b","a"));f.create("arrow",[r,[10,0]])}(JXG);