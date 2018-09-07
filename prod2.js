var audioSrc={coin:"data:audio/wav;base64,UklGRjEFAABXQVZFZm10IBAAAAABAAEAiBUAAIgVAAABAAgAZGF0YQ0FAAAAiVuSnFt+pGdrpHpboI1cjaBceqNrZ6N+XJuRXIijXXajcGOjg1yXlVyEo2Jxo3Vfooddkppdf6JmbaJ5XaCLXY6eXXuia2mifV2bkF2Jol13onBloYJel5RehaFic6F0YaGGXpKYXoGhZm+heF6gil6Om158oGtroHxfm45fip9feKBvZ6CAX5eSX4agYnSgc2OghF+Tll+Bn2Zwn3dgn4hgjplgfZ9rbZ98YJuMYIqdYHqfb2mff2CXkGCGnmJ2nnNlnoNhk5Rhgp5ncp53Yp6HYY+XYX+ea26ee2Gbi2GLm2F7nW9rnX9il45ih51jd51zaJ2CYpOSYoOdZ3SddmSdhmKPlWN/nGtwnHpjmolji5hjfJxvbZx+Y5eNY4ecY3iccmqcgWOTkGSNa4GQZJR9cJtqg45klntym2iFjGSXenSbZ4aLZJl4dZpliIllmnZ3mWWJh2aadXmYZYuFaJpze5ZljYRqmnJ8lGWOgmyZcH6SZpCAbplvf5BmkX9wmW2Bj2aTfXGZbIONZpR8c5lqhItnlXp1mGmGimeXeXaYaIeIZ5h3eJdniYZpmHZ5lWeKhWqYdHuUaIuDbJdzfZJojYJul3F+kGiOgG+XcH+PaI9/cZdvgY1okX1zlm6CjGmSfHSWbISKaZN7dpZrhYlplHl3lmqGh2mWeHmVaoiGa5V3epNqiYRtlXV7kmqKg26VdH2QaouBcJVzfo9qjYBxlHJ/jWuOf3OUcYGMa49+dJRvgoprkHx1lG6DiWuRe3eUbYSIbJJ6eJNshoZsk3l5kmyHhW2TeHuRbIiEb5N2fJBsiYJwk3V9jm2KgXGSdH6NbYuAc5Jzf4xtjH90knKBim2NfnWScYKJbY59d5Fwg4huj3x4kW+Eh26Qe3mRb4WFbpF6epBuhoRvkXl7j2+Hg3GQeHyOb4iCcpB3fYxviYFzkHZ+i2+KgHSQdX+Kb4t/dY90gIlwi353j3OBiHCMfXiPcoKHcI18eY9yg4Zwjnt6j3GEhXGOenuOcYWEco56fI1xhoNzjnl9jHGHgnSOeH6LcYeBdY53f4pyiIB2jXZ/iHKJf3eNdoCHcop+eI11gYdyin15jXSChnKLfXqMdIOFc4t8e4xzg4RzjHt8jHOEg3SMe3yLc4WCdYx6fYp0hYF2i3l+iXSGgXeLeX+IdIeAeIt4f4d0h394i3eAhnSIfnmKd4GFdYh+eop2gYR1iX17inaChHWJfXyKdoODdYp8fIl1g4J2iXt9iHaEgneJe36IdoSBeIl6fod2hYB5iXp/hnaFgHmJen+Fd4Z/eoh5gIV3hn97iHmBhHeGfnuIeIGDd4d+fIh4goN3h319h3iCgniHfX2HeIKCeId8foZ4g4F5h3x+hniDgXqHfH+FeYOAeoZ7f4R5hIB7hnt/hHmEf3uGe4CDeYR/fIZ7gIN5hH99hXuBgnqFfn2FeoGCeoV+fYV6gYF6hX5+hXqBgXuFfX6EeoKBe4R9f4R7goB8hH1/g3uCgHyEfX+De4KAfYR9f4J7gn99hH2AgnyCf32DfYCBfIJ/foN9gIF8gn9+g32AgXyCf36DfYCBfYJ+f4J9gYB9gn5/gn2BgH2Cfn+CfYGAfoJ+f4F9gYB+gn5/gX6BgH6Bfn+BfoF/foF+gIB+gX9/gX6AgH6Bf3+Bf4CAfoB/f4B/gIB/gH9/gH+AgH+Af3+Af4CAf4B/f4B/gIB/gH9/gH8=",hurt:"data:audio/wav;base64,UklGRpUEAABXQVZFZm10IBAAAAABAAEAiBUAAIgVAAABAAgAZGF0YXEEAACkdFtbW1t+nVtbW1tbk4tbW1tbW5qIW1tbW1uRlFtcXFxceKRoXFxcXFyWl1xcXFxcXKGQXFxcXFxcmZ1cXFxcXFx8pXZcXFxcXFyQpWZcXFxcXFyMpXFdXV1dXV1tpZZdXV1dXV1deaSPXV1eXl5eXmekpGJeXl5eXl5eeaScXl5eX19fX19npKNyX19fX19fX19yo6NwX19gYGBgYGBglaOZYGBgYGBgYGBgYIijo29hYWFhYWFhYWFhiKKifGFhYWFhYWFiYmJijqKigmJiYmJiYmJiYmJiYpGhoY1iY2NjY2NjY2NjY2NjiKGhoWhjY2NjY2NkZGRkZGRkaKCgoJtkZGRkZGRkZGRkZGRlZWVlmaCgoH9lZWVlZWVlZWVlZWVlZWVmZo+fn5+faGZmZmZmZmZmZmZmZmZmZmZmZ26fn56enm9nZ2dnZ2dnZ2dnZ2dnZ2dnZ2doaGiEnp6enp5/aGhoaGhoaGhoaGhoaGhoaGlpaWlpaWlpaZydnZ2dnZVpaWlpaWlpaWlpaWlqampqampqampqampqampqanGcnJycm5ublmpqamtra2tra2tra2tra2tra2tra2tra2trbGxsbGxsbGxsbIyampqampqamppvbGxsbGxsbGxsbG1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1ubm5ubm5ubm5ue5iYmJiYmJiYmJiYmHdubm5ubm5ubm5ub29vb29vb29vb29vb29vb29vb29vb29vb3BwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHFxcY+WlpaWlZWVlZWVlZWVlZWVlXFxcXFxcXFxcXFxcXFxcXFxcnJycnJycnJycnJycnJycnJycnJycnJycnJycnNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3NzdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dYeQkJCQkJCQkJCQkJCQkJCQkJCQj4+Pj4+Pj4+Pj4+Pj4+Pg3Z2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3x8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fH19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f38=",fanfare:"data:audio/wav;base64,UklGRjwNAABXQVZFZm10IBAAAAABAAEAiBUAAIgVAAABAAgAZGF0YRgNAADDuK6jmI6DeG1iVktAn7uwpJmOgndrX1RITMG2qp6ShnpuYlVJRcG1qZ2Qg3dqXVBDhruuoZSHem1fUkSEu62gkoR3aVtNP720ppiKe21eUEGotaeYiXprXE1FwLGik4N0ZFRFkrenl4d3Z1dGiLenloZ1ZVRDprOikYBuXUxouqmXhnRiUE69rJmHdWNQVLyql4RxXkt4tqOQfWlWQrmsmIRwXEiVsZyIc19Ki7KdiHNdSJmvmYRuWEK9p5F7ZU58s5yFbldOu6SMdV1GraiQeGBIpamQeF9Gr6aNdFtPuaCGbVN4sJZ8YkeupIluU3yuk3hcV7abf2NGtZ+DZkqqoYRnSqmgg2VHtJ1/YFa1lnhZd6yNbU6goIBgYrGQcE+en35dcquKaE+1k3FPopt4VY+gfVqDpIBcfqWAXICkf1mIoHtVl5p0Tq2Sa12uh19+oXpRpJJqZaqBWJeWbGSqgFWekWZ2oXZRsYVZl5JlfZ1wZ6Z5VK+BUqmGV56LW5iNXZWOXZWNXJeKWKGFU6t/Wap3aqFtfZZhk4lUq3prn2mJjVaneW+bY5OEYKRriIpbp22HiV6laY2DaZxgnHh8jl6kZpZ5fIxkn1+gb4t+eI1pmlqmY5tujniDgXqJc49tlGmYZZtjnWKeYp1knGaZapVukHSKe4KCeYtvk2ScZJtvjXx9iWyXZZl0hYRwlGeWeH6KZJ10g4dmm3WBm7yxp5yRhntwZVpPQ3G+s6idkYZ6b2NXTEChua6ilop+cmZZTUCdua2hlIh7bmFVSFi/sqWYi35xZFZJVr+ypJeJe21fUUOQuKqcjoByY1VGe7qsnY5/cGFSQ5q2p5iIeWlaSmW8rJyMfGxcTFu8rJyLe2pZSXm4p5aFdGNRQLuvnYx6aFZEobGfjXtpVkSnsJ2LeGVSTL2ql4NwXEiNsp+Ld2NOarejj3pmUWC5pI96ZU9utqCLdV9Jk6+Zg2xWUbqkjXZfSJ6rlH1lToOwmIBoUHyxmIBnT4WulXxjSp2oj3VcT7mfhWpQhaySd1xTt5yBZUqkpIhsUIypjXBTgauOcVSBqo1vUYyniWtMoqGCY0+2l3hYeKuLa0usm3tad6qJaEu2lXNSmJ99WnynhGFprIlmXbCMaFixjWhasItmY62HYnKngVuIn3hRopRtWq+HX3+geE+qj2ZzpHtRqI5ke6B1U7CFWZSUaHShdFqsf1KoiFuVkGKHlmd8m2t3nW1znm5znmx2nGp+l2WIkV6WiVamgFuodHGcZ4qNV6V8aKBph41VqHdzmF+Zf2ieZZOCZ55jlX5umV2gdX2NXqRmk3x4kF6jY5h2goZullulY5twjHt+hnKQZ5leol2jYp1nmGqVbZJukW+RbpJslGmXZZtgoGKeapVzi3qAhHWOZ5lkmnKJgHeOZJxtjn53jmKddYOHaJlyhoZnmni/taqglYp/dGleU0c+wresoZWKf3NnXFBEb76yppuPg3ZqXlJFaL6ypZmMgHNmWU0/qbeqnZCDdmlbTkCkt6mcjoFzZVdJWL6wopSGeGlbTETAsqOUhXdoWEljvK2ej39wYFBBsLKjk4NzY1NCprOjkoJxYFBDv66djHtqWUiFtaSTgXBeTGy4ppWDcV5McrekkoBtWkeVsZ6LeGVSWbmmk39sWESxqpeDb1tGp6uXgm5ZRLSok35pVGC2oYt2YEuXq5aAalRrs52GcFlSt6CKc1xLuKGKcltUtp6Gb1dssJiAaE+RqI92XVO1nINpUJSljHJYca2TeV5bspd9YlK0mX5jUrOYfGFcsJR4XHCqjnJVjqKFaEu0l3lce6aIakyxlXdZiaGCY2eqi2xOsZJyUqKXd1aXmXlYkpp5WJOZeFablnRSqJBuXKuIZnOif1uRlnNVrYlke555VKWMZ3ieeFOsiGKIlnBno31WpYhhjZJqeppyaaF5XqZ9VKqBWKWDWaKEWaKDWKSBWKh9YaN3bJ1wepRoi4tdnX9joXJ7kmSSg2Ghcn6PX517cZZlk39tmGeSf2+WZJd6eY9co3CIgm+VYJ5xiIF0kGKeaJV1hYF4jGuWYJ9nl2+Od4V9gIJ7hneKdIxyjXGOco5zjHWKd4d7goB9hXeLb5JnmGmVcop7f4VykGaYcop+eYtomHOHgXOPb459d41ujn51oq6mnZWMg3tyaWBXToOwp56VjIN6cWheVUyorKOZkIZ9c2pgVk2jq6KYjoR7cWddU22wppyRh31zaF5Uaq+lmpCFe3BlW1CVqp+Uin90aV1ShauglYl+c2dcUJ2onJGFeW1iVnOsoJSIfHBkV22soJOHe25iVYSonI+DdmlcVq6hlId6bWBSoaOWiHttYFKlopSGeGpdYqudj4FzZFaSo5WGeGlaeKaYiXprXHGnmIl6a1t7pZaGd2dXlaCQgHBgZ6iYh3dnVp2djHxrW4qgj35tXIWgj35tW4qejXtqWJyaiXdlZKaUgm9dip2LeGVnpJJ/bFmfl4RxXY6ah3Ngh5uIdGCHm4dzXo6ZhHBbnJR/a2WjjnljgJuFcFqjkHtlf5qEbmKijHZflJN8ZYKYgWp1m4RtbZ6Gbmqeh29rnoZtcZuDanuYf2aIknlgmotya5yDaYSTeV+fiG16lntgnIdsf5N3Zp2BZo+Lb3uTd2uafmGchGeQiWyHjG+Aj3F9kHN7kXN7kXJ9j3GBjG6IiWmQhGSZfmyXd3mPb4iGZZl8cpJxhYZlmnl6jWuQfnORbo1/cpFtjn53jWmUeH+GbZRvjXx9iG2Tbo94goJ3i2yUbZF1iHyAgnmIc41tkmqVbZJwj3KNc4t0i3WLdItzjHGOb5Bsk3CPdIp5hH5+g3iJcI9xjXmDgHqIb5B2h396iHCPeoGEcY54goRxjnyinZeRi4V/eXNtZ2FdpJ6XkYuFf3lybGZfd6GalI6HgXp0bWdgdKCak42Gf3lya2Relp2Wj4iBenNsZV6UnJWOh4B5cmpjbKCYkYqDe3RsZWKgmZGKgntza2RynpaPh393b2hgmJmRiYF5cWlhk5mRiYB4cGhjn5aOhn11bGSDmpGJgHdvZnebkoqBeG9mepqRiH92bWSLl46FfHJpbpuSiX92bGKYlIuBd21kk5SLgXdtY5qTiX91anGZj4V7cGaMlIp/dWp3mI2DeG1rmo+EeW5nmo+EeW5rmY6Dd2x3louAdGmIkod7b2yYjIF1aYqRhXltepSIfHBvlop+cmuXi35ya5eKfnFwlol8b3mThnlsh4+CdGiXinxvfpGDdmiXiXtuhI6AcnWShHZqloh5a5CKe22Li3xuiIt8bomLfG2MiXprkod3b5KDdHuOf2+IiXptk4Nzfox8bJCFdX2MfGyTg3KEiXh2j35tkINyhod2fot5d458cpB+bpKAbpCBb4+Bb46Bbo+Ab5B+c458eIt5foh1hYRxjH90jXp+h3SIgXONen+Gcox9eol1iH94inWHf3mJdIl9fYZxjnmDgXmIc4x6g4B7hnSMdoh7goB8hHeIc4x2iXmFfIJ/gIF+gnyDe4R6hXqFeoV6hHuEfIJ+gX9/gnyEeYd2iXeIeoR+f4J6hnaJeoN/fYR3iXuCgHuFeYV/fIR5hX98jJGOi4eEgX56d3RxbYGRjouHhIF9endzcG2OkIyJhYJ/e3h0cW2Mj4yIhYF+endzb3mQjYmGgn97d3RweJCNiYWCfnp2c2+HjoqHg397eHRwgo6Lh4N/e3dzb4mNiYWBfXl1cXuOioaCfnp2cnmOioaCfnp2coGNiYWAfHh0co6KhoJ+eXVxiouHgn56dXGLioaCfXl0do2JhIB7d3OFioaCfXl0fYuHgn55dXuLh4J+eXV+i4aBfXhzhomEgHt2eIuHgn14c4iIg356dYKJhH96dYGJhH96dYKIg355dIeHgn14eIqFgHt2goiDfXh5ioR/enWIhoF7doOHgXx3gYeCfHeBh4F8d4OGgXt2h4V/enmIg354gIaBfHaIhH55f4aBe3iIg314hIR/eYCFgHp9hoF7e4eBe3qHgXx7hoF7fIaAe36Ff3qBhH54hYJ8e4aAe4CEfniGgXx+hH95hoF7f4R+eoaAeoOCfH+EfnuFf3mFgHuDgXyBgnyAg31/g31/g31/g31/gn2AgnyBgXuCgHuEf3yEfn6CfYGBe4R/fYN9gIF7hH5+gnyCf32CfYJ/fYJ9gn9+gnyDfn+BfYN9gX9/gX2CfYJ+gIB+gX2CfYJ+gX+AgH+BfoF9gn2CfYJ9gn6BfoF+gX6BfoF+gX6BfoJ9gn6BfoF/gH9/gH+BfoF+gX+AgH+AfoF/gH9/gH6Bf4CAfoF/gIB+gX+DgoGBgIB/f35+fn19goKBgYCAf39/fn59f4KBgYCAgH9/fn5+f4GBgYCAf39/fn5+gYGBgICAf39/fn6AgYCAgIB/f39/f4CAgICAf39/f3+AgICAgH9/f39/gICAgH9/f39/gICA"},sound={};function initSound(){for(var e in audioSrc)sound[e]=document.createElement("AUDIO"),sound[e].src=audioSrc[e]}function isMobile(){return!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))}initSound();var mobile=isMobile(),pad=document.getElementById("pad"),padctx=pad.getContext("2d"),padPoints=[[72,152],[120,176],[72,200],[24,176]],padRadius=20,padleft=0,padtop=0,padWait=0;function resizePad(){pad.width=canvas.width,pad.height=canvas.height,pad.style.left=canvas.style.left,pad.style.top=Math.floor(window.innerHeight-canvas.height)+"px",padleft=canvasleft,padtop=Math.floor(window.innerHeight-canvas.height)}function initPad(){if(0==mobile)return!1;for(var e in padPoints)padctx.beginPath(),padctx.arc(padPoints[e][0]*scale,padPoints[e][1]*scale,padRadius*scale,0,2*Math.PI),padctx.lineWidth=2,padctx.strokeStyle="rgba(255,255,255,0.2)",padctx.fillStyle="rgba(255, 255, 255, 0.025)",padctx.stroke(),padctx.fill()}var gamescreen=document.createElement("canvas"),gamectx=gamescreen.getContext("2d");gamescreen.width=144,gamescreen.height=224;var scale=1,canvas=document.getElementById("screen"),ctx=canvas.getContext("2d");canvas.width=gamescreen.width*scale,canvas.height=gamescreen.height*scale,window.addEventListener("resize",resizeCanvas,!1),resizeCanvas();var canvasleft=0,cavnastop=0;function resizeCanvas(){scale=(scale=Math.floor(window.innerWidth/gamescreen.width))<1?1:3<scale?3:scale,canvas.width=gamescreen.width*scale,canvas.height=gamescreen.height*scale;var e=Math.floor((window.innerWidth-canvas.width)/2),t=Math.floor((window.innerHeight-canvas.height)/2);e=e<0?0:e,t=mobile?0:t<0?0:t,canvas.style.left=e+"px",canvas.style.top=t+"px",canvasleft=e,canvastop=t,resizePad(),initPad()}var tileset=new Image;function getTilePos(e){return[e%4*16,16*Math.floor(e/4)]}tileset.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAFVBMVEUAAAAbHDPafSLm2il7U60tk93TJzRJbbmrAAAAB3RSTlMA////////pX+m+wAAA2pJREFUaIHVmQ2ThCAIhjVr//9PvpKElw/L8uZmj9nNMHlExMYq5UlJYe1S5QlAt1+WcUKKDJal7DIOKM2gNEDJZf89AJwGfcDRgbJjNTmD/aw6tLvEzap7Rdm33nwMdstEgMTd7s3Fv3yOGoZQyP5sTl2TI3kEQAGkQLar5Beb+CGwmg77TC5ndtmlwVUQj9Nm0AX0JYUGx/kjwNEz+vgUUAgAMdP6vQcT8keAjQ9dwKYub1W0fYcQArZNEdrJFhFSYLDrpf6EB0UA2DbXZagiQN0P9t4K/cEFpd0CfAMTEzUkB3AxsAA7Kw5ALS4NbAANwM77dqx/PaJNJ5ONQc44TWpIx5FikCNJiOWECRKjhFlQAegpjFj8EY8Cxshiiqb5EeBS0sfKcXe0ZyABYAFpZnKw1z1ggRa74gDmegCQFp8lAujru83KcgJai88SA9T1A9B6Z4Aes4mfCWq1O/sXwMKOhh6gToDMRWruqdIDWjAboPb/m4DZITgDCN9IEGencTaRZlN5ejGFIpG7Xc624ql8A+CcDpaHejqyQTew+t8AoNbpNeu7egNIt04/l01HRwBhnc4Goa4AZC0NRvS3AK78CoBUQJCG9W9YTP8TADum+/tB154ILwGy+f4tDy7Wf8eFomPwFCB75/tUjgHHbt4D7GLpA9w0PgPg88SrIfRmYRSgdu8vgyjPE/91NWoAD5ULOjnLGozctlZYf94TKXBU0zDm30AZr5/niRqs4IFvLD2qVvW0TmM2ABkLuC7/FfkwBNWvIYFu2gcAKLDGxoYBPuo62lna65IBc+I9UJ4EugTV5MHAf5XxczkG8DMAAOX6alzMEUANKXV7GfZgOgY++iZlu7PQAHOSwo6h53DoUJk6KY5tzWRwLFYGYJA9QNeuNhP1hXeA9XoILp9WnNZuDGDsfvoxiJLBZhbAdZ3hFjApkom9zFO6T+/xtYDHxwCI3xXgejFZwLmhSa6n7gJwAHNDwUxZQ5AB0BFnISuC6UlaaH0+D0J3VUoGAq+I+wBwOttX5VAIgMdG06Pts35LDSUA4iBRS/u5QIp6P+hF29hLz7jRXG0GGn+y//7gdqq5A2guuRfT+pFnQPyrdtxsD4n7/gCPPOMugN4eebbRIcjRfm8YA6jCPrE8BujvDW8+1pk8mJQfESVBdomKwz0AAAAASUVORK5CYII=";var now,dt=0,last=timestamp(),slow=1,step=1/60,slowStep=slow*step;function timestamp(){return window.performance&&window.performance.now?window.performance.now():(new Date).getTime()}function frame(){for(now=timestamp(),dt+=Math.min(1,(now-last)/1e3);slowStep<dt;)dt-=slowStep,update(step);render(dt/slow),last=now,requestAnimationFrame(frame)}window.addEventListener("gamepadconnected",connectgamepad),window.addEventListener("gamepaddisconnected",disconnectgamepad);var gamepad=[],gamepadwait=0;function connectgamepad(e){gamepad[e.gamepad.index]=e.gamepad}function disconnectgamepad(e){delete gamepad[e.gamepad.index]}function updategamepad(e){return 0!=gamepad.length&&(0<gamepadwait?(gamepadwait-=e,!1):void(isactive?gamepad[0].buttons[12].pressed?(sprites[0].move(0,-1),gamepadwait=isactive?.175:2):gamepad[0].buttons[15].pressed?(sprites[0].move(1,0),gamepadwait=isactive?.175:2):gamepad[0].buttons[13].pressed?(sprites[0].move(0,1),gamepadwait=isactive?.175:2):gamepad[0].buttons[14].pressed&&(sprites[0].move(-1,0),gamepadwait=isactive?.175:2):(gamepad[0].buttons[0].pressed||gamepad[0].buttons[9].pressed)&&"GAME OVER"==titletext&&(startGame(),gamepadwait=1)))}function tryClick(e,t){if(0==mobile)return!1;if(0<padWait)return!1;for(var a=-1,i=0;-1==a&&i<padPoints.length;){var n=e-padleft,o=t-padtop,s=padPoints[i][0]*scale-n,r=padPoints[i][1]*scale-o;Math.sqrt(s*s+r*r)<=padRadius*scale*1.2&&(a=i),i++}var m=[[0,-1],[1,0],[0,1],[-1,0]];0<=a&&(sprites[0].move(m[a][0],m[a][1]),padWait=.15)}function getMaze(e,t){var a=e*t-1;if(a<0)return!1;for(var i=[],n=0;n<e+1;n++)i[n]=[],verti=[];for(n=0;n<e+1;n++)verti[n]=[],here=[Math.floor(Math.random()*e),Math.floor(Math.random()*t)],path=[here],unvisited=[];for(n=0;n<e+2;n++){unvisited[n]=[];for(var o=0;o<t+1;o++)unvisited[n].push(0<n&&n<e+1&&0<o&&(n!=here[0]+1||o!=here[1]+1))}for(;0<a;){var s=[[here[0]+1,here[1]],[here[0],here[1]+1],[here[0]-1,here[1]],[here[0],here[1]-1]],r=[];for(n=0;n<4;n++)unvisited[s[n][0]+1][s[n][1]+1]&&r.push(s[n]);r.length?(a-=1,next=r[Math.floor(Math.random()*r.length)],unvisited[next[0]+1][next[1]+1]=!1,next[0]==here[0]?i[next[0]][(next[1]+here[1]-1)/2]=!0:verti[(next[0]+here[0]-1)/2][next[1]]=!0,path.push(here=next)):here=path.pop()}var m=[Math.floor(Math.random()*e),t-1],d=[Math.floor(Math.random()*e),0];return{x:e,y:t,horiz:i,verti:verti,entry:m,exit:d}}function getRoom(e,t,a){var i=[[0,-1],[0,0],[0,0],[-1,0]],n=[];for(var o in i){var s=t+i[o][0],r=a+i[o][1];s<0||r<0?n[o]=0:o%2==0?n[o]=1==e.verti[r][s]?1:0:o%2==1&&(n[o]=1==e.horiz[r][s]?1:0)}if(e.exit[0]==t&&e.exit[1]==a){var m=!0;n[0]=1}else m=!1;if(e.entry[0]==t&&e.entry[1]==a){var d=!0;n[2]=1}else d=!1;return a>=e.y?n=[1,0,0,0]:a<0&&(n=[0,0,1,0]),{doors:n,isentry:d,isexit:m,hasColumns:100*Math.random()<=columnsChance}}document.addEventListener("touchstart",function(e){if(isactive){var t=e.changedTouches;tryClick(t[0].pageX,t[0].pageY)}else padWait<=0&&"GAME OVER"==titletext&&(startGame(),padWait=1)}),document.addEventListener("click",function(e){isactive?tryClick(e.clientX,e.clientY):padWait<=0&&"GAME OVER"==titletext&&(startGame(),padWait=1)}),document.addEventListener("keypress",function(e){if(" "!=e.key&&"Enter"!=e.key||"GAME OVER"!=titletext||startGame(),0==isactive)return!1;"w"==e.key||"ArrowUp"==e.key?sprites[0].move(0,-1):"s"==e.key||"ArrowDown"==e.key?sprites[0].move(0,1):"a"==e.key||"ArrowLeft"==e.key?sprites[0].move(-1,0):"d"!=e.key&&"ArrowRight"!=e.key||sprites[0].move(1,0)});var roomCanvas=document.createElement("canvas"),roomCtx=roomCanvas.getContext("2d");roomCanvas.width=144,roomCanvas.height=144;var doorPos=[[4,0],[8,4],[4,8],[0,4]];function drawRoom(){roomCtx.clearRect(0,0,144,144);for(var e=getTilePos(wallTile),t=0;t<9;t++)for(var a=0;a<9;a++)0!=t&&8!=t&&0!=a&&8!=a||roomCtx.drawImage(tileset,e[0],e[1],16,16,16*t,16*a,16,16);for(var i in room.doors)1==room.doors[i]&&roomCtx.clearRect(16*doorPos[i][0],16*doorPos[i][1],16,16);if(mazey<0||mazey>=maze.y){e=getTilePos(11);roomCtx.drawImage(tileset,e[0],e[1],16,16,64,64,16,16)}else if(room.hasColumns)for(var i in columnsPos)roomCtx.drawImage(tileset,e[0],e[1],16,16,16*columnsPos[i][0],16*columnsPos[i][1],16,16)}function changeRoom(e,t,a){var i=(a+2)%4;mazex+=e,mazey+=t,sprites[0].mapx=doorPos[i][0],sprites[0].mapy=doorPos[i][1],sprites[0].x=16*sprites[0].mapx,sprites[0].y=16*sprites[0].mapy,room=getRoom(maze,mazex,mazey),drawRoom(),updateIndicator(),mazecanvas=mazeImage(maze,mazex,mazey),resetSpritePool(),0<=mazey&&mazey<4&&(spawnCoins(),spawnEnemies())}function mazeImage(e,t,a){var i=t+"x"+a,n="#7b53ad",o="#1b1c33",s=document.createElement("canvas");s.width=4*e.x+1,s.height=4*e.y+1;var r=s.getContext("2d");r.fillStyle=n,r.fillRect(0,0,s.width,s.height),r.fillStyle=o,r.fillRect(0,0,s.width,1),r.fillRect(0,0,1,s.height),r.fillRect(0,s.height-1,s.width,1),r.fillRect(s.width-1,0,1,s.height),r.fillStyle=n,r.fillRect(4*e.entry[0]+1,s.height-1,3,1),r.fillRect(4*e.exit[0]+1,0,3,1),r.fillStyle=o;for(var m=0;m<e.x;m++)for(var d=0;d<e.y;d++){m+"x"+d==i&&(r.fillStyle="#e6da29",r.fillRect(1+4*m,1+4*d,3,3),r.fillStyle=o),m<e.x-1&&void 0===e.horiz[d][m]&&r.fillRect(4*(m+1),4*d,1,5),d<e.y-1&&void 0===e.verti[d][m]&&r.fillRect(4*m,4*(d+1),5,1)}return s}function updateIndicator(){var e=maze.entry[0]-maze.exit[0],t=maze.entry[1]+1-(maze.exit[1]-1),a=Math.sqrt(e*e+t*t),i=(e=mazex-maze.exit[0],t=mazey-(maze.exit[1]-1),Math.sqrt(e*e+t*t));indicator=5-Math.round(5*i/a),indicatorSx=0+16*Math.floor(indicator%4),indicatorSy=48+16*Math.floor(indicator/4)}function renderText(){var e=titletext;gamectx.clearRect(16,0,96,16);var t=24+Math.floor((96-8*e.length)/2);for(var a in e){var i=e.charCodeAt(a);if(65<=i&&i<=90)var n=i-65+10;else if(48<=i&&i<=58)n=i-48;else n=-1;if(0<=n){var o=0+8*Math.floor(n%8),s=80+8*Math.floor(n/8);gamectx.drawImage(tileset,o,s,8,8,t+8*a,4,8,8)}}}function renderPoints(){gamectx.clearRect(120,0,32,16);var e=String("000"+Math.floor(points)).slice(-3);for(var t in e){var a=e.charCodeAt(t)-48,i=0+8*Math.floor(a%8),n=80+8*Math.floor(a/8);gamectx.drawImage(tileset,i,n,8,8,120+8*t,4,8,8)}}function renderInfo(){gamectx.clearRect(0,160,64,144);var e=["FIND WIFI SIGNAL","AND BECOME","CIVILIZED MAN"],t=[8,32,20];for(var a in e)for(var i in e[a]){var n=e[a].charCodeAt(i)-65+10,o=0+8*Math.floor(n%8),s=80+8*Math.floor(n/8);gamectx.drawImage(tileset,o,s,8,8,t[a]+8*i,176+16*a,8,8)}}var maze=null,room=null,mazex=null,mazey=null,mazecanvas=null,columnsPos=[[2,2],[6,2],[6,6],[2,6]],columnsChance=0,showMap=!1,indicator=0,indicatorSx=0,indicatorSy=48,indicatorActualSx=indicatorSx,indicatorActualSy=indicatorSy,indicatorTime=2,wallTile=8,level=1,leveltime=0,points=0,isactive=!0,titletext="",nextleveltimer=-1,maxEnemies=0,maxCoins=5,sprites=[];function startGame(){indicatorActualSx=indicatorSx=indicator=0,indicatorActualSy=indicatorSy=48,indicatorTime=2,"ONLINE"==titletext?level++:points=0,leveltime=0,titletext="LEVEL "+level,maxEnemies=Math.floor(Math.sqrt(level-1)),maxCoins=Math.floor(Math.sqrt(10*level)),columnsChance=Math.floor(Math.sqrt(10*level)),wallTile=8+(level-1)%3,isactive=!0,maze=getMaze(4,4),mazex=maze.entry[0],mazey=maze.entry[1]+1,(sprites=[])[0]=new Player,room=getRoom(maze,mazex,mazey),drawRoom(),mazecanvas=mazeImage(maze,mazex,mazey),renderPoints(),renderText(),renderInfo()}function Player(){this.type="player",this.active=!0,this.mapx=4,this.mapy=4,this.x=16*this.mapx,this.y=16*this.mapy,this.width=16,this.height=16,this.tile=0,this.sx=0,this.sy=0}function resetSpritePool(){sprites=sprites.slice(0,1)}function spawnEnemies(){for(var e=Math.round(Math.random()*maxEnemies),t=0;t<e;t++)sprites.push(new Enemy)}function spawnCoins(){for(var e=1+Math.round(Math.random()*maxCoins),t=0;t<e;t++)sprites.push(new Coin)}function Coin(){if(this.type="coin",this.active=!0,this.mapx=1+Math.round(5*Math.random()),this.mapy=1+Math.round(5*Math.random()),this.x=16*this.mapx,this.y=16*this.mapy,this.tiles=[2,3,7,3],this.tile=0,this.speed=5+3*Math.random(),this.width=16,this.height=16,this.sx=32,this.sy=0,room.hasColumns)for(var e in columnsPos)columnsPos[e][0]==this.mapx&&columnsPos[e][1]==this.mapy&&(this.active=!1)}function checkCollisions(){for(var e=sprites[0],t=1;t<sprites.length;t++)1==sprites[t].active&&e.mapx==sprites[t].mapx&&e.mapy==sprites[t].mapy&&("coin"==sprites[t].type?(sound.coin.play(),points+=5,sprites[t].active=!1,1e3<=points&&(points=999),renderPoints(),999<=points&&0==showMap&&(sound.fanfare.play(),showMap=!0)):"enemy"==sprites[t].type&&(isactive=!(gamepadwait=padWait=2),sprites[0].active=!1,indicatorTime=1,titletext="GAME OVER",renderText(),sound.hurt.play()))}function update(e){if(updategamepad(e),0<padWait&&(padWait-=e),"ONLINE"==titletext&&(nextleveltimer-=e)<0&&(nextleveltimer=-1,startGame()),0==isactive)return!1;for(var t in 3<=(leveltime+=e)&&(titletext="OFFLINE "+level,renderText()),sprites)sprites[t].update(e);(indicatorTime-=e)<=0&&(indicatorTime=2+indicatorTime),1.9<=indicatorTime?(indicatorActualSx=32,indicatorActualSy=64):(indicatorActualSx=indicatorSx,indicatorActualSy=indicatorSy),checkCollisions()}function render(e){for(var t in gamectx.clearRect(0,16,gamescreen.width,gamescreen.height-16-64),showMap&&gamectx.drawImage(mazecanvas,16,0),gamectx.drawImage(roomCanvas,0,16),sprites){var a=sprites[t];1==a.active&&gamectx.drawImage(tileset,a.sx,a.sy,a.width,a.height,a.x,16+a.y,a.width,a.height)}gamectx.drawImage(tileset,indicatorActualSx,indicatorActualSy,16,16,0,0,16,16),ctx.clearRect(0,0,canvas.width,canvas.height),ctx.drawImage(gamescreen,0,0,gamescreen.width,gamescreen.height,0,0,canvas.width,canvas.height)}tileset.onload=function(){ctx.imageSmoothingEnabled=!1,gamectx.imageSmoothingEnabled=!1,startGame(),requestAnimationFrame(frame)},Player.prototype.move=function(e,t){var a=this.mapx+e,i=this.mapy+t,n=0<a&&a<8&&0<i&&i<8;if(room.hasColumns)for(var o in columnsPos)columnsPos[o][0]==a&&columnsPos[o][1]==i&&(n=!1);for(var o in room.doors)1==room.doors[o]&&doorPos[o][0]==a&&doorPos[o][1]==i&&(n=!0);n&&(this.mapx=a,this.mapy=i,this.x=16*this.mapx,this.y=16*this.mapy),mazey<0&&4==this.mapx&&4==this.mapy?(sound.fanfare.play(),sprites[0].sx=16,sprites[0].sy=0,titletext="ONLINE",nextleveltimer=1.75,renderText(),isactive=!(gamepadwait=padWait=2)):mazey>=maze.y&&4==this.mapx&&4==this.mapy&&(sprites[0].sx=0,sprites[0].sy=0),a<0?changeRoom(-1,0,3):8<a?changeRoom(1,0,1):i<0?changeRoom(0,-1,0):8<i&&changeRoom(0,1,2)},Player.prototype.update=function(e){},Enemy=function(){this.type="enemy",this.active=!0,this.mapx=2+Math.round(4*Math.random()),this.mapy=2+Math.round(4*Math.random()),this.x=16*this.mapx,this.y=16*this.mapy,this.width=16,this.height=16,this.enemy=Math.round(2*Math.random()),this.tiles=[[4,30],[5,19],[6,31]],this.tile=0,this.sx=0+16*Math.round(2*Math.random()),this.sy=16,this.movetimestart=.35+1*Math.random(),this.movetime=this.movetimestart},Enemy.prototype.update=function(e){this.tile+=this.movetimestart*e,this.tile>=this.tiles[this.enemy].length&&(this.tile-=this.tiles[this.enemy].length);var t=this.tiles[this.enemy][Math.floor(this.tile)];if(this.sx=16*Math.floor(t%4),this.sy=16*Math.floor(t/4),this.movetime-=e,this.movetime<=0){this.movetime=this.movetimestart-this.movetime;var a=sprites[0].mapx-this.mapx,i=sprites[0].mapy-this.mapy;Math.abs(a)>Math.abs(i)?this.move(a/Math.abs(a),0):this.move(0,i/Math.abs(i))}},Enemy.prototype.move=function(e,t){var a=this.mapx+e,i=this.mapy+t,n=0<a&&a<8&&0<i&&i<8;for(var o in room.doors)1==room.doors[o]&&doorPos[o][0]==a&&doorPos[o][1]==i&&(n=!0);for(o=1;o<sprites.length;o++)"coin"!=sprites[o].type&&a==sprites[o].mapx&&i==sprites[o].mapy&&(n=!1);n&&(this.mapx+=e,this.mapy+=t,this.x=16*this.mapx,this.y=16*this.mapy)},Coin.prototype.update=function(e){this.tile+=this.speed*e,this.tile>=this.tiles.length&&(this.tile-=this.tiles.length),this.sx=16*Math.floor(this.tiles[Math.floor(this.tile)]%4),this.sy=16*Math.floor(this.tiles[Math.floor(this.tile)]/4)};