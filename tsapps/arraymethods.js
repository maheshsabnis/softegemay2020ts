var characters = new Array();
characters.push('James Bond');
characters.push('Indiana Jones');
characters.push('Ethan Hunt');
characters.push('Jason Bourn');
characters.push('Iron Man');
characters.push('Captain America');
characters.push('Thor');
characters.push('Hulk');
// using filter() method to return an array as output based in condition
var res = characters.filter(function (n, i) {
    return n.length > 9;
});
console.log(res);
console.log("Sort Array " + characters.sort());
console.log("Sort Array " + characters.reverse());
