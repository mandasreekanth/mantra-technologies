var filter = { 'type': 'external' };
var users = [{'id':1, 'type': 'external'}, {'id':2}, {'id':3, type: 'internal'}] ;
users= users.filter(function(item) {
  for (var key in filter) {
    if (item[key] === undefined || item[key] != filter[key])
      return false;
  }
  return true;
});

console.log(users)
