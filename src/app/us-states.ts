
var STATES = [
  { id: 'alaska', name: 'Alaska', item1: 'test', item2: 'test' },
  { id: 'hawaii', name: 'Hawaii', item1: 'test', item2: 'test' }, 
  { id: 'washington', name: 'Washington', item1: 'test', item2: 'test' }, 
  { id: 'oregon', name: 'Oregon', item1: 'test', item2: 'test' }, 
  { id: 'idaho', name: 'Idaho', item1: 'test', item2: 'test' }, 
  { id: 'wyoming', name: 'Wyoming', item1: 'test', item2: 'test' }, 
  { id: 'montana', name: 'Montana', item1: 'test', item2: 'test' }, 
  { id: 'utah', name: 'Utah', item1: 'test', item2: 'test' }, 
  { id: 'nevada', name: 'Nevada', item1: 'test', item2: 'test' }, 
  { id: 'cali', name: 'California', item1: 'test', item2: 'test' }, 
  { id: 'arizona', name: 'Arizona', item1: 'test', item2: 'test' }, 
  { id: 'colorado', name: 'Colorado', item1: 'test', item2: 'test' }, 
  { id: 'newmexico', name: 'New Mexico', item1: 'test', item2: 'test' }, 
  { id: 'northdakota', name: 'North Dakota', item1: 'test', item2: 'test' }, 
  { id: 'southdakota', name: 'South Dakota', item1: 'test', item2: 'test' }, 
  { id: 'nebra', name: 'Nebraska', item1: 'test', item2: 'test' }, 
  { id: 'kanasas', name: 'Kanasas', item1: 'test', item2: 'test' }, 
  { id: 'oakl', name: 'Oaklahoma', item1: 'test', item2: 'test' }, 
  { id: 'texas', name: 'Texas', item1: 'test', item2: 'test' }, 
  { id: 'louis', name: 'Lousiana', item1: 'test', item2: 'test' }, 
  { id: 'arkansas', name: 'Arkansas', item1: 'test', item2: 'test' }, 
  { id: 'missouri', name: 'Missouri', item1: 'test', item2: 'test' }, 
  { id: 'minnesota', name: 'Minnesota', item1: 'test', item2: 'test' }, 
  { id: 'wisconsin', name: 'Wisconsin', item1: 'test', item2: 'test' }, 
  { id: 'iowa', name: 'Iowa', item1: 'test', item2: 'test' }, 
  { id: 'illinois', name: 'Illinois', item1: 'test', item2: 'test' }, 
  { id: 'indiana', name: 'Indiana', item1: 'test', item2: 'test' }, 
  { id: 'michigan', name: 'Michigan', item1: 'test', item2: 'test' }, 
  { id: 'ohio', name: 'Ohio', item1: 'test', item2: 'test' }, 
  { id: 'maine', name: 'Maine', item1: 'test', item2: 'test' }, 
  { id: 'kansas', name: 'Kansas', item1: 'test', item2: 'test' },   
  { id: 'newhamp', name: 'New Hampshire', item1: 'test', item2: 'test' }, 
  { id: 'vermont', name: 'Vermont', item1: 'test', item2: 'test' }, 
  { id: 'massachu', name: 'Massachusettes', item1: 'test', item2: 'test' }, 
  { id: 'rhode', name: 'Rhode Island', item1: 'test', item2: 'test' }, 
  { id: 'connet', name: 'Connecticut', item1: 'test', item2: 'test' }, 
  { id: 'newyork', name: 'New York', item1: 'test', item2: 'test' }, 
  { id: 'pennsyl', name: 'Pennsylvania', item1: 'test', item2: 'test' }, 
  { id: 'westvir', name: 'West Virginia', item1: 'test', item2: 'test' }, 
  { id: 'virginia', name: 'Virginia', item1: 'test', item2: 'test' }, 
  { id: 'kentucky', name: 'Kentucky', item1: 'test', item2: 'test' }, 
  { id: 'tenn', name: 'Tennessee', item1: 'test', item2: 'test' }, 
  { id: 'northcaro', name: 'North Carolina', item1: 'test', item2: 'test' }, 
  { id: 'southcaro', name: 'South Carolina', item1: 'test', item2: 'test' }, 
  { id: 'mississi', name: 'Mississippi', item1: 'test', item2: 'test' }, 
  { id: 'alabama', name: 'Alabama', item1: 'test', item2: 'test' }, 
  { id: 'georgia', name: 'Georgia', item1: 'test', item2: 'test' }, 
  { id: 'florida', name: 'Florida', item1: 'test', item2: 'test' }, 
  { id: 'maryland', name: 'Maryland', item1: 'test', item2: 'test' }, 
  { id: 'delaware', name: 'Delaware', item1: 'test', item2: 'test' }, 
  { id: 'newjersey', name: 'New Jersey', item1: 'test', item2: 'test' }
];

var STATESCOMBINE = [{lbl:'name' , type:'str'},
  {lbl:'item1' , type:'str'},
  {lbl:'item2' , type:'int'}];


export const STATESCONFIG = {
  states: STATES,
  combine: STATESCOMBINE
}