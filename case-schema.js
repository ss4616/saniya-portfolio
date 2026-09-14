(function(root){
 function validateCases(cases){
  if(!Array.isArray(cases)||!cases.length||cases.length>100)throw Error('Provide between 1 and 100 test cases.');
  const ids=new Set();
  for(const c of cases){
   if(!c||typeof c!=='object')throw Error('Each case must be an object.');
   for(const k of ['id','title','path','selector','assertion','expected'])if(typeof c[k]!=='string')throw Error('Every case needs text fields: id, title, path, selector, assertion, expected.');
   if(!/^QA-\d{3,}$/.test(c.id)||ids.has(c.id))throw Error('Use unique IDs such as QA-001.');ids.add(c.id);
   if(!c.title.trim()||!c.selector.trim()||c.title.length>200||c.selector.length>300)throw Error('Add a title and selector (maximum 200 and 300 characters).');
   if(!/^\/(?!\/)[a-zA-Z0-9_./-]*(?:#[a-zA-Z0-9_-]+)?$/.test(c.path)||c.path.includes('..'))throw Error('Use a local page path such as / or /qa-suite.html.');
   if(!['visible','text','href','count'].includes(c.assertion))throw Error('Choose visible, text, href, or count.');
   if(c.assertion==='count'&&!/^\d{1,4}$/.test(c.expected))throw Error('Count must be a whole number from 0 to 9999.');
   if(['text','href'].includes(c.assertion)&&!c.expected.trim())throw Error('Text and link checks need an expected value.');
  }return cases;
 }
 if(typeof module!=='undefined'&&module.exports)module.exports={validateCases};else root.validateCases=validateCases;
})(typeof window!=='undefined'?window:this);
