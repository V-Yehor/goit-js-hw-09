!function(){var e=document.querySelector("input[name=delay]"),n=document.querySelector("input[name=step]"),o=document.querySelector("input[name=amount]");function t(e,n){var o={position:e,delay:n},t=Math.random()>.3;return new Promise((function(e,u){setTimeout((function(){t?e(o):u(o)}),n)}))}document.querySelector(".form").addEventListener("submit",(function(u){u.preventDefault();for(var c=Number(e.value),a=1;a<=o.value;a+=1)t(a,c).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),c+=Number(n.value)}))}();
//# sourceMappingURL=03-promises.f12e81f0.js.map
