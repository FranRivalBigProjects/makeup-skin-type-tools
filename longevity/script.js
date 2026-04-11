const res=document.getElementById('res');

function run(){
  const txt=(document.getElementById('input').value||'').toLowerCase();
  const val=document.getElementById('value').value||'';
  let out='Result:\n';

  if(txt.includes('oily')){
    out+='- Use mattifying primer and oil-free foundation\n';
  }
  if(txt.includes('dry')){
    out+='- Hydrate skin and use cream/liquid products\n';
  }
  if(txt.includes('sensitive')){
    out+='- Avoid fragrance and alcohol-based products\n';
  }
  if(txt.includes('acne')){
    out+='- Use non-comedogenic formulas\n';
  }
  if(txt.includes('pores')){
    out+='- Use pore-filling silicone primer\n';
  }
  if(txt.includes('cakey')){
    out+='- Reduce powder and prep skin better\n';
  }
  if(txt.includes('oxid')){
    out+='- Try lighter shade or different formula\n';
  }

  if(val){
    out+='- Input value: '+val+'\n';
  }

  out+='- Adjust routine based on skin behavior\n';

  res.innerText=out;
}