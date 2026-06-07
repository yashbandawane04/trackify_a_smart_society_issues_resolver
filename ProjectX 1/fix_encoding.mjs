import { readFileSync, writeFileSync } from 'fs';
const file = 'society-hub/app/dashboard/documents/page.tsx';
let content = readFileSync(file, 'utf8');
// Replace mojibake sequences
content = content.split('\u2013').join('-');   // en dash
content = content.split('\u2014').join('-');   // em dash  
content = content.split('\u2022').join('*');   // bullet
content = content.split('\u20B9').join('Rs.'); // rupee
content = content.split('\u2713').join('OK');  // checkmark
content = content.split('\u2192').join('->');  // arrow
writeFileSync(file, content, 'utf8');
console.log('Done');
