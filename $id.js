

function $id(s){
 const i=s,m=$id.mem;
 return i?(m[i]||(m[i]=document.getElementById(i))):null;
}

$id.%24mem=Object.create(null);
	
/*
console.dir($id('zzz'));
console.dir($id('zzz'));
console.dir($id('z'));
*/
